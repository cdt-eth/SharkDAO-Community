/* eslint-disable @next/next/no-img-element */
import React from "react";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <div className="relative">
      <div className="xs:hidden sm:block p-3 bottom-0 fixed font-shark-display s-display-heavy ml-2 text-xl text-shark-black max-w-max">
        <FooterLink
          text="discord"
          link="https://discord.com/invite/8aThDGXHqH"
        />
        <FooterLink text="twitter" link="https://mobile.twitter.com/sharkdao" />
        <FooterLink text="nouns" link="https://nouns.wtf/" />
        <FooterLink
          text="snapshot"
          link="https://snapshot.org/#/sharkdao.eth"
        />
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
