import React from 'react'
import Navbar from './Navbar';
import HeaderConnect from '../Molecules/HeaderConnect';
import HeaderLogin from '../Molecules/HeaderLogin';

const Header = () => {
  return (
    <div className="header">
      <div className="shopee__container">
        <div className="header__wrapper">
         <HeaderConnect/>
          <HeaderLogin/>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default Header