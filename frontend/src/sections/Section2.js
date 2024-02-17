import React from "react";
import Details from "../components/Details";
import ContactUsForm from "../components/ContactForm";

const Section2 = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div
        className="w-full lg:w-1/2 lg:ml-14 mt-12 p-8 lg:p-24 pr-4 text-left"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <Details />
      </div>
      <div className="w-full lg:w-1/2 p-8 lg:p-16 mt-6 lg:mt-28">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default Section2;
