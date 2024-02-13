import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 px-36 pb-10">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/4 mb-6">
          <div className="flex items-center mb-10">
            <p className="text-md font-light mr-14 cursor-pointer">Home</p>
            <p className="text-md font-light mr-14 cursor-pointer">Plans</p>
            <p className="text-md font-light cursor-pointer">Contact Us</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-md text-gray-400 font-normal mb-4 tracking-[.6em]">
              CONTACT
            </h3>
            <p className="underline text-xl underline-offset-1 tracking-wider font-semibold font-sans  cursor-pointer">
              info@shesti.com
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4 ml-auto text-left mr-14"
        style={{ fontFamily: 'Poppins, sans-serif' }}>
          <h3 className="text-lg font-semibold tracking-wider mb-4">Get in touch</h3>
          <p className="font-extralight text-base text-gray-200">Stay informed on how you can make difference</p>
          <div className="mt-4">
            <input
              type="email"
              id="email"
              className="w-80 border rounded py-3 px-4 text-xs"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-600 mt-3 mb-6 items-center" />
      <div className="flex justify-between items-center font-sans">
        <div className="text-gray-200 text-sm font-light">
          <a className="mr-10" href="/terms">
            Terms & Conditions
          </a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="flex justify-center text-sm font-normal" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
          <p className="text-white mr-4">&copy; 2023 Schesti  | All Rights Reserved</p>
        </div>
        <div className="flex space-x-6 text-2xl cursor-pointer">
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
