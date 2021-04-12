import React from 'react';
import Cart from './images/shopping-cart.png';

const Header = () => (
  <div className="container mx-auto pt-4 pb-8 md:py-10 px-4 md:px-0 font-bold flex justify-between items-center">
    <div>Bienvenido!</div>
    <img className="w-8 h-8" src={Cart} alt="" />
  </div>
);

export default Header;
