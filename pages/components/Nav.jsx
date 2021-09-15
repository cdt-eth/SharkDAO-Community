/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import NavItem from "./NavItem";

const Nav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <nav className="flex items-center flex-wrap bg-shark-blue p-3 pr-5">
        <ScrollLink to="home" spy={true} smooth={true}>
          <a className="inline-flex items-center m-2 mr-4 ">
            <img
              className="fill-current text-white h-8 w-18 mr-2"
              src="shark-logo-white.svg"
              alt="shark-logo"
            />
          </a>
        </ScrollLink>

        <button
          className=" inline-flex p-3 hover:bg-shark-blue rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="white"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start nav flex flex-col lg:h-auto text-shark-white font-shark-text xs:mt-3 sm:mt-0">
            <NavItem section="home" title="Home" />
            <NavItem section="the-basics" title="The Basics" />
            <NavItem section="mission" title="Mission" />
            <NavItem section="values" title="Values" />
            <NavItem section="community" title="Community" />
            <NavItem section="faq" title="FAQ" />
            <NavItem section="podcast" title="Podcast" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
