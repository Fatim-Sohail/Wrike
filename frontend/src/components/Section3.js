import React from "react";

const Section3 = () => {
  return (
    <div
      className="relative h-1/2 p-8 pt-0 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, #906ddd 0%, #7f56d9 100%)`,
      }}
    >
      {/* 906dde */}
      <div>
        <div className="container mx-auto flex flex-col items-center justify-center h-3/4 relative z-10">
          <h1 className="text-5xl mt-16 font-bold text-white mb-4 ">
            Your Gateway to Unmatched Efficiency
          </h1>
          <p className="text-xl mt-5 text-white font-normal text-center max-w-[850px]">
            Empower Your Projects with Schesti: Your Comprehensive Solution for
            Achieving Exceptional Efficiency in Field Service Excellence
          </p>
        </div>
        <div className="items-center mt-12">
          <button
            className="bg-white text-lg tracking-wide px-5 py-3 mr-2 font-medium rounded-full"
            style={{ color: "#7f4cee" }}
          >
            Get Start With Schesi
          </button>
          <button className="border-2 text-lg tracking-wide border-white px-5 py-3 ml-2 font-medium text-white rounded-full">
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex w-screen  items-center justify-center absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-[35rem] h-[30rem] rounded-full z-0 absolute inset-y-32 -right-20"
          style={{ backgroundColor: "#7f56d9", borderRadius: "50%" }}
        ></div>
      </div>
    </div>
  );
};

export default Section3;