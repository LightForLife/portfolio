import React from 'react';
import Navbar from './Navbar/Navbar';

export const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
      </div>
    </div>
  );
};
