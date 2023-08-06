import React from 'react';
import { contactImg } from 'assets';
import { FaLinkedinIn, FaGithub, FaTelegramPlane } from 'react-icons/fa';

const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Artur Levchenko</h3>
        <p className="text-lg font-normal text-gray-400">Front-end Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:<span className="text-lightText">+38 068 34 34 810</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:
          <span className="text-lightText">arturlvchnk@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
          <span className="bannerIcon">
            <FaTelegramPlane />
          </span>
          <span className="bannerIcon">
            <FaGithub />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
