/* eslint-disable react/no-unescaped-entities */
import React from "react";

const FAQ = () => {
  return (
    <div>
      <a id="faq" />
      <p className="border-b-4 font-shark-display s-display text-4xl mb-10">
        Frequently Asked Questions
      </p>

      <div className="font-shark-display s-display xs:text-3xl sm:text-4xl xs:tracking-tight">
        <div className="mb-10">
          <h3 className="pb-3">What is this?</h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text">
            This is a DAO, or decentralized autonomous organization – a group of
            people, working together and pooling our resources in order to
            acquire Nouns, in order to take part in that really cool experiment
            and because we love them. And see a lot of potential. A school of
            (probably vegetarian) sharks with nothing but good intentions.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="pb-3">Who are you?</h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text">
            SharkDAO came together over the course of a day on the chat app
            Discord{" "}
            <a
              href="https://discord.com/invite/8aThDGXHqH"
              target="_blank"
              rel="noreferrer"
              className="text-shark-blue hover:underline"
            >
              (join us here!)
            </a>
            , led by members Jango, Kenny, Goldy, defi jesus and Beanie, all of
            whom really wanted to buy a Noun. Yeah – they couldn’t afford it.
            But one day and sleepless night later, SharkDAO could – and did,
            winning the auction for Noun #2!
          </p>
        </div>

        <div className="mb-10">
          <h3 className="pb-3">Okay, congratulations. What are Nouns?</h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text">
            Nouns is a recently launched series of NFTs – one-of-a-kind pieces
            of digital ephemera, whether images or sound, or both, or neither –
            and something of an experiment. Each day, forever, one Noun will be
            created and auctioned off. The proceeds from those auctions are then
            placed into a treasury, controlled by those who own a Nouns. (Or, in
            the case of SharkDAO, hopefully several.) Each Noun acts as a vote –
            a vote that SharkDAO would then control and share, through
            distribution of SHARK tokens, with its membership.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="pb-3">
            So Nouns is a DAO - and SharkDAO is... a DAO. Is this confusing?
          </h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text">
            Yeah, it is. Our friend INVDR made these infographics to help.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="pb-3">
            I'm intrigued, but what are the major risks of joining?
          </h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text">
            The NFT and crypto spaces are volatile - please don't put in tokens
            that you can't afford to lose completely. While all of us at Shark
            DAO are working hard and have nothing but the best intentions, we
            can't promise that everything will go smoothly. Here are some very
            bad things that could happen:
            <ul className="list-disc list-outside ">
              <li className="ml-12">
                Two of our trusted bidders could theoretically run off with the
                wallater, or lose their keys at the same time. We would lose
                everything. Rekt.
              </li>
              <li className="ml-12">
                There could be a bug in the smart contract code that a hacker
                exploits. We would lose all funds.
              </li>
              <li className="ml-12">
                NFTs could crash, never to recover. It’s hard to spend illiquid
                jpegs.
              </li>
              <li className="ml-12">
                The Noun project could crash, never to recover. It’s hard to
                spend illiquid, highly pixelated pineapple or chainsaw.
              </li>
            </ul>
          </p>
        </div>

        <div className="mb-10">
          <h3 className="pb-3">
            Okay, I have some ETH and I want to join. How do I do that?
          </h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text">
            Re-read the risks above first. Then,{" "}
            <a
              href="https://juicebox.money/#/p/sharkdao"
              target="_blank"
              rel="noreferrer"
              className="text-shark-blue hover:underline"
            >
              join in on Juicebox
            </a>
            : In exchange for ETH, you'll receive SHARK tokens, which represent
            your prorata share of the SharkDAO.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="pb-3">
            I regret my decision – how do get my ETH back?{" "}
          </h3>
          <p className="xs:text-xl sm:text-2xl font-shark-text">
            SharkDAO’s tokens, its liquidity, is unlocked for a window each day
            ahead of the Nouns auction for that day. You can exchange your SHARK
            for ETH, minus the 5% fee charged by JuiceBox, at any time during
            the window.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
