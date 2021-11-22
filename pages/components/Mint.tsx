/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react";
import CommNFT from "./CommNFT";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React } from "@web3-react/core";
import { ApprovedMintsRes } from "../api/approved";
import { ethers } from "ethers";
import Link from "next/link";
import Header from "./Header";

const injected = new InjectedConnector({
  supportedChainIds: [1, 4],
});

const walletconnect = new WalletConnectConnector({
  rpc: {
    1: process.env.REACT_APP_RPC_URL!,
  },
});

const Mint = () => {
  const [eligbleNfts, setEligbleNfts] = useState<Number[]>([]);
  const [checkedEligible, setCheckedEligible] = useState<boolean>(false);

  const { active, account, activate, deactivate } = useWeb3React();

  const connectMM = async () => {
    try {
      await activate(injected);
    } catch (err) {
      console.log(err);
    }
  };

  const connectWC = async () => {
    try {
      await activate(walletconnect);
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

  const getMintsRes = useCallback(async () => {
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
  }, [account]);

  const shortAddress = account?.substr(0, 4) + "..." + account?.substr(38, 4);

  useEffect(() => {
    if (account) {
      console.log("useEffect");
      getMintsRes();
    }
  }, [account, getMintsRes]);

  return (
    <div>
      <Header />
      <div className="">
        <div className="flex sm:gap-8 my-6 justify-between items-center h-full ">
          <div className="xs:hidden sm:flex sm:w-1/2">
            <Link passHref href="/">
              <img
                className="xs:w-1/2 sm:w-1/6 cursor-pointer"
                src="shark-logo-black.svg"
                alt="shark-logo"
              />
            </Link>
          </div>

          <div className="flex items-center gap-4 xs:flex-col sm:flex-row ">
            <div className="flex justify-between ">
              <div className="sm:hidden w-1/4 ">
                <Link passHref href="/">
                  <img
                    className="sm:w-1/2"
                    src="shark-logo-black.svg"
                    alt="shark-logo"
                  />
                </Link>
              </div>

              <div className="font-shark-display-heavy sm:text-xl tracking-tight ">
                {active && account && shortAddress}
              </div>
            </div>

            <div className=" xs:flex xs:flex-row xs:gap-4 xs:justify-center ">
              <button
                className={`xs:w-1/3 py-2 px-1 sm:w-28 rounded-xl font-shark-display cursor-pointer hover:opacity-75 tracking-tight transition duration-200 flex flex-row items-center gap-2 justify-center ${
                  active
                    ? "bg-shark-dark-blue text-white"
                    : "bg-shark-blue text-white"
                }`}
                onClick={connectMM}
              >
                <img className="w-1/5" src="m.png" alt="mm" />
                {active ? "Disconnect" : "Connect "}
              </button>

              <button
                className={`xs:w-1/3 py-2 px-1 sm:w-28 rounded-xl font-shark-display cursor-pointer hover:opacity-75 tracking-tight transition duration-200 flex flex-row items-center gap-2 justify-center ${
                  active
                    ? "bg-shark-dark-blue text-white"
                    : "bg-shark-blue text-white"
                }`}
                onClick={connectWC}
              >
                <img className="w-1/5" src="w.png" alt="mm" />
                {active ? "Disconnect" : "Connect"}
              </button>
            </div>
            {/* {active && <button onClick={disconnect}>DISCONNECT</button>} */}
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
          <div className="flex gap-4 flex-wrap">
            {eligbleNfts.map((id) => (
              <CommNFT key={id as number} id={id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mint;
