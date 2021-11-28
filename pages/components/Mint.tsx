/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react";
import CommNFT from "./CommNFT";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React } from "@web3-react/core";
import { ApprovedMintsRes } from "../api/approved";
import Link from "next/link";
import Header from "./Header";

import { Menu } from "@headlessui/react";

const Mint = () => {
  const [eligbleNfts, setEligbleNfts] = useState<Number[]>([]);
  const [checkedEligible, setCheckedEligible] = useState<boolean>(false);
  const [activeAccount, setActiveAccount] = useState<Boolean>(false);

  const { active, account, activate, deactivate } = useWeb3React();

  const connectMM = async () => {
    const injected = new InjectedConnector({
      supportedChainIds: [1, 4],
    });
    try {
      await activate(injected);
      setActiveAccount(true);
    } catch (err) {
      console.log(err);
    }
  };

  const connectWC = async () => {
    const walletconnect = new WalletConnectConnector({
      rpc: {
        1: process.env.REACT_APP_RPC_URL!,
      },
    });
    try {
      await activate(walletconnect);
      setActiveAccount(active);
    } catch (err) {
      console.log(err);
    }
  };

  function handleDisconnect() {
    if (activeAccount) {
      deactivate();
      setActiveAccount(false);
      setCheckedEligible(false);
      setEligbleNfts([]);
    }
  }

  const MMContent = () => {
    return (
      <button
        className={`xs:w-1/3 py-2 px-1 sm:w-28 rounded-xl font-shark-display cursor-pointer hover:opacity-75 tracking-tight transition duration-200 flex flex-row items-center gap-2 justify-center ${
          activeAccount
            ? "bg-shark-dark-blue text-white"
            : "bg-shark-blue text-white"
        }`}
        onClick={connectMM}
      >
        <img className="w-1/5" src="m.png" alt="mm" />
        MetaMask
      </button>
    );
  };

  const WCContent = () => {
    return (
      <button
        className={`xs:w-1/3 py-2 px-1 sm:w-28 rounded-xl font-shark-display cursor-pointer hover:opacity-75 tracking-tight transition duration-200 flex flex-row items-center gap-2 justify-center ${
          activeAccount
            ? "bg-shark-dark-blue text-white"
            : "bg-shark-blue text-white"
        }`}
        onClick={connectWC}
      >
        <img className="w-1/5" src="w.png" alt="mm" />
        WalletConnect
      </button>
    );
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
    if (activeAccount) {
      getMintsRes();
    }
  }, [activeAccount, getMintsRes]);

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
                {activeAccount && shortAddress}
              </div>
            </div>

            <div>
              {activeAccount ? (
                <button onClick={handleDisconnect}>Disconnect</button>
              ) : (
                <Menu as="div">
                  <Menu.Button as="button">Connect</Menu.Button>
                  <Menu.Items>
                    <Menu.Item as="button">{MMContent}</Menu.Item>
                    <Menu.Item as="button">{WCContent}</Menu.Item>
                  </Menu.Items>
                </Menu>
              )}
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="flex border-6 justify-center font-shark-display xs:text-lg sm:text-3xl">
        {activeAccount ? (
          !checkedEligible && <p>Checking NFTs you can mint...</p>
        ) : (
          <div className="">Please connect your wallet.</div>
        )}

        <br />

        {eligbleNfts.length === 0 && activeAccount && (
          <p className="font-shark-display  xs:text-lg sm:text-3xl my-6 sm:w-1/2 text-center tracking-tighter">
            You are not elibile for any mints, but you may be eligible for other
            mints in the future.
          </p>
        )}
        {eligbleNfts.length > 0 && (
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
