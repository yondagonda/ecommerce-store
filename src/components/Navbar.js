import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Searchbar } from './Search';
import home from '../img/symbols/home.svg';
import { motion } from 'framer-motion';
import { SearchContext } from '../App';

export const Navbar = () => {
  const { setSearchInput, setCurrentFilter, setIsCartOpen, cart } =
    useContext(SearchContext);

  return (
    <motion.div
      className="flex justify-evenly p-3 2xl:text-3xl 2xl:p-6 3xl:pt-8
    text-slate-50 text-2xl font-bold items-center bg-transparent font-secondary"
    >
      <Link to="/ecommerce-store">
        <img src={home} className="h-5" alt="home button" />
      </Link>

      <Link
        to="/ecommerce-store/browse"
        onClick={() => {
          console.log('ayo');
          setSearchInput('');
          setCurrentFilter();
        }}
      >
        <div className="text-base sm:text-xl"> Browse Store</div>
      </Link>
      {/* also on click of browse games, should reset any search filters  */}

      <Searchbar />
      <div
        className="cursor-pointer text-base sm:text-xl"
        onClick={() => setIsCartOpen(true)}
      >
        Cart:{' '}
        {cart.length === 0 ? (
          <span className="font-normal">0</span>
        ) : (
          cart.length
        )}
      </div>
    </motion.div>
  );
};
