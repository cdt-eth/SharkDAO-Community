import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

interface NavItemProps {
  section: string;
  title: string;
}

const NavItem = ({ section, title }: NavItemProps) => {
  return (
    <div className="xs:mb-3 sm:mb-0">
      <ScrollLink
        to={section}
        smooth={true}
        className="cursor-pointer hover:text-shark-black xs:ml-5 sm:ml-8"
      >
        {title}
      </ScrollLink>
    </div>
  );
};

export default NavItem;
