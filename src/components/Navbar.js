import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Searchbar } from './Search';
import home from '../img/symbols/home.svg';

export const Navbar = ({
  setIsCartOpen,
  isCartOpen,
  setSearchInput,
  searchInput,
  isBrowseOpen,
  setIsBrowseOpen,
}) => {
  const lightNavBar = `flex justify-evenly p-3
  text-slate-50 text-2xl font-bold items-center font-secondary`;

  const darkNavBar = `flex justify-evenly p-3
  text-slate-50 text-2xl font-bold bg-zinc-900 items-center font-secondary`;

  return (
    <nav className={isBrowseOpen ? darkNavBar : lightNavBar}>
      <Link to="/ecommerce-store">
        <img
          src={home}
          className="h-6"
          alt="home button"
          onClick={() => setIsBrowseOpen(false)}
        />
      </Link>

      <Link to="/ecommerce-store/browse">Browse Store</Link>
      {/* also on click of browse games, should reset any search filters  */}

      <Searchbar isBrowseOpen={isBrowseOpen} />
      <div
        className="cursor-pointer text-xl"
        onClick={() => setIsCartOpen(true)}
      >
        Cart
      </div>
    </nav>
  );
};
