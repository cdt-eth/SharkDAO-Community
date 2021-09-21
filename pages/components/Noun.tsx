/* eslint-disable @next/next/no-img-element */
import React from "react";

interface NounProps {
  number: number;
}

const Noun = ({ number }: NounProps) => {
  return (
    <a
      className="xs:w-1/2 sm:w-1/5 hover:cursor-pointer hover:scale-110 transition duration-200"
      href={`https://rainbow.me/sharkdao.eth?family=nouns&nft=0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03_${number}`}
      target="_blank"
      rel="noreferrer"
    >
      <img src={`/noun-${number}.png`} alt={`noun-${number}`} />
    </a>
  );
};

export default Noun;
