import React from "react";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const DesktopLogo = () => {
  return (
    <div>
      <ScrollLink to="home" spy={true} smooth={true}>
        <div className="xs:hidden sm:block sm:fixed cursor-pointer max-w-max">
          <Image
            className="relative z-0"
            src="/shark-logo-black.svg"
            alt="shark-logo"
            height={80}
            width={160}
          />
        </div>
      </ScrollLink>
    </div>
  );
};

export default DesktopLogo;
