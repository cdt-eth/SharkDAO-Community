/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <div className="xs:hidden sm:block p-3 bottom-0 fixed font-shark-display s-display-heavy ml-2 text-xl text-shark-black max-w-max">
        <a
          href="https://discord.com/invite/8aThDGXHqH"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cursor-pointer mb-2 w-min shadow-md border-2 rounded-xl px-4 py-2 bg-shark-white   hover:text-shark-white hover:bg-shark-dark-blue hover:border-shark-dark-blue">
            <h3>discord</h3>
          </div>
        </a>
        <a
          href="https://mobile.twitter.com/sharkdao"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cursor-pointer mb-2 w-min shadow-md border-2 rounded-xl px-4 py-2 bg-shark-white  hover:text-shark-white hover:bg-shark-dark-blue hover:border-shark-dark-blue">
            <h3>twitter</h3>
          </div>
        </a>
        <a href="https://nouns.com/" target="_blank" rel="noreferrer">
          <div className="cursor-pointer mb-2 w-min shadow-md border-2 rounded-xl px-4 py-2 bg-shark-white  hover:text-shark-white hover:bg-shark-dark-blue hover:border-shark-dark-blue">
            <h3>nouns</h3>
          </div>
        </a>
        <a
          href="https://snapshot.org/#/sharkdao.eth"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cursor-pointer mb-2 w-min shadow-md border-2 rounded-xl px-4 py-2 bg-shark-white  hover:text-shark-white hover:bg-shark-dark-blue hover:border-shark-dark-blue">
            <h3>snapshot</h3>
          </div>
        </a>
      </div>

      <div className="">
        <a id="media" />
        <a id="m-media" />
        <img src="/shark-footer-blue.svg" alt="shark-footer" />
      </div>
    </div>
  );
};

export default Footer;
