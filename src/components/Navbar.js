import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Searchbar } from './Search';
import home from '../img/symbols/home.svg';
import { motion } from 'framer-motion';
import { SearchContext } from '../App';

export const Navbar = () => {
  const {
    setSearchInput,
    setCurrentFilter,
    setIsCartOpen,
    isBrowseOpen,
    setIsBrowseOpen,
    cart,
  } = useContext(SearchContext);

  const lightNavBar = `flex justify-evenly p-3
  text-slate-50 text-2xl font-bold items-center font-secondary`;

  const darkNavBar = `flex justify-evenly p-3
  text-slate-50 text-2xl font-bold bg-zinc-900 items-center font-secondary`;

  return (
    <motion.div className={isBrowseOpen ? darkNavBar : lightNavBar}>
      <Link to="/ecommerce-store">
        <img
          src={home}
          className="h-6"
          alt="home button"
          onClick={() => setIsBrowseOpen(false)}
        />
      </Link>

      <Link
        to="/ecommerce-store/browse"
        onClick={() => {
          console.log('ayo');
          setSearchInput('');
          setCurrentFilter();
        }}
      >
        Browse Store
      </Link>
      {/* also on click of browse games, should reset any search filters  */}

      <Searchbar isBrowseOpen={isBrowseOpen} />
      <div
        className="cursor-pointer text-xl"
        onClick={() => setIsCartOpen(true)}
      >
        Cart:{' '}
        {cart.length === 0 ? (
          <span className="font-normal">Empty</span>
        ) : (
          cart.length
        )}
      </div>
    </motion.div>
  );
};
