import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const MobileNav = () => {
  return (
    <div>
      <div className="flex-1 w-2/6  font-shark-display s-display text-xl">
        <ScrollLink
          to="m-intro"
          spy={true}
          smooth={true}
          offset={-50}
          className="mb-3 flex"
        >
          Intro
        </ScrollLink>

        <ScrollLink
          to="m-the-basics"
          spy={true}
          smooth={true}
          className="mb-3 flex"
          offset={-100}
        >
          The Basics
        </ScrollLink>

        <ScrollLink
          to="m-mission"
          spy={true}
          smooth={true}
          offset={-15}
          className="mb-3 flex"
        >
          Mission
        </ScrollLink>

        <ScrollLink
          to="m-values"
          spy={true}
          smooth={true}
          offset={15}
          className="mb-3 flex"
        >
          Values
        </ScrollLink>

        <ScrollLink
          to="m-community"
          spy={true}
          smooth={true}
          className="mb-3 flex"
        >
          Community
        </ScrollLink>

        <ScrollLink to="m-faq" spy={true} smooth={true} className="mb-3 flex">
          FAQ
        </ScrollLink>
      </div>
    </div>
  );
};

export default MobileNav;
