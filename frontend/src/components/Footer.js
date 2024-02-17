import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-8 px-6 md:px-12 lg:px-36 pb-10">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
          <div className="flex flex-col md:flex-row items-center mb-6 md:mb-10">
            <p className="text-sm md:text-md font-light mb-4 md:mb-0 cursor-pointer">Home</p>
            <p className="text-sm md:text-md font-light mb-4 md:mb-0 cursor-pointer">Plans</p>
            <p className="text-sm md:text-md font-light cursor-pointer">Contact Us</p>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-sm md:text-md text-gray-400 font-normal mb-4 tracking-[.6em]">
              CONTACT
            </h3>
            <p className="underline text-base md:text-xl underline-offset-1 tracking-wider font-semibold font-sans cursor-pointer">
              info@shesti.com
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mt-6 md:mt-0 text-left md:ml-auto"
        style={{ fontFamily: 'Poppins, sans-serif' }}>
          <h3 className="text-sm md:text-lg font-semibold tracking-wider mb-4">Get in touch</h3>
          <p className="font-extralight text-sm md:text-base text-gray-200 mb-4 md:mb-0">
            Stay informed on how you can make a difference
          </p>
          <div className="mt-2 md:mt-4">
            <input
              type="email"
              id="email"
              className="w-full md:w-80 border rounded py-3 px-4 text-xs md:text-base"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-600 mt-3 mb-6 items-center" />
      <div className="flex flex-col md:flex-row justify-between items-center font-sans">
        <div className="text-gray-200 text-sm font-light mb-4 md:mb-0">
          <a className="mr-4 md:mr-10" href="/terms">
            Terms & Conditions
          </a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="text-sm font-normal text-center md:text-left mb-4 md:mb-0">
          <p className="text-white">&copy; 2023 Schesti | All Rights Reserved</p>
        </div>
        <div className="flex space-x-4 md:space-x-6 text-xl cursor-pointer">
          <FaLinkedin />
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
