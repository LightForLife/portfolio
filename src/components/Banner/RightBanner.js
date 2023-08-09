import React from 'react';
import { banner } from '../../assets/index';

const RightBanner = () => {
  return (
    <div className="hidden w-full xl:w-1/2 lgl:flex justify-center items-center relative">
      <img className="w-[400px] h-auto z-10" src={banner} alt="bannerImage" />
      <div className="absolute bottom-0 w-[410px] h-[540px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
