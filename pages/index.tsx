/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SharkDAO</title>
        <meta name="SharkDAO" content="SharkDAO.Community" />
        <link rel="icon" href="/shark-fav-black.ico" />
      </Head>

      <main className={styles.main}>
        <div className="xs:p-6 sm:p-10">
          <Image
            src="/shark-logo-black.svg"
            alt="shark-logo"
            height={80}
            width={160}
          />

          <div className="border flex border-shark-blue ">
            <div className="font-shark-display mr-10 text-3xl text-shark-black max-w-max border border-shark-magenta">
              <Link href="#intro" passHref>
                <h3 className="cursor-pointer hover:text-shark-blue mb-3">
                  Intro
                </h3>
              </Link>
              <Link href="#the-basics" passHref>
                <h3 className="cursor-pointer hover:text-shark-blue mb-3">
                  The Basics
                </h3>
              </Link>
              <Link href="#mission" passHref>
                <h3 className="cursor-pointer hover:text-shark-blue mb-3">
                  Mission
                </h3>
              </Link>
              <Link href="#values" passHref>
                <h3 className="cursor-pointer hover:text-shark-blue mb-3">
                  Values
                </h3>
              </Link>
              <Link href="#community" passHref>
                <h3 className="cursor-pointer hover:text-shark-blue mb-3">
                  Community
                </h3>
              </Link>
              <Link href="#faq" passHref>
                <h3 className="cursor-pointer hover:text-shark-blue mb-3">
                  FAQ
                </h3>
              </Link>
              <Link href="#media" passHref>
                <h3 className="cursor-pointer hover:text-shark-blue mb-3">
                  Media
                </h3>
              </Link>
            </div>

            {/* <div className="border flex flex-1 pt-20 px-48 justify-center">
            <Image
              className="border-shark-blue w-auto	\"
              src="/shark-hero-bubble.svg"
              alt="welcome-shark"
              width={1000}
              height={800}
            />
          </div> */}
          </div>

          <div className="xs:w-full sm:w-4/6 m-auto py-14">
            <p className="font-shark-display xs:text-3xl sm:text-4xl xs:tracking-tight">
              SharkDAO began as a hastily, decentrally assembled group of people
              interested in working together and pooling our resources in order
              to acquire Nouns, a novel and beautiful experiment in generative,
              code-driven art. And we did get a Noun. Two, actually.
            </p>

            <img
              className="pt-8 pb-12 m-auto"
              src="/nouns-2-5.svg"
              alt="nouns-2-5"
            />

            <p className="font-shark-display xs:text-3xl sm:text-4xl xs:tracking-tight">
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
        <br />
        <br />

        <div className="bg-nouns-grey">
          <img
            className="xs:hidden sm:flex m-auto"
            src="/the-basics.svg"
            alt="the-basics"
          />

          <p className="sm:hidden py-5 mx-6 border-b-4 font-shark-display text-4xl mb-10">
            The Basics
          </p>
          <img
            className="sm:hidden m-auto pb-10"
            src="/the-basics-mobile.svg"
            alt="the-basics"
          />
        </div>

        <div className="xs:px-10 sm:w-4/6 m-auto py-14">
          <p className="border-b-4 font-shark-display text-4xl mb-10">
            Mission
          </p>

          <p className="font-shark-display xs:text-3xl sm:text-4xl xs:tracking-tight mb-24">
            Sharks evolve the Web3 ecosystem by building a community that
            collects Nouns, helps steer and grow the NounsDAO ecosystem, and
            partners with artists, developers, and DAOs to create new blockchain
            experiences.
          </p>

          <p className="border-b-4 font-shark-display text-4xl mb-10">Values</p>

          <div className="flex pb-24 flex-wrap">
            <div className="flex-1 xs:mr-8 sm:mr-3 xs:mb-10 sm:mb-0">
              <h3 className="font-shark-display text-3xl pb-5 tracking-tight">
                Building
              </h3>
              <p className="font-shark-text text-xl">
                Community, expereience and culture.
              </p>
            </div>

            <div className="flex-1 mr-3 xs:mb-10 sm:mb-0">
              <h3 className="font-shark-display text-3xl pb-5 tracking-tight">
                Innovative
              </h3>
              <p className="font-shark-text text-xl">
                Speed, collaboration to drive growth.
              </p>
            </div>

            <div className="flex-1 xs:mr-8 sm:mr-3">
              <h3 className="font-shark-display text-3xl pb-5 tracking-tight">
                Transparent
              </h3>
              <p className="font-shark-text text-xl">Open & inclusive.</p>
            </div>

            <div className="flex-1 mr-3">
              <h3 className="font-shark-display text-3xl pb-5 tracking-tight">
                Ecosystems
              </h3>
              <p className="font-shark-text text-xl">
                Creating value around the Nouns, NFT, and Web3 space.
              </p>
            </div>
          </div>

          <p className="border-b-4 font-shark-display text-4xl mb-10">
            Community
          </p>

          <div className="pt-8 mb-12 m-auto cursor-pointer">
            <a
              href="https://twitter.com/fishytootbrush"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/29bd/d1d6/17d65b65e3b247973033cd64777ddaeb?Expires=1631491200&Signature=NFVquLTrCo939-kHo5mR8GxbXP5XhRaT3BOsSf~kkVm6xBSFBGQsJrPXsL3~gDLx7rdqJRYrTA~oKtHeaxseA~HAeMqvCyItOl19vdepTQFD5cYL~H5lXwch34GUdwrNtK9ibiir8ozoTKEKNKZO1NG1Jc91k9LFELfVP1CR1wYJBVMc7X5wzjZho40wGJY89oJrzra9C7ll-z2NEmRMgvRbYmtRLx3t7PI0rSFaFr-mU23WoxeKFNFK4TqqE3MYfnAkzUJcwc3h012r-1KxTCsccbB4i-xnSNMPmzqC0IX2zTey2c9SK7sbOwkH2RdDphFm334Rrt7RYsac7m6eTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="sharks"
              />
              @fishytootbrush
            </a>
          </div>

          <p className="border-b-4 font-shark-display text-4xl mb-10">
            Frequently Asked Questions
          </p>

          <div className="font-shark-display xs:text-3xl sm:text-4xl xs:tracking-tight">
            <div className="mb-10">
              <h3 className="pb-3">What is this?</h3>
              <p className="text-xl">
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
              <p className="text-xl">
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
              <p className="text-xl">
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
              <p className="text-xl">
                Yeah, it is. Our friend INVDR made these infographics to help.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="pb-3">
                I'm intrigued, but what are the major risks of joining?
              </h3>
              <p className="text-xl">
                The NFT and crypto spaces are volatile - please don't put in
                tokens that you can't afford to lose completely. While all of us
                at Shark DAO are working hard and have nothing but the best
                intentions, we can't promise that everything will go smoothly.
                 Here are some very bad things that could happen:
                <ul className="list-disc">
                  <li>
                    Two of our trusted bidders could theoretically run off with
                    the wallater, or lose their keys at the same time. We would
                    lose everything. Rekt.
                  </li>
                  <li>
                    There could be a bug in the smart contract code that a
                    hacker exploits. We would lose all funds.
                  </li>
                  <li>
                    NFTs could crash, never to recover. It’s hard to spend
                    illiquid jpegs.
                  </li>
                  <li>
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
              <p className="text-xl">
                Re-read the risks above first. Then, join in on Juicebox: In
                exchange for ETH, you’ll receive SHARK tokens, which represent
                your prorata share of the SharkDAO.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="pb-3">
                I regret my decision – how do get my ETH back?{" "}
              </h3>
              <p className="text-xl">
                SharkDAO’s tokens, its liquidity, is unlocked for a window each
                day ahead of the Nouns auction for that day. You can exchange
                your SHARK for ETH, minus the 5% fee charged by JuiceBox, at any
                time during the window.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-10 w-full h-full border-t flex justify-center items-center">
        <div className="flex items-center">
          <p className="font-shark-display uppercase mr-2">Powered by</p>
          <span>
            <Image
              src="/shark-black.svg"
              alt="Vercel Logo"
              width={50}
              height={50}
            />
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
