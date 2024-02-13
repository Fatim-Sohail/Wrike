import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
      <div
        className="relative h-5/6 p-36 bg-my-purple overflow-hidden"
        style={{ backgroundColor: "#7f4cee" }}
      >
        {/* Navbar */}
        <Navbar className="z-15" />

        {/* Hero Content */}
        <div className="container mx-auto flex flex-col items-center justify-center h-3/4 relative z-10">
          <h1 className="text-5xl mt-20 font-bold text-white mb-4">
            Get in Touch With Us
          </h1>
          <p className="text-2xl mt-5 text-white text-center max-w-[600px]">
            Schesti is here to help you at any stage of your project management
            journey.
          </p>
        </div>

        {/* -------- OVALS ------- */}
        <div className="flex w-screen  items-center justify-center absolute inset-0 z-0 overflow-hidden">
          {/* Oval 1  */}
          <div
            className="w-screen h-52 rounded-full transform -rotate-45 z-0 absolute start-96"
            style={{ backgroundColor: "#8158f1" }}
          ></div>

          {/* Oval 2 */}
          <div
            className="w-96 h-48 rounded-full transform -rotate-45 z-0 absolute inset-3/4"
            style={{ backgroundColor: "#8158f1"}}
          ></div>

          {/* Oval 3  */}
          <div
            className="w-96 h-48 rounded-full transform -rotate-45 z-0 absolute inset-x-[-10rem] top-24"
            style={{ backgroundColor: "#8158f1" }}
          ></div>

          {/* Oval 4 */}
          <div
            className="w-96 h-48 rounded-full transform -rotate-45 z-0 absolute inset-x-[-5rem] top-3/4 "
            style={{ backgroundColor: "#8158f1" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
