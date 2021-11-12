import React from "react";
import Image from 'next/image';
import { useWeb3React } from "@web3-react/core";


interface CommemorativeNFTProps {
    key: number,
    id: Number
}


const CommNFT = ({id} :CommemorativeNFTProps) => {
    const {account} = useWeb3React();

    const getMerkleProof = async() => {
        const info = {
            address: account,
            mintId: id
        }
      
        const res = await fetch('/api/merkle', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        });

        const proof = await res.json();
        console.log(proof)
        
    }

    return(
        <div>
            <Image
            src={`/commemorative-${id}.gif`} 
            alt={`Commemorative NFT for Noun ${id}`}
            width={500}
            height={500}
            />
            {/* TODO: Call contract on click */}
            <button onClick={getMerkleProof}>Mint</button>
        </div>
    )
}

export default CommNFT;