import React from "react";
import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>SharkDAO</title>
      <meta name="SharkDAO" content="SharkDAO.Community" />
      {/* favicon */}
      <link rel="icon" href="/shark-fav-black.ico" />
      {/* custom fonts */}
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
  );
};

export default Header;
