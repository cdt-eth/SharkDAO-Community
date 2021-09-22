/* eslint-disable @next/next/no-img-element */
import React from "react";

interface NounProps {
  number: number;
}

const twitter: any = {
  2: "https://twitter.com/pina_noun",
  5: "https://twitter.com/bruce_noun",
  15: "https://twitter.com/morpheus_noun",
  33: "https://twitter.com/froger_noun",
  47: "https://twitter.com/sharkdao",
};

const Noun = ({ number }: NounProps) => {
  const handle = twitter[number];

  return (
    <a
      className="xs:w-1/2 sm:w-1/5 hover:cursor-pointer hover:scale-110 transition duration-200"
      href={handle}
      target="_blank"
      rel="noreferrer"
    >
      <img src={`/noun-${number}.png`} alt={`noun-${number}`} />
    </a>
  );
};

export default Noun;
