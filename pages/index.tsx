/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";

import Community from "./components/Community";
import DesktopNav from "./components/Desktop/DesktopNav";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import TheBasics from "./components/TheBasics";
import Values from "./components/Values";
import Intro from "./components/Intro";
import Menu from "./components/Mobile/Menu";
import DesktopLogo from "./components/Desktop/DesktopLogo";
import Header from "./components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <div className="bg-shark-blue text-2xl px-5 py-3 text-center text-shark-white font-bold">
        <a
          className="hover:text-shark-black hover:underline"
          href="https://juicebox.money/#/p/sharkdao"
          target="_blank"
          rel="noreferrer"
        >
          Join SharkDAO today!
        </a>
      </div>
      <Header />

      <main>
        <div className="xs:p-6 sm:px-5 sm:py-2 ">
          <DesktopLogo />
          <DesktopNav />

          {/* MOBILE */}
          <Menu />

          <Intro />
        </div>

        <TheBasics />

        <div className="xs:px-6 sm:w-4/6 m-auto py-20">
          <Mission />
          <Values />
          <Community />
          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
