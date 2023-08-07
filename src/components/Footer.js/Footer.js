import React from 'react';

const Footer = () => {
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        &copy; {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
