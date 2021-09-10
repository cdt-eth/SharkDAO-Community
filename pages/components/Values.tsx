import React from "react";

const Values = () => {
  return (
    <div>
      <a id="values" />
      <p className="border-b-4 font-shark-display s-display text-4xl mb-10">
        Values
      </p>

      <div className="flex pb-24 flex-wrap">
        <div className="flex-1 xs:mr-8 sm:mr-3 xs:mb-10 sm:mb-0">
          <h3 className="font-shark-display s-display text-3xl xs:text-2xl pb-5 tracking-tight">
            Building
          </h3>
          <p className="font-shark-text text-xl">
            Community, experience and culture.
          </p>
        </div>

        <div className="flex-1 mr-3 xs:mb-10 sm:mb-0">
          <h3 className="font-shark-display s-display text-3xl xs:text-2xl pb-5 tracking-tight">
            Innovative
          </h3>
          <p className="font-shark-text text-xl">
            Speed, collaboration to drive growth.
          </p>
        </div>

        <div className="flex-1 xs:mr-8 sm:mr-3">
          <h3 className="font-shark-display s-display text-3xl xs:text-2xl pb-5 tracking-tight">
            Transparent
          </h3>
          <p className="font-shark-text text-xl">Open & inclusive.</p>
        </div>

        <div className="flex-1 mr-3">
          <h3 className="font-shark-display s-display text-3xl xs:text-2xl pb-5 tracking-tight">
            Ecosystems
          </h3>
          <p className="font-shark-text text-xl">
            Creating value around the Nouns, NFT, and Web3 space.
          </p>
          <a className="sm:hidden" id="m-community" />
        </div>
      </div>
    </div>
  );
};

export default Values;
