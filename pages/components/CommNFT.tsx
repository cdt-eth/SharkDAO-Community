import React from "react";
import Image from "next/image";
import { useWeb3React } from "@web3-react/core";

interface CommemorativeNFTProps {
  key: number;
  id: Number;
}

const CommNFT = ({ id }: CommemorativeNFTProps) => {
  const { account } = useWeb3React();

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

    const proof = await res.json();
    console.log(proof);
  };

  return (
    <div className="text-center xs:px-6 sm:px-0 sm:w-1/4 sm:m-auto">
      <video autoPlay loop muted className="shadow-xl rounded-2xl  m-auto ">
        <source src={`./commemorative-${id}.mp4`} type="video/mp4" />
      </video>

      {/* TODO: Call contract on click */}

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
