import React from "react";
import GridItem from "../GridItem";

const Grid = () => {
  return (
    <div className="grid grid-cols-10 z-50 islandGrid ">
      {/* 1 */}
      <GridItem shark={true} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />

      {/* 2 */}
      <GridItem shark={false} />
      <GridItem shark={true} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />

      {/* 3 */}
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={true} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />

      {/* 4 */}
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={true} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />

      {/* 5 */}
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={true} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />

      {/* 6 */}
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={true} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />

      {/* 7 */}
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={true} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />

      {/* 8 */}
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={true} />
      <GridItem shark={false} />
      <GridItem shark={false} />

      {/* 9 */}
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={true} />
      <GridItem shark={false} />

      {/* 10 */}
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={false} />
      <GridItem shark={true} />
    </div>
  );
};

export default Grid;
