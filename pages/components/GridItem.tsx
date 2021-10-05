/* eslint-disable @next/next/no-img-element */
import React from "react";
import Shark from "./Island/Shark";

interface SharkProps {
  shark: boolean;
}

const GridItem = ({ shark }: SharkProps) => {
  return shark ? <Shark /> : <div></div>;
};

export default GridItem;
