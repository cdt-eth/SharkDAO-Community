/* eslint-disable @next/next/no-img-element */
import React from "react";
import dynamic from "next/dynamic";
import Grid from "./components/Island/Grid";

const BgImage = dynamic(() => import("./components/Island/IslandBG"), {
  ssr: false,
});

const Island = () => {
  return (
    <div>
      <Grid />

      <BgImage passedClass={"z-0"} imagePath={`/island/island.gif`} />
    </div>
  );
};

export default Island;
