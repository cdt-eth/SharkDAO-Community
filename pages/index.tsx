/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="xs:p-6 sm:p-10">
      <Head>
        <title>SharkDAO</title>
        <meta name="SharkDAO" content="SharkDAO.Community" />
        <link rel="icon" href="/shark-fav-black.ico" />
      </Head>

      <main className={styles.main}>
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
              <h3 className="cursor-pointer hover:text-shark-blue mb-3">FAQ</h3>
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
            interested in working together and pooling our resources in order to
            acquire Nouns, a novel and beautiful experiment in generative,
            code-driven art. And we did get a Noun. Two, actually.
          </p>

          <img
            className="pt-8 pb-12 m-auto"
            src="/nouns-2-5.svg"
            alt="nouns-2-5"
          />

          <p className="font-shark-display xs:text-3xl sm:text-4xl xs:tracking-tight">
            It's been a short time since we first aped together in Discord, on
            Aug. 9, 2021. But the amount of creative talent and energy spinning
            up within the Shark community – inspired by the novel tokenomics of
            DAOs (and DAOs-within-DAOS), the quickly evolving world of NFTs and
            the "internet re-do" currently underway – has come to interest us
            just as much as Nouns still do. <br />
            <br /> Let's bite.
          </p>
        </div>

        <br />
        <br />
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
