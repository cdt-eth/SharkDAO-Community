/* eslint-disable @next/next/no-img-element */
import React from "react";

const Island = () => {
  return (
    <div>
      <div className="absolute ">
        <img className="island" src="island/island.gif" alt="island" />
      </div>
      <div className="cutoff relative">
        <img className="littleShark" src="/shark-little.svg" alt="baby-shark" />
      </div>
      <div className="cutoff relative two">
        <img className="littleShark" src="/shark-little.svg" alt="baby-shark" />
      </div>
      <div className="cutoff relative three">
        <img className="littleShark" src="/shark-little.svg" alt="baby-shark" />
      </div>
    </div>
  );
};

export default Island;
