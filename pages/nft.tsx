/* eslint-disable @next/next/no-img-element */
import React from "react";
import Mint from "./components/Mint";

const NFT = () => {
  return (
    <div className="xs:px-4 sm:px-14 xs:py-2 sm:py-4">
      <Mint />

      <div className="hidden">
        <div>
          <img src="./commemorative-2.gif" alt="commemorative-15" />
          <img src="./commemorative-5.gif" alt="commemorative-15" />
          <img src="./commemorative-15.gif" alt="commemorative-15" />
        </div>
        <div>
          <img className="h-90" src="./2.gif" alt="commemorative-15" />
          <img src="./commemorative-5.gif" alt="commemorative-15" />
          <img src="./commemorative-15.gif" alt="commemorative-15" />
        </div>
      </div>
    </div>
  );
};

export default NFT;
