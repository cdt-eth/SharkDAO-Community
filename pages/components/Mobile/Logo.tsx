/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const MobileLogo = () => {
  return (
    <>
      <a id="m-home" />
      <div className="flex-1 self-start mr-6 pt-2">
        <ScrollLink to="m-home" spy={true} smooth={true} className=" w-2/6">
          <img className="" src="/shark-logo-black.svg" alt="shark-logo" />
        </ScrollLink>
      </div>
    </>
  );
};

export default MobileLogo;
