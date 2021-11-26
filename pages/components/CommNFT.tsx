import React from "react";
import Image from "next/image";
import { useWeb3React } from "@web3-react/core";
import { ethers } from 'ethers';
import {contractAddress, abi} from '../../contracts/sharkFeast';

interface CommemorativeNFTProps {
  key: number;
  id: Number;
}

const CommNFT = ({ id }: CommemorativeNFTProps) => {
  const { account, library } = useWeb3React();

  const getMerkleProof = async () => {
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
    proof = proof['proof'];
    const signer = await library.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, library.getSigner());
    const contractWithSigner = contract.connect(signer);
    const pending = await contractWithSigner.mintCommemorativeShark(id, proof);
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
        Mint
      </button>
    </div>
  );
};

export default CommNFT;
