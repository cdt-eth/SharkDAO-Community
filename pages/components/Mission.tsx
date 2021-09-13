import React from "react";

const Mission = () => {
  const MissionCopy =
    "Sharks evolve the Web3 ecosystem by building a community that collects Nouns, helping steer and grow the NounsDAO ecosystem, and partnering with artists, developers, and DAOs to create new blockchain experiences.";

  return (
    <div>
      <a id="mission" />

      <p className="border-b-4 font-shark-display s-display text-4xl mb-10">
        Mission
      </p>

      <p className="font-shark-display s-display xs:text-3xl sm:text-4xl xs:tracking-tight mb-24">
        {MissionCopy}
        <a className="sm:hidden" id="m-values" />
      </p>
    </div>
  );
};

export default Mission;
