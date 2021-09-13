/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Intro = () => {
  const IntroCopy =
    "SharkDAO started as a group of Internet strangers interested in pooling together resources to acquire Nouns, a novel experiment in generative, code-driven art. Since we started on August 9, 2021, we’ve acquired 4 nouns, brought together over 400 Sharks, and raised almost 1000 ETH. We are here to evolve the Web3 ecosystem. Let's BITE.";

  return (
    <div>
      {/* MOBILE */}
      <div className="sm:hidden mt-20">
        <img className="m-0 w-full" src="/shark-hero-mobile.svg" alt="shark" />
      </div>

      {/* DESKTOP */}
      <div className="xs:hidden sm:flex m-auto w-5/6">
        <a id="intro" />
        <img
          className="relative right-16"
          src="/shark-little.svg"
          alt="baby-shark"
        />

        <p className="font-shark-display s-display s-display  sm:text-4xl xs:tracking-tight mx-10">
          {IntroCopy}
        </p>

        <img
          className="self-start flip-horizontal relative left-6"
          src="/shark-little.svg"
          alt="baby-shark"
        />
      </div>

      <a id="m-intro" />
      <div className="xs:w-full sm:w-4/6 m-auto py-14 pt-7">
        <p className="font-shark-display s-display xs:text-3xl sm:text-4xl xs:tracking-tight sm:hidden">
          {IntroCopy}
        </p>

        <img
          className="pt-8 sm:pb-12 m-auto"
          src="/NounsToExportAsSingle.svg"
          alt="nouns-2-5"
        />
      </div>
    </div>
  );
};

export default Intro;
