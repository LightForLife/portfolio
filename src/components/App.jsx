import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Contacts from './Contacts/Contacts';

export const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        {/* <Features /> */}
        <Projects />
        <Resume />
        <Contacts />
      </div>
    </div>
  );
};
