import React from 'react';
import { logo } from '../../assets/index';

const Navbar = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" className="w-12 h-auto" />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
