import React, { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { contractAddress, abi } from "../../contracts/sharkFeast";
import { TransactionResponse } from "@ethersproject/abstract-provider";

interface CommemorativeNFTProps {
  key: number;
  id: Number;
}

const CommNFT = ({ id }: CommemorativeNFTProps) => {
  const [buttonText, setButtonText] = useState<String>("Mint");
  const { account, library } = useWeb3React();

  const getBalance = useCallback(async () => {
    const contract = new ethers.Contract(
      contractAddress,
      abi,
      library.getSigner()
    );
    const balance = await contract.balanceOf(account, id);
    if (balance > 0) {
      setButtonText("Minted!");
    }
  }, [account, id, library]);

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  const getMerkleProof = async () => {
    if (buttonText === "Minted!") {
      return;
    }
    const info = {
      address: account,
      mintId: id,
    };

    const res = await fetch("/api/merkle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    let proof = await res.json();
    proof = proof["proof"];
    const signer = await library.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const contractWithSigner = contract.connect(signer);
    try {
      const transaction: TransactionResponse =
        await contractWithSigner.mintCommemorativeShark(id, proof);
      setButtonText("Pending...");
      await transaction.wait();
      await getBalance();
    } catch (err) {
      console.log(err);
      setButtonText("Mint");
    }
  };

  return (
    <div className="text-center xs:px-6 sm:px-0 sm:w-1/4 sm:m-auto">
      <video autoPlay loop muted className="shadow-xl rounded-2xl  m-auto ">
        <source src={`./commemorative-${id}.mp4`} type="video/mp4" />
      </video>

      {/* TODO: Make Minted NFTs unclickable */}

      <button
        className="cursor-pointer mt-3 border-2 rounded-xl px-4 py-2 hover:text-shark-white hover:bg-shark-dark-blue hover:border-shark-dark-blue max-w-max shadow-md"
        onClick={getMerkleProof}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CommNFT;
