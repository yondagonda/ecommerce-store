import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Searchbar } from './Search';

import { motion } from 'framer-motion';
import { SearchContext } from '../App';

export const Navbar = () => {
  const { setSearchInput, setCurrentFilter, setIsCartOpen, cart } =
    useContext(SearchContext);

  return (
    <motion.nav
      className="flex justify-evenly p-3 2xl:text-3xl 2xl:p-6 
    text-slate-50 text-2xl font-bold items-center bg-transparent font-secondary"
    >
      <Link to="/ecommerce-store">
        <motion.div whileTap={{ scale: 0.9 }}>
          <svg
            className="fill-white outline-none"
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path d="M31.772 16.043l-15.012-15.724c-0.189-0.197-0.449-0.307-0.721-0.307s-0.533 0.111-0.722 0.307l-15.089 15.724c-0.383 0.398-0.369 1.031 0.029 1.414 0.399 0.382 1.031 0.371 1.414-0.029l1.344-1.401v14.963c0 0.552 0.448 1 1 1h6.986c0.551 0 0.998-0.445 1-0.997l0.031-9.989h7.969v9.986c0 0.552 0.448 1 1 1h6.983c0.552 0 1-0.448 1-1v-14.968l1.343 1.407c0.197 0.204 0.459 0.308 0.722 0.308 0.249 0 0.499-0.092 0.692-0.279 0.398-0.382 0.411-1.015 0.029-1.413zM26.985 14.213v15.776h-4.983v-9.986c0-0.552-0.448-1-1-1h-9.965c-0.551 0-0.998 0.445-1 0.997l-0.031 9.989h-4.989v-15.777c0-0.082-0.013-0.162-0.032-0.239l11.055-11.52 10.982 11.507c-0.021 0.081-0.036 0.165-0.036 0.252z" />{' '}
            </g>
          </svg>
        </motion.div>
      </Link>

      <Link
        to="/ecommerce-store/browse"
        onClick={() => {
          setSearchInput('');
          setCurrentFilter();
        }}
      >
        <motion.div whileTap={{ scale: 0.95 }} className="text-base sm:text-xl">
          {' '}
          Browse Store
        </motion.div>
      </Link>

      <Searchbar />
      <motion.div
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer text-base sm:text-xl"
        onClick={() => setIsCartOpen(true)}
      >
        Cart:{' '}
        {cart.length === 0 ? (
          <span className="font-normal">0</span>
        ) : (
          cart.length
        )}
      </motion.div>
    </motion.nav>
  );
};
