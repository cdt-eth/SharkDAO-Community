/* eslint-disable @next/next/no-img-element */
import React from "react";
import spotify from "../../public/podcast/spotify.png";
import anchor from "../../public/podcast/anchor.png";
import apple from "../../public/podcast/apple.png";
import overcast from "../../public/podcast/overcast.png";
import google from "../../public/podcast/google.svg";
import breaker from "../../public/podcast/breaker.png";
import rss from "../../public/podcast/rss.png";

const links = [
  {
    platform: "spotify",
    link: "https://open.spotify.com/show/6uwz0uBUsCM21J8RvR28Hp",
    image: spotify,
  },
  {
    platform: "anchor",
    link: "https://anchor.fm/sharkdao",
    image: anchor,
  },
  // {
  //   platform: "apple",
  //   link: "",
  //   image: apple,
  // },
  // {
  //   platform: "overcast",
  //   link: "",
  //   image: overcast,
  // },
  {
    platform: "google",
    link: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82YTE5OTJlNC9wb2RjYXN0L3Jzcw==",
    image: google,
  },
  {
    platform: "breaker",
    link: "https://www.breaker.audio/sharkdao",
    image: breaker,
  },
  {
    platform: "RSS",
    link: "https://anchor.fm/s/6a1992e4/podcast/rss",
    image: rss,
  },
];

const Podcast = () => {
  return (
    <div>
      <a id="podcast" />
      <p className="border-b-4 font-shark-display s-display flex text-4xl mb-10">
        Podcast
      </p>

      <div className="pt-8 mb-4 m-auto cursor-pointer flex justify-around font-shark-display xs:text-xl sm:text-2xl flex-wrap ">
        {links.map((link) => (
          <a
            key={link.platform}
            href={link.link}
            className="hover:text-shark-blue flex-1 mx-2 text-center mb-10 "
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="max-h-10 h-full m-auto mb-3 "
              src={link.image.src}
              alt={link.platform}
            />
            {link.platform.toUpperCase() + " "}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Podcast;
