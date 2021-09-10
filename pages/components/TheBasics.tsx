/* eslint-disable @next/next/no-img-element */
import React from "react";

const TheBasics = () => {
  return (
    <div>
      <div className="bg-nouns-grey pt-10">
        <a id="the-basics" />
        <img
          className="xs:hidden sm:flex m-auto"
          src="/the-basics.svg"
          alt="the-basics"
        />

        <a className="sm:hidden " id="m-the-basics" />
        <p className="sm:hidden py-5 mx-6 border-b-4 font-shark-display s-display text-4xl mb-10">
          The Basics
        </p>
        <img
          className="sm:hidden m-auto pb-10"
          src="/the-basics-mobile.svg"
          alt="the-basics-mobile"
        />
        <a className="sm:hidden" id="m-mission" />
      </div>
    </div>
  );
};

export default TheBasics;
