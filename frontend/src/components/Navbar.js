import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-transparent p-4 z-50 ${
        hideNavbar ? "hidden" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center mt-8">
        {/* Left Side: Pricing and Home */}
        <div className="flex space-x-4">
          <button className="text-xl text-gray-200 transition-all duration-0 h-8 ml-0 mr-3 px-1 py-2 rounded-none font-normal hover:font-bold hover:border-b-2 hover:pb-10 hover:border-orange-500 inline">
            Home
          </button>
          <button className="text-xl text-gray-200 transition-all duration-0 h-8 ml-2 px-1 py-2 rounded-none font-normal hover:font-bold hover:border-b-2 hover:pb-10 hover:border-orange-500 inline">
            Pricing
          </button>
        </div>
        {/* Right Side: Contact Us and Login */}
        <div className="flex space-x-4 lg:mr-0">
          <button className="border-2 border-white text-purple-800 px-5 py-3 font-bold text-white rounded-full">
            Contact Us
          </button>
          <button className="bg-white text-purple-800 px-5 py-3 font-bold rounded-full">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
