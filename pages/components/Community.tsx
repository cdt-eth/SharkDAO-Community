/* eslint-disable @next/next/no-img-element */
import React from "react";

const Community = () => {
  return (
    <div>
      <a id="community" />
      <p className="border-b-4 font-shark-display s-display text-4xl mb-10">
        Community
      </p>

      <div className="pt-8 mb-4 m-auto cursor-pointer">
        <a
          href="https://twitter.com/fishytoothbrush"
          target="_blank"
          rel="noreferrer"
        >
          <img src="community-1.svg" alt="@fishytootbrush" />
          @fishytootbrush
        </a>
      </div>

      <div className="pt-8 mb-20 m-auto flex w-full">
        <div className="cursor-pointer mr-5">
          <a
            href="https://twitter.com/davecurry"
            target="_blank"
            rel="noreferrer"
          >
            <img src="community-2.svg" alt="@davecurry" />
            @davecurry
          </a>
        </div>

        <div className="cursor-pointer">
          <a href="https://twitter.com/numo_0" target="_blank" rel="noreferrer">
            <img src="community-3.svg" alt="@numo" />
            @numo
          </a>
          <a className="sm:hidden" id="m-faq" />
        </div>
      </div>
    </div>
  );
};

export default Community;
