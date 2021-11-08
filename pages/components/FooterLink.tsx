import React from "react";

interface FooterLinkProps {
  text: string;
  link: string;
}

const FooterLink = ({ text, link }: FooterLinkProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="cursor-pointer mb-2 w-min shadow-md border-2 rounded-xl px-4 py-2 bg-shark-white hover:text-shark-white hover:bg-shark-dark-blue hover:border-shark-dark-blue">
        <h3>{text}</h3>
      </div>
    </a>
  );
};

export default FooterLink;
