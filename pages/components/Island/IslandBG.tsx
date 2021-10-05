import React from "react";
import Image from "next/image";

interface passedClassProps {
  passedClass: string;
  imagePath: string;
}

const IslandBG = ({ passedClass, imagePath }: passedClassProps) => {
  return (
    <Image
      className={passedClass}
      src={imagePath}
      layout="fill"
      objectFit="cover"
      alt="island"
    />
  );
};

export default IslandBG;
