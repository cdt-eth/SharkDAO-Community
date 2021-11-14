/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import CommNFT from "./CommNFT";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import { ApprovedMintsRes } from "../api/approved";
import { ethers } from "ethers";

const injected = new InjectedConnector({
  supportedChainIds: [1, 4],
});

const Mint = () => {
  const [eligbleNfts, setEligbleNfts] = useState<Number[]>([]);
  const [checkedEligible, setCheckedEligible] = useState<boolean>(false);

  const { active, account, activate, deactivate } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (err) {
      console.log(err);
    }
  };

  const disconnect = async () => {
    try {
      await deactivate();
      setCheckedEligible(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getMintsRes = async () => {
    const bodyApproved = {
      address: account,
    };

    const resApproved = await fetch("/api/approved", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyApproved),
    });
    const approved: ApprovedMintsRes = await resApproved.json();
    setEligbleNfts(approved["ids"]);
    setCheckedEligible(true);
  };

  const shortAddress = account?.substr(0, 4) + "..." + account?.substr(38, 4);

  return (
    <>
      <div>
        <div className="flex sm:gap-8 my-6 justify-between items-center h-full">
          <div className="xs:w-1/2 sm:w-1/2">
            <img
              className="xs:w-1/2 sm:w-1/6"
              src="shark-logo-black.svg"
              alt="shark-logo"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="font-shark-display-heavy sm:text-xl tracking-tight ">
              {active && account && shortAddress}
            </div>

            <button
              className={`py-2 px-1 w-20 rounded-xl font-shark-display cursor-pointer hover:opacity-75 tracking-tight transition duration-200 ${
                active
                  ? "bg-shark-light-blue text-black"
                  : "bg-shark-blue text-white"
              }`}
              onClick={active ? disconnect : connect}
            >
              {active ? "Disconnect" : "Connect"}
            </button>
          </div>
        </div>
      </div>

      <br />

      <div className="flex border-6 justify-center font-shark-display xs:text-lg sm:text-3xl">
        {active ? (
          !checkedEligible && (
            <button
              className={`${
                !checkedEligible && "bg-shark-beach rounded-2xl py-2"
              } px-3 `}
              onClick={getMintsRes}
            >
              Show Eligible NFTs
            </button>
          )
        ) : (
          <div className="">Please connect your wallet.</div>
        )}
        <br />
        {/* Error */}
        {checkedEligible && eligbleNfts.length == 0 ? (
          <p className="font-shark-display  xs:text-lg sm:text-3xl my-6 sm:w-1/2 text-center tracking-tighter">
            You are not elibile for any mints, but you may be eligible for other
            mints in the future.
          </p>
        ) : (
          <>
            {eligbleNfts.map((id) => (
              <CommNFT key={id as number} id={id} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Mint;
