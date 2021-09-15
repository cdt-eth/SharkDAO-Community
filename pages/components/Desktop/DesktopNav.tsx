/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const DesktopNav = () => {
  return (
    <div className="xs:hidden sm:flex ">
      <div className="font-shark-display s-display sm:fixed mt-24 mr-10 text-2xl text-shark-black max-w-max absolute z-10">
        <ScrollLink
          to="intro"
          smooth={true}
          className="cursor-pointer hover:text-shark-dark-blue flex pb-2"
        >
          Intro
        </ScrollLink>

        <ScrollLink
          to="the-basics"
          smooth={true}
          className="cursor-pointer hover:text-shark-dark-blue flex pb-2"
        >
          The Basics
        </ScrollLink>

        <ScrollLink
          to="mission"
          smooth={true}
          className="cursor-pointer hover:text-shark-dark-blue flex pb-2"
        >
          Mission
        </ScrollLink>

        <ScrollLink
          to="values"
          smooth={true}
          className="cursor-pointer hover:text-shark-dark-blue flex pb-2"
        >
          Values
        </ScrollLink>

        <ScrollLink
          to="community"
          smooth={true}
          className="cursor-pointer hover:text-shark-dark-blue flex pb-2"
        >
          Community
        </ScrollLink>

        <ScrollLink
          to="faq"
          smooth={true}
          className="cursor-pointer hover:text-shark-dark-blue flex pb-2"
        >
          FAQ
        </ScrollLink>
      </div>
      <div className=" xs:hidden sm:flex flex-1 pt-20 sm:px-40  lg:px-80  justify-center relative mb-16">
        <a id="home" />
        <img
          className="w-full"
          src="/shark-hero-bubble.svg"
          alt="welcome-shark"
        />
      </div>
    </div>
  );
};

export default DesktopNav;
