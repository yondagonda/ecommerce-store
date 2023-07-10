import { gameDataLibrary } from './gameDataLibrary';
import React, { useContext, useEffect } from 'react';
import { CartContext } from '../App';
import { GameCard } from './GameCard';
import { motion } from 'framer-motion';

export const GameList = () => {
  const { currentFilter, wishlist, searchResults, hasRenderedGameListRef } =
    useContext(CartContext);

  useEffect(() => {
    hasRenderedGameListRef.current = true;
  }, []);

  return (
    <section
      className="bg-transparent grid grid-cols-1 xs:grid-cols-2 gap-3 
      sm:grid-cols-2 md:p-4 lg:grid-cols-2 text-slate-50 p-3 glist items-end
        xl:grid-cols-3 3xl:grid-cols-4 pb-6 lg:pr-12 2xl:pr-20 "
    >
      {gameDataLibrary.map((game, i) => {
        if (
          game.details.genre.includes(currentFilter) ||
          currentFilter === undefined
        ) {
          return (
            <motion.button
              variants={{
                hidden: {
                  opacity: 0,
                  y: -30,
                },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.14 },
                }),
              }}
              custom={i}
              initial={hasRenderedGameListRef.current ? 'visible' : 'hidden'}
              animate="visible"
              className="border border-[transparent]"
              key={game.id}
            >
              <GameCard game={game} />
            </motion.button>
          );
        }
        if (currentFilter === 'Wishlist') {
          if (wishlist.includes(game.id)) {
            return (
              <motion.button
                className="border border-[transparent]"
                key={game.id}
              >
                <GameCard game={game} />
              </motion.button>
            );
          }
        }
        if (currentFilter === 'Search') {
          if (searchResults.includes(game.id)) {
            return (
              <motion.button
                className="border border-[transparent]"
                key={game.id}
              >
                <GameCard game={game} />
              </motion.button>
            );
          }
        }
      })}
    </section>
  );
};
