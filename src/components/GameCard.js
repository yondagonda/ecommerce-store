import React, { useContext } from 'react';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';
import addWL from '../img/symbols/addWL.svg';
import removeWL from '../img/symbols/removeWL.svg';
import { motion } from 'framer-motion';

export const GameCard = ({ game }) => {
  const { wishlist, onWishlistRemove, onWishlistAdd } = useContext(CartContext);

  return (
    <Link to={`/ecommerce-store/games/${game.id}`} draggable="false">
      <motion.div
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.99 }}
        transition={{
          duration: 0.15,
        }}
        className="bg-zinc-800 hover:bg-zinc-700/60 rounded-2xl"
      >
        <img
          loading="lazy"
          src={require(`../img/${game.id}/thumb.webp`)}
          alt={game.title}
          className="rounded-t-2xl"
          draggable="false"
          width="580px"
          height="330px"
        />
        <div className="h-24 md:h-28 p-4">
          <div className="flex justify-between items-center">
            <h4 className="text-sm md:text-base lg:text-lg 2xl:text-xl">
              ${game.price}
            </h4>

            {wishlist.includes(game.id) ? (
              <button onClick={(e) => onWishlistRemove(e, game.id)}>
                <img src={removeWL} alt="heart" className="h-5 lg:h-6" />
              </button>
            ) : (
              <button onClick={(e) => onWishlistAdd(e, game.id)}>
                <img src={addWL} alt="heart" className="h-5 lg:h-6" />
              </button>
            )}
          </div>
          <h3 className="text-base md:text-lg lg:text-xl font-bold text-start 2xl:text-2xl ">
            {game.title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
};
