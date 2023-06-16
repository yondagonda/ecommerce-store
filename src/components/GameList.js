import { Link } from 'react-router-dom';
import { gameDataLibrary } from './gameDataLibrary';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { CartContext } from '../App';
import { GameCard } from './GameCard';
import { motion, AnimatePresence } from 'framer-motion';

export const GameList = () => {
  const { currentFilter, wishlist, searchResults, hasRenderedGameListRef } =
    useContext(CartContext);

  useEffect(() => {
    hasRenderedGameListRef.current = true;
  }, []);

  return (
    <div
      className="bg-zinc-900 grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4
        xs:grid-cols-2 gap-3 sm:grid-cols-2 md:p-4 lg:grid-cols-2 text-slate-50 p-3 glist items-end"
    >
      <AnimatePresence>
        {gameDataLibrary.map((game, i) => {
          if (
            game.details.genre.includes(currentFilter) ||
            currentFilter === undefined
          ) {
            return (
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -30,
                  },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.08 },
                  }),
                }}
                custom={i}
                initial={hasRenderedGameListRef.current ? 'visible' : 'hidden'}
                animate="visible"
                className="border border-[transparent]"
                key={game.id}
              >
                <GameCard game={game} />
              </motion.div>
            );
          }
          if (currentFilter === 'Wishlist') {
            if (wishlist.includes(game.id)) {
              return (
                <motion.div
                  className="border border-[transparent]"
                  key={game.id}
                >
                  <GameCard game={game} />
                </motion.div>
              );
            }
          }
          if (currentFilter === 'Search') {
            if (searchResults.includes(game.id)) {
              return (
                <motion.div
                  className="border border-[transparent]"
                  key={game.id}
                >
                  <GameCard game={game} />
                </motion.div>
              );
            }
          }
          // if (currentFilter === 'Error Page') {
          //   if (searchResults.includes(game.id)) {
          //     return (
          //       <div className="border border-[transparent]" key={game.id}>
          //         <GameCardRender />
          //         {/* Maybe render an error page here instead? or a 'no results found' page etc.  */}
          //       </div>
          //     );
          //   }
          // }
        })}
      </AnimatePresence>
    </div>
  );
};
