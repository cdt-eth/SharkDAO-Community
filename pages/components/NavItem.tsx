import Link from "next/link";
import React from "react";

interface NavItemProps {
  section: string;
  title: string;
}

const NavItem = ({ section, title }: NavItemProps) => {
  return (
    <div className="xs:mb-3 sm:mb-0 cursor-pointer hover:text-shark-black xs:ml-5 transition sm:ml-8">
      <Link href={section} passHref>
        {title}
      </Link>
    </div>
  );
};

export default NavItem;
