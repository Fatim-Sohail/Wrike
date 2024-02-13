import React from 'react';
import { MdLocationPin, MdCall } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';
import ContactUsForm from './ContactForm';

const Details = () => {
  return (
    <div className="flex">
      {/* Left half */}
      <div className="w-1/2 ml-14 mt-12 p-24 pr-4 text-left"
      style={{ fontFamily: 'Poppins, sans-serif' }}>
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800 leading-relaxed">
          Ready to see Wrike for yourself?
        </h1>
        <p className="text-gray-600 text-xl mb-8 leading-loose font-normal">
          We'd love to show you how Wrike can help your team do more of their best work. Fill out the form, and we'll be in touch within 24 hours.
        </p>

        {/* Contact and Address Details section */}
        <div>
      <div className="mb-8 flex items-start">
        <MdLocationPin className="text-4xl mr-5 text-purple-600" />
        <div>
          <h3 className="text-lg text-gray-700 font-semibold mb-4">OUR OFFICE ADDRESS:</h3>
          <p className="text-xl text-gray-600">5109 Hollyridge Dr, Ste 102 Raleigh, NC 27612</p>
        </div>
      </div>

      <div className="mb-8 flex items-start">
        <MdCall className="text-3xl mr-5 text-purple-600" />
        <div>
          <h3 className="text-lg text-gray-700 font-semibold mb-4">CALL US</h3>
          <p className="text-xl text-gray-600">+1 (919) 610-7760</p>
        </div>
      </div>

      <div className="flex items-start">
        <IoIosMail className="text-3xl mr-5 text-purple-600" />
        <div>
          <h3 className="text-lg text-gray-700 font-semibold mb-4">MAIL US:</h3>
          <p className="text-xl text-gray-600">info@company.com</p>
        </div>
      </div>
    </div>
      </div>

      {/* Right half (form component can be added here) */}
      <div className="w-1/2 p-8 pl-32 mt-28 p-18 pr-16 text-left">
        {/* Your form component */}
        <ContactUsForm/>
      </div>
    </div>
  );
};

export default Details;
