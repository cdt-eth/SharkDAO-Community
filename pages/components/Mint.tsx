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

  return (
    <div>
      {!active && <button onClick={connect}>CONNENCT</button>}
      {active && account}
      {active && <button onClick={disconnect}>DISCONNECT</button>}
      {active ? (
        <button onClick={getMintsRes}> Show Eligible NFTs </button>
      ) : (
        <div></div>
      )}
      {checkedEligible && eligbleNfts.length == 0 ? (
        <h3>
          You are not elibile for any mints, but you may be eligible for other
          mints in the future
        </h3>
      ) : (
        <>
          {eligbleNfts.map((id) => (
            <CommNFT key={id as number} id={id} />
          ))}
        </>
      )}
    </div>
  );
};

export default Mint;
