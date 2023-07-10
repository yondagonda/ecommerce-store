import { Filters } from './Filters';
import React from 'react';
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

  return (
    <motion.main
      className="text-slate-50 bg-transparent min-h-screen h-full overflow-[none]
    flex justifycenterme"
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
            y: {
              type: 'spring',
              mass: 0.3,
              damping: 8,
              stiffness: 30,
            },
            opacity: { duration: 0.8, delay: 0.23 },
          },
        },
      }}
      initial={hasRenderedGameListRef.current ? 'visible' : 'hidden'}
      animate="visible"
    >
      <Filters />

      <section className="max-w-[2000px] setaminwidth ">
        <section>
          <h2 className="text-xl xs:text-2xl 2xl:text-2xl px-4 pt-4 sm:pt-7 mb-2 font-bold ">
            Featured & Recommended
          </h2>
          <div className="px-4 sm:flex gap-3 2xl:mb-2 hidden">
            <motion.h4
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
            </motion.h4>

            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={{
                duration: 0.015,
              }}
              className="text-sm bg-zinc-800 p-3 rounded-lg  hover:brightness-125
              duration-200 cursor-pointer"
              onClick={() => {
                setCurrentFilter();
                setSearchInput('');
              }}
            >
              <h4 className="select-none font-secondary 2xl:text-lg">
                Clear Filter
              </h4>
            </motion.button>
          </div>
        </section>

        <GameList />
      </section>
    </motion.main>
  );
};
