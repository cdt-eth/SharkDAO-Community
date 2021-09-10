import React from "react";

const Links = () => {
  return (
    <>
      <div className="flex-1 block pt-0 font-shark-display s-display ml-2 text-md text-shark-black max-w-max w-2/6 text-center">
        <a
          href="https://discord.com/invite/8aThDGXHqH"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cursor-pointer mb-3 border-2 rounded-xl px-4 py-2 hover:text-shark-white hover:bg-shark-dark-blue hover:border-shark-dark-blue max-w-max">
            <h3>discord</h3>
          </div>
        </a>
        <a
          href="https://mobile.twitter.com/sharkdao"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cursor-pointer mb-3 border-2 rounded-xl px-4 py-2 hover:text-shark-white hover:bg-shark-dark-blue hover:border-shark-dark-blue max-w-max">
            <h3>twitter</h3>
          </div>
        </a>
        <a href="https://nouns.com/" target="_blank" rel="noreferrer">
          <div className="cursor-pointer mb-3 border-2 rounded-xl px-4 py-2 hover:text-shark-white hover:bg-shark-dark-blue hover:border-shark-dark-blue max-w-max">
            <h3>nouns</h3>
          </div>
        </a>
        <a
          href="https://snapshot.org/#/sharkdao.eth"
          target="_blank"
          rel="noreferrer"
        >
          <div className="cursor-pointer mb-3 border-2 rounded-xl px-4 py-2 hover:text-shark-white hover:bg-shark-dark-blue hover:border-shark-dark-blue max-w-max">
            <h3>snapshot</h3>
          </div>
        </a>
      </div>
    </>
  );
};

export default Links;
