import React from "react";
import { MdLocationPin, MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import ContactUsForm from "./ContactForm";

const Details = () => {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gray-800 leading-relaxed">
        Ready to see Wrike for yourself?
      </h1>
      <p className="text-gray-600 text-xl mb-8 leading-loose font-normal">
        We'd love to show you how Wrike can help your team do more of their best
        work. Fill out the form, and we'll be in touch within 24 hours.
      </p>

      {/* Contact and Address Details section */}
      <div className="mb-8">
        <div className="flex items-start">
          <MdLocationPin className="text-4xl lg:text-5xl mr-5 text-purple-600" />
          <div>
            <h3 className="text-lg lg:text-xl text-gray-700 font-semibold mb-4">
              OUR OFFICE ADDRESS:
            </h3>
            <p className="text-xl lg:text-2xl text-gray-600">
              5109 Hollyridge Dr, Ste 102 Raleigh, NC 27612
            </p>
          </div>
        </div>

        <div className="flex items-start mt-6 lg:mt-8">
          <MdCall className="text-3xl lg:text-4xl mr-5 text-purple-600" />
          <div>
            <h3 className="text-lg lg:text-xl text-gray-700 font-semibold mb-4">
              CALL US
            </h3>
            <p className="text-xl lg:text-2xl text-gray-600">
              +1 (919) 610-7760
            </p>
          </div>
        </div>

        <div className="flex items-start mt-6 lg:mt-8">
          <IoIosMail className="text-3xl lg:text-4xl mr-5 text-purple-600" />
          <div>
            <h3 className="text-lg lg:text-xl text-gray-700 font-semibold mb-4">
              MAIL US:
            </h3>
            <p className="text-xl lg:text-2xl text-gray-600">
              info@company.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
