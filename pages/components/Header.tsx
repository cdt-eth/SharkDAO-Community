import React from "react";
import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>SharkDAO</title>
      <meta name="SharkDAO" content="SharkDAO.Community" />
      {/* favicon */}
      <link rel="icon" href="/shark-fav-black.ico" />
    </Head>
  );
};

export default Header;
