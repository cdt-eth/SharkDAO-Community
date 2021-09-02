import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SharkDAO</title>
        <meta name="SharkDAO" content="SharkDAO.Community" />
        {/*
         Black Favicon */}
        <link rel="icon" href="/shark-fav-black.ico" />

        {/*
         Blue Favicon */}
        {/* <link rel="icon" href="/shark-fav-blue.ico" />  */}
      </Head>

      <main className={styles.main}>
        <div className="font-shark-display text-3xl">
          <h1 className="text-shark-black">SharkDAO</h1>
          <h1 className="text-shark-light-blue">SharkDAO</h1>
          <h1 className="text-shark-dark-blue">SharkDAO</h1>
          <h1 className="text-shark-magenta">SharkDAO</h1>
          <h1 className="text-shark-pink">SharkDAO</h1>
          <h1 className="text-shark-orange">SharkDAO</h1>
          <h1 className="text-shark-beach">SharkDAO</h1>
        </div>

        <br />
        <br />

        <div className="font-shark-text text-2xl">
          <h1 className="text-shark-black">SharkDAO</h1>
          <h1 className="text-shark-light-blue">SharkDAO</h1>
          <h1 className="text-shark-dark-blue">SharkDAO</h1>
          <h1 className="text-shark-magenta">SharkDAO</h1>
          <h1 className="text-shark-pink">SharkDAO</h1>
          <h1 className="text-shark-orange">SharkDAO</h1>
          <h1 className="text-shark-beach">SharkDAO</h1>
        </div>
      </main>

      <footer className={styles.footer}>
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
