/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Intro = () => {
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
          src="/shark-little-left.svg"
          alt="baby-shark"
        />

        <p className="font-shark-display s-display s-display  sm:text-4xl xs:tracking-tight mx-10">
          SharkDAO began as a hastily, decentrally assembled group of people
          interested in working together and pooling our resources in order to
          acquire Nouns, a novel and beautiful experiment in generative,
          code-driven art. And we did get a Noun. Four, actually.
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
          SharkDAO began as a hastily, decentrally assembled group of people
          interested in working together and pooling our resources in order to
          acquire Nouns, a novel and beautiful experiment in generative,
          code-driven art. And we did get a Noun. Four, actually.
        </p>

        <img
          className="pt-8 pb-12 m-auto"
          src="/nouns-2-5.svg"
          alt="nouns-2-5"
        />

        <p className="font-shark-display s-display xs:text-3xl sm:text-4xl xs:tracking-tight">
          It's been a short time since we first aped together in Discord , on
          Aug. 9, 2021. But the amount of creative talent and energy spinning up
          within the Shark community – inspired by the novel tokenomics of DAOs
          (and DAOs-within-DAOS), the quickly evolving world of NFTs and the
          "internet re-do" currently underway – has come to interest us just as
          much as Nouns still do. <br />
          <br /> Let's bite.
        </p>
      </div>
    </div>
  );
};

export default Intro;
