import React from "react";
import Jotform from "react-jotform";
import Nav from "./components/Nav";

const Art = () => {
  return (
    <>
      <Nav />

      <div className="xs:px-4 sm:px-10  font-shark-display ">
        <div className="px-0  mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 sm:flex gap-6">
          <div className="sm:w-1/2 xs:mb-6">
            <div>
              <h2 className="text-3xl font-extrabold tracking-wide text-gray-900 font-shark-display ">
                Enter the Shark Art Contest{" "}
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Feel free to submit your artwork to the Shark Island art
                contest! You can download a template to work off of. The contest
                will run for approximately a month.
              </p>
              <div className="my-6">
                <a
                  href="#"
                  className="inline-flex px-4 py-2 border border-transparent text-base font-semibold rounded-md shadow-sm text-white bg-shark-blue font-sans hover:bg-opacity-80 transition"
                >
                  Download template{" "}
                </a>
              </div>
            </div>

            <Jotform src="https://form.jotform.com/221285650482052" />
          </div>

          <div className="xs:w-full  sm:w-1/2">
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img src="/shark-art-flyer.png" alt="flyer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Art;
