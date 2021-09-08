/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SharkDAO</title>
        <meta name="SharkDAO" content="SharkDAO.Community" />
        <link rel="icon" href="/shark-fav-black.ico" />
        <link
          rel="preload"
          href="MsGothic-SharkDAOMembersOnly-Regular.woff"
          as="font"
          type="font/woff"
        />
        <link
          rel="preload"
          href="MsGothic-SharkDAOMembersOnly-Heavy.woff"
          as="font"
          type="font/woff"
        />
      </Head>

      <main>
        <div className="xs:p-6 sm:px-5 sm:py-2 ">
          {/* DESKTOP */}
          <ScrollLink to="home" spy={true} smooth={true}>
            <div className="xs:hidden sm:block sm:fixed cursor-pointer max-w-max">
              <Image
                className="relative z-0"
                src="/shark-logo-black.svg"
                alt="shark-logo"
                height={80}
                width={160}
              />
            </div>
          </ScrollLink>

          {/* DESKTOP */}
          <div className="xs:hidden sm:flex ">
            <div className="font-shark-display s-display sm:fixed mt-24 mr-10 text-2xl text-shark-black max-w-max absolute z-10">
              <ScrollLink
                to="intro"
                smooth={true}
                className="cursor-pointer hover:text-shark-blue flex pb-2"
              >
                Intro
              </ScrollLink>

              <ScrollLink
                to="the-basics"
                smooth={true}
                className="cursor-pointer hover:text-shark-blue flex pb-2"
              >
                The Basics
              </ScrollLink>

              <ScrollLink
                to="mission"
                smooth={true}
                className="cursor-pointer hover:text-shark-blue flex pb-2"
              >
                Mission
              </ScrollLink>

              <ScrollLink
                to="values"
                smooth={true}
                className="cursor-pointer hover:text-shark-blue flex pb-2"
              >
                Values
              </ScrollLink>

              <ScrollLink
                to="community"
                smooth={true}
                className="cursor-pointer hover:text-shark-blue flex pb-2"
              >
                Community
              </ScrollLink>

              <ScrollLink
                to="faq"
                smooth={true}
                className="cursor-pointer hover:text-shark-blue flex pb-2"
              >
                FAQ
              </ScrollLink>
              {/* 
              <ScrollLink
                to="media"
                smooth={true}
                className="cursor-pointer hover:text-shark-blue flex pb-2"
              >
                Media
              </ScrollLink> */}
            </div>

            <div className=" xs:hidden sm:flex flex-1 pt-20 sm:px-40  lg:px-80  justify-center relative mb-16">
              <a id="home" />
              <img
                className="w-full"
                src="/shark-hero-bubble.svg"
                alt="welcome-shark"
              />
            </div>
          </div>

          {/* MOBILE */}
          <div className="flex sm:hidden">
            <a id="m-home" />
            <div className="flex-1 self-start mr-8 pt-2">
              <ScrollLink
                to="m-home"
                spy={true}
                smooth={true}
                className="fixed w-2/6"
              >
                <img
                  className="pr-4"
                  src="/shark-logo-black.svg"
                  alt="shark-logo"
                />
              </ScrollLink>
            </div>

            <div className="flex-1 w-2/6  font-shark-display s-display text-xl">
              <ScrollLink
                to="m-intro"
                spy={true}
                smooth={true}
                offset={-50}
                className="mb-3 flex"
              >
                Intro
              </ScrollLink>

              <ScrollLink
                to="m-the-basics"
                spy={true}
                smooth={true}
                className="mb-3 flex"
                offset={-100}
              >
                The Basics
              </ScrollLink>

              <ScrollLink
                to="m-mission"
                spy={true}
                smooth={true}
                offset={-15}
                className="mb-3 flex"
              >
                Mission
              </ScrollLink>

              <ScrollLink
                to="m-values"
                spy={true}
                smooth={true}
                offset={15}
                className="mb-3 flex"
              >
                Values
              </ScrollLink>

              <ScrollLink
                to="m-community"
                spy={true}
                smooth={true}
                className="mb-3 flex"
              >
                Community
              </ScrollLink>

              <ScrollLink
                to="m-faq"
                spy={true}
                smooth={true}
                className="mb-3 flex"
              >
                FAQ
              </ScrollLink>

              {/* <ScrollLink
                to="m-media"
                spy={true}
                smooth={true}
                offset={-100}
                className="mb-3 flex"
              >
                Media
              </ScrollLink> */}
            </div>

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
          </div>

          <div className="sm:hidden mt-20">
            <img
              className="m-0 w-full"
              src="/shark-hero-mobile.svg"
              alt="shark"
            />
          </div>

          <div className="xs:hidden sm:flex m-auto w-5/6">
            <a id="intro" />
            <img
              className="relative right-16"
              src="/shark-little.svg"
              alt="baby-shark"
            />

            <p className="font-shark-display s-display s-display  sm:text-4xl xs:tracking-tight mx-10">
              SharkDAO began as a hastily, decentrally assembled group of people
              interested in working together and pooling our resources in order
              to acquire Nouns, a novel and beautiful experiment in generative,
              code-driven art. And we did get a Noun. Four, actually.
            </p>

            <img
              className="self-start relative left-6"
              src="/shark-little.svg"
              alt="baby-shark"
            />
          </div>

          <a id="m-intro" />
          <div className="xs:w-full sm:w-4/6 m-auto py-14 pt-7">
            <p className="font-shark-display s-display xs:text-3xl sm:text-4xl xs:tracking-tight sm:hidden">
              SharkDAO began as a hastily, decentrally assembled group of people
              interested in working together and pooling our resources in order
              to acquire Nouns, a novel and beautiful experiment in generative,
              code-driven art. And we did get a Noun. Four, actually.
            </p>

            <img
              className="pt-8 pb-12 m-auto"
              src="/nouns-2-5.svg"
              alt="nouns-2-5"
            />

            <p className="font-shark-display s-display xs:text-3xl sm:text-4xl xs:tracking-tight">
              It's been a short time since we first aped together in Discord, on
              Aug. 9, 2021. But the amount of creative talent and energy
              spinning up within the Shark community – inspired by the novel
              tokenomics of DAOs (and DAOs-within-DAOS), the quickly evolving
              world of NFTs and the "internet re-do" currently underway – has
              come to interest us just as much as Nouns still do. <br />
              <br /> Let's bite.
            </p>
          </div>
        </div>

        <div className="bg-nouns-grey pt-10">
          <a id="the-basics" />
          <img
            className="xs:hidden sm:flex m-auto"
            src="/the-basics.svg"
            alt="the-basics"
          />

          <a className="sm:hidden " id="m-the-basics" />
          <p className="sm:hidden py-5 mx-6 border-b-4 font-shark-display s-display text-4xl mb-10">
            The Basics
          </p>
          <img
            className="sm:hidden m-auto pb-10"
            src="/the-basics-mobile.svg"
            alt="the-basics-mobile"
          />
          <a className="sm:hidden" id="m-mission" />
        </div>

        <div className="xs:px-6 sm:w-4/6 m-auto py-20">
          <a id="mission" />

          <p className="border-b-4 font-shark-display s-display text-4xl mb-10">
            Mission
          </p>

          <p className="font-shark-display s-display xs:text-3xl sm:text-4xl xs:tracking-tight mb-24">
            Sharks evolve the Web3 ecosystem by building a community that
            collects Nouns, helps steer and grow the NounsDAO ecosystem, and
            partners with artists, developers, and DAOs to create new blockchain
            experiences.
            <a className="sm:hidden" id="m-values" />
          </p>

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
                Community, expereience and culture.
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

          <a id="community" />
          <p className="border-b-4 font-shark-display s-display text-4xl mb-10">
            Community
          </p>

          <div className="pt-8 mb-4 m-auto cursor-pointer">
            <a
              href="https://twitter.com/fishytootbrush"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/29bd/d1d6/17d65b65e3b247973033cd64777ddaeb?Expires=1631491200&Signature=NFVquLTrCo939-kHo5mR8GxbXP5XhRaT3BOsSf~kkVm6xBSFBGQsJrPXsL3~gDLx7rdqJRYrTA~oKtHeaxseA~HAeMqvCyItOl19vdepTQFD5cYL~H5lXwch34GUdwrNtK9ibiir8ozoTKEKNKZO1NG1Jc91k9LFELfVP1CR1wYJBVMc7X5wzjZho40wGJY89oJrzra9C7ll-z2NEmRMgvRbYmtRLx3t7PI0rSFaFr-mU23WoxeKFNFK4TqqE3MYfnAkzUJcwc3h012r-1KxTCsccbB4i-xnSNMPmzqC0IX2zTey2c9SK7sbOwkH2RdDphFm334Rrt7RYsac7m6eTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="@fishytootbrush"
              />
              @fishytootbrush
            </a>
          </div>

          <div className="pt-8 mb-20 m-auto flex w-full">
            <div className="cursor-pointer mr-5">
              <a
                href="https://twitter.com/davecurry"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/8551/1d9f/90f69bc90785e0defa70f917611615f2?Expires=1631491200&Signature=BBY6rLjzjGr8Tg~WCgdoZUjKcIKVxGU8hge9mRsFxQj7dPT9aE8knqHMMwdql4k~HcPYbb3jjLEw4UxqmS9P65VdHT8mWXHVYpmw5CA~spfwMu9RwHMW624khsg3sEnGQks3crlxSoOrYw8kwzBQibYh5eZ91BL6sWyMyUz9jWNYS8yaS-xBvIP-nKJ5K4LXvcq16MC9Wc2FyS4xcgLmmMrIFOQL-od237skpyDfRKRnILM01WgCkgfvITfV8vdrqwfsAceGanD8UepiJPAjApxt2juBFbsd1lOJrZIxrKM5LiaQACljVK6t8XqOobj4HROUjQzYiLYFl4bMUv9M-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="@davecurry"
                />
                @davecurry
              </a>
            </div>

            <div className="cursor-pointer">
              <a
                href="https://twitter.com/numo_0"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/7561/27d6/5ce05a0c464edb4f045d854b07b21896?Expires=1631491200&Signature=CSwUORauVUQU0NhK0093Ok8-6~CPqrMAuBHn6jsuldifGn0Xlf7pIOAzuI15n7PY14FHHOe~6RzOU3MrI6TuOIaoCF9c5hxn3bVvE2cAnrW~lJ4uiuWtSbh90EuTJhpFlMRGMeyTVoy4aUvENA2neAmj9msrDxskm4I6w0amjNs05YfJjbLgm5hl57XyoWL8kG0FL5-WWutQoy2URv~W4Btpg86c6ikPMMcSL1zlL-mioNOA0wa2nyJ~7r6wCJaCti8k0TvN9UC-30dDU9ekZD1jornZfzv8p~c-4xjdrvt2gWlYJ4GvdkaQPO5JEPCmI3qJCO8n6~MMgJ7~X7cvlA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="@numo"
                />
                @numo
              </a>
              <a className="sm:hidden" id="m-faq" />
            </div>
          </div>

          <a id="faq" />
          <p className="border-b-4 font-shark-display s-display text-4xl mb-10">
            Frequently Asked Questions
          </p>

          <div className="font-shark-display s-display xs:text-3xl sm:text-4xl xs:tracking-tight">
            <div className="mb-10">
              <h3 className="pb-3">What is this?</h3>
              <p className="xs:text-xl sm:text-2xl font-shark-text">
                This is a DAO, or decentralized autonomous organization – a
                group of people, working together and pooling our resources in
                order to acquire Nouns, in order to take part in that really
                cool experiment and because we love them. And see a lot of
                potential. A school of (probably vegetarian) sharks with nothing
                but good intentions.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="pb-3">Who are you?</h3>
              <p className="xs:text-xl sm:text-2xl font-shark-text">
                SharkDAO came together over the course of a day on the chat app
                Discord (join us here!), led by members Jango, Kenny, Goldy,
                defi jesus and Beanie, all of whom really wanted to buy a Noun.
                Yeah – they couldn’t afford it. But one day and sleepless night
                later, SharkDAO could – and did, winning the auction for Noun
                #2!
              </p>
            </div>

            <div className="mb-10">
              <h3 className="pb-3">Okay, congratulations. What are Nouns?</h3>
              <p className="xs:text-xl sm:text-2xl font-shark-text">
                Nouns is a recently launched series of NFTs – one-of-a-kind
                pieces of digital ephemera, whether images or sound, or both, or
                neither – and something of an experiment. Each day, forever, one
                Noun will be created and auctioned off. The proceeds from those
                auctions are then placed into a treasury, controlled by those
                who own a Nouns. (Or, in the case of SharkDAO, hopefully
                several.) Each Noun acts as a vote – a vote that SharkDAO would
                then control and share, through distribution of SHARK tokens,
                with its membership.
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
                The NFT and crypto spaces are volatile - please don't put in
                tokens that you can't afford to lose completely. While all of us
                at Shark DAO are working hard and have nothing but the best
                intentions, we can't promise that everything will go smoothly.
                Here are some very bad things that could happen:
                <ul className="list-disc list-outside ">
                  <li className="ml-12">
                    Two of our trusted bidders could theoretically run off with
                    the wallater, or lose their keys at the same time. We would
                    lose everything. Rekt.
                  </li>
                  <li className="ml-12">
                    There could be a bug in the smart contract code that a
                    hacker exploits. We would lose all funds.
                  </li>
                  <li className="ml-12">
                    NFTs could crash, never to recover. It’s hard to spend
                    illiquid jpegs.
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
                Re-read the risks above first. Then, join in on Juicebox: In
                exchange for ETH, you'll receive SHARK tokens, which represent
                your prorata share of the SharkDAO.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="pb-3">
                I regret my decision – how do get my ETH back?{" "}
              </h3>
              <p className="xs:text-xl sm:text-2xl font-shark-text">
                SharkDAO’s tokens, its liquidity, is unlocked for a window each
                day ahead of the Nouns auction for that day. You can exchange
                your SHARK for ETH, minus the 5% fee charged by JuiceBox, at any
                time during the window.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative ">
        <div className="xs:hidden sm:block p-3 bottom-0 fixed font-shark-display s-display-heavy ml-2 text-xl text-shark-black max-w-max">
          <a
            href="https://discord.com/invite/8aThDGXHqH"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cursor-pointer mb-2 w-min shadow-md border-2 rounded-xl px-4 py-2 bg-shark-white   hover:text-shark-white hover:bg-shark-dark-blue hover:border-shark-dark-blue">
              <h3>discord</h3>
            </div>
          </a>
          <a
            href="https://mobile.twitter.com/sharkdao"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cursor-pointer mb-2 w-min shadow-md border-2 rounded-xl px-4 py-2 bg-shark-white  hover:text-shark-white hover:bg-shark-dark-blue hover:border-shark-dark-blue">
              <h3>twitter</h3>
            </div>
          </a>
          <a href="https://nouns.com/" target="_blank" rel="noreferrer">
            <div className="cursor-pointer mb-2 w-min shadow-md border-2 rounded-xl px-4 py-2 bg-shark-white  hover:text-shark-white hover:bg-shark-dark-blue hover:border-shark-dark-blue">
              <h3>nouns</h3>
            </div>
          </a>
          <a
            href="https://snapshot.org/#/sharkdao.eth"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cursor-pointer mb-2 w-min shadow-md border-2 rounded-xl px-4 py-2 bg-shark-white  hover:text-shark-white hover:bg-shark-dark-blue hover:border-shark-dark-blue">
              <h3>snapshot</h3>
            </div>
          </a>
        </div>

        <div className="">
          <a id="media" />
          <a id="m-media" />
          <img src="/shark-footer-blue.svg" alt="shark-footer" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
