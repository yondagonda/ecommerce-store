import React, { useContext } from 'react';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';
import addWL from '../img/symbols/addWL.svg';
import removeWL from '../img/symbols/removeWL.svg';
import { motion } from 'framer-motion';

export const GameCard = ({ game }) => {
  const { wishlist, onWishlistRemove, onWishlistAdd } = useContext(CartContext);

  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.15,
      }}
    >
      <Link to={`/ecommerce-store/games/${game.id}`} draggable="false">
        <div className="bg-zinc-800 hover:bg-zinc-700/60 rounded-2xl">
          <img
            src={require(`../img/${game.id}/img1.${game.images.first}`)}
            alt={game.title}
            className="rounded-t-2xl h-[100%]"
            draggable="false"
          />
          <div className="h-24 md:h-28 p-4">
            <div className="flex justify-between">
              <div className="text-sm md:text-base ">${game.price}</div>

              {wishlist.includes(game.id) ? (
                <img
                  onClick={(e) => onWishlistRemove(e, game.id)}
                  src={removeWL}
                  alt="heart"
                  className="h-5 cursor-pointer"
                />
              ) : (
                <img
                  onClick={(e) => onWishlistAdd(e, game.id)}
                  src={addWL}
                  alt="heart"
                  className="h-5 cursor-pointer"
                />
              )}
            </div>
            <div className="text-base md:text-lg lg:text-xl font-bold text-start">
              {game.title}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
