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
        <link rel="icon" href="/favicon.ico" />
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
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
