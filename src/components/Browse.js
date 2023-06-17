import { Link } from 'react-router-dom';
import { gameDataLibrary } from './gameDataLibrary';
import { Filters } from './Filters';
import React, { useEffect, useState, useRef } from 'react';
import { GameList } from './GameList';
import { CartContext } from '../App';
import { useContext } from 'react';
import { motion } from 'framer-motion';

export const Browse = () => {
  const {
    setCurrentFilter,
    currentFilter,
    setSearchInput,
    setIsBackgroundVisible,
    hasRenderedGameListRef,
  } = useContext(CartContext);

  let ytransition = { type: 'spring', mass: 0.4, damping: 8 };

  if (hasRenderedGameListRef.current) {
    ytransition = { type: 'spring', mass: 0.4, damping: 8 };
  }

  return (
    <motion.div
      className="text-slate-50 bg-transparent min-h-screen h-full overflow-[none]
    flex "
      onLoad={() => setIsBackgroundVisible(false)}
      variants={{
        hidden: {
          y: -100,
          opacity: 0,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            y: { type: 'spring', mass: 0.3, damping: 8, stiffness: 30 },
            opacity: { duration: 0.8 },
          },
        },
      }}
      initial={hasRenderedGameListRef.current ? 'visible' : 'hidden'}
      animate="visible"
    >
      <Filters />

      <div className="">
        <div>
          <div className="text-xl xs:text-2xl 2xl:text-3xl px-4 pt-4 sm:pt-7 mb-2 font-bold ">
            Featured & Recommended
          </div>
          <div className="px-4 sm:flex gap-3 2xl:mb-2 hidden">
            <motion.div
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.1,
              }}
              className="text-sm font-secondary 2xl:text-lg bg-zinc-800 p-3 rounded-lg cursor-default
              select-none"
            >
              {currentFilter === 'Error Page'
                ? 'Filter by:'
                : `Filter by: ${currentFilter ? currentFilter : 'None'}`}
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              transition={{
                duration: 0.015,
              }}
              className="text-sm bg-zinc-800 p-3 rounded-lg  hover:brightness-125
              duration-200 cursor-pointer 2xl:text-lg"
              onClick={() => {
                setCurrentFilter();
                setSearchInput('');
              }}
            >
              <div className="select-none font-secondary">Clear Filter</div>
            </motion.div>
          </div>
        </div>
        <GameList />
      </div>
    </motion.div>
  );
};
