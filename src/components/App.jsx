import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Contacts from './Contacts/Contacts';
import Footer from './Footer.js/Footer';

export const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4 font-bodyFont">
      <Navbar />
      <div className="max-w-screen-xl mx-auto md:px-4">
        <Banner />
        <Projects />
        <Resume />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
};
