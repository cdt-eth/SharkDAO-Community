import React from "react";
import Links from "./Links";
import Logo from "./Logo";
import Nav from "./Nav";

const MobileMenu = () => {
  return (
    <div className="flex sm:hidden">
      <Logo />
      <Nav />
      <Links />
    </div>
  );
};

export default MobileMenu;
