import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { gameDataLibrary } from './gameDataLibrary';
import { ImageSlider } from './ImageCarousel';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../App';
import addWL from '../img/symbols/addWL.svg';
import removeWL from '../img/symbols/removeWL.svg';
import { Notfound } from './Notfound';
import { motion, AnimatePresence } from 'framer-motion';

export const GamePage = () => {
  const { id } = useParams();

  return (
    <div className="text-slate-50  min-h-[100vh] flex justify-center">
      <RenderGamePageInfo id={id} />
    </div>
  );
};

const RenderGamePageInfo = ({ id, onAddToCart }) => {
  const {
    setWishlist,
    setAddToWish,
    wishlist,
    onWishlistRemove,
    onWishlistAdd,
    setIsBackgroundVisible,
  } = useContext(CartContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  let isGameFound = false;

  return (
    <>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            x: { type: 'spring', mass: 0.3, damping: 8 },
            opacity: { duration: 0.5 },
          },
        }}
        exit={{
          x: '-20vw',
          opacity: 0,
          transition: {
            x: {
              duration: 0.1,
            },
            opacity: {
              duration: 0.1,
            },
          },
        }}
      >
        {gameDataLibrary.map((game, i) => {
          if (game.id === id) {
            isGameFound = true;
            return (
              <div
                key={game.id}
                className=""
                onLoad={() => setIsBackgroundVisible(false)}
              >
                <div
                  key={game.id}
                  className="p-3 sm:p-7 2xl:max-w-[2200px] 2xl:items-center 2xl:gap-4 flex flex-col"
                >
                  <div
                    className="mt-3 flex justify-center 2xl:justify-between items-center max-w-[1152px] 
              gap-6 2xl:mt-10 3xl:mt-20"
                  >
                    <Link to="/ecommerce-store/browse">
                      <div className="px-3 hover:text-blue-300 rounded font-secondary flex items-center duration-200">
                        <div className="text-2xl">↩</div>
                        <div className="pl-2">Store</div>
                      </div>
                    </Link>
                    <div
                      className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold
               "
                    >
                      {game.title}
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center 2xl:flex-row 2xl:gap-8 2xl:items-start
               2xl:mt-4"
                  >
                    <div>
                      <ImageSlider id={id} images={game.images} />
                    </div>

                    <div className="flex flex-col items-center 2xl:mt-16 3xl:mt-28">
                      <div
                        className="rounded-2xl px-4 py-1.5 sm:p-2.5 mb-2 flex justify-center
                  items-center bg-zinc-800 gap-4 sm:gap-5 sm:w-[380px] 2xl:mb-4 "
                      >
                        <div className="font-secondary">${game.price}</div>

                        <RenderAddToCartButton currentGame={game} />

                        {wishlist.includes(game.id) ? (
                          <img
                            onClick={(e) => onWishlistRemove(e, game.id)}
                            src={removeWL}
                            alt="heart"
                            className="h-6 cursor-pointer"
                          />
                        ) : (
                          <img
                            onClick={(e) => onWishlistAdd(e, game.id)}
                            src={addWL}
                            alt="heart"
                            className="h-6 cursor-pointer"
                          />
                        )}
                      </div>

                      <div className="bg-zinc-800 rounded-2xl lg:max-w-[900px]">
                        <div
                          className="grid grid-cols-1 gap-6 md:gap-2 2xl:grid-cols-1 
                    md:grid-cols-[60%_40%] p-3 sm:p-5"
                        >
                          <div>
                            <div className="font-bold text-base md:text-lg xl:text-xl">
                              About
                            </div>
                            <div className="text-sm sm:text-base">
                              {game.details.description}
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-base md:text-lg xl:text-xl">
                              Details
                            </div>
                            <div className="text-sm sm:text-base">
                              <span>Genre: </span>
                              <span className="text-slate-300">
                                {game.details.genre}{' '}
                              </span>
                            </div>
                            <div className="text-sm sm:text-base">
                              <span>Release Date: </span>
                              <span className="text-slate-300">
                                {game.details.releaseDate}
                              </span>
                            </div>
                            <div className="text-sm sm:text-base">
                              <span>Developer: </span>
                              <span className="text-slate-300">
                                {game.details.developer}
                              </span>
                            </div>
                            <div className="text-sm sm:text-base">
                              <span>Publisher: </span>
                              <span className="text-slate-300">
                                {game.details.publisher}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="text-base bg-zinc-700 rounded-b-2xl font-bold">
                          <div
                            className="px-2 py-1 sm:px-4 sm:py-2 cursor-pointer hover:text-blue-300 duration-200"
                            onClick={handleOpen}
                          >
                            {dropdownOpen ? 'Close' : 'See'} Specifications{' '}
                            {dropdownOpen ? '🠗' : '➜'}
                          </div>
                          <AnimatePresence mode="wait">
                            {dropdownOpen && (
                              <motion.div
                                key={game.id}
                                initial={{ height: '0px', opacity: 0 }}
                                animate={{
                                  height: 'auto',
                                  opacity: 1,
                                  transition: {
                                    height: {
                                      duration: 0.4,
                                    },
                                    opacity: {
                                      duration: 0.25,
                                      delay: 0.35,
                                    },
                                  },
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                  transition: {
                                    height: {
                                      duration: 0.4,
                                    },
                                    opacity: {
                                      duration: 0.07,
                                    },
                                  },
                                }}
                                className="text-sm font-thin flex flex-col sm:px-3 lg:text-[15px]
                        md:flex-row md:justify-center md:gap-2 lg:gap-7 px-2 sm:pb-2"
                              >
                                <div className="sm:mb-1 md:mb-2 lg:mb-4">
                                  <div className="font-bold text-red-400">
                                    {' '}
                                    Minimum Requirements:
                                  </div>
                                  <div>
                                    <span className="text-gray-400">OS: </span>
                                    {game.systemReqs[0].OS}
                                  </div>
                                  <div>
                                    <span className="text-gray-400">
                                      Processor:{' '}
                                    </span>
                                    {game.systemReqs[0].processor}
                                  </div>
                                  <div>
                                    <span className="text-gray-400">
                                      Memory:{' '}
                                    </span>
                                    {game.systemReqs[0].memory}
                                  </div>
                                  <div>
                                    <span className="text-gray-400">
                                      Graphics:{' '}
                                    </span>
                                    {game.systemReqs[0].graphics}
                                  </div>
                                  {game.systemReqs[0].directX ? (
                                    <div>
                                      <span className="text-gray-400">
                                        DirectX:{' '}
                                      </span>
                                      {game.systemReqs[0].directX}
                                    </div>
                                  ) : null}
                                  <div>
                                    <span className="text-gray-400">
                                      Storage:{' '}
                                    </span>
                                    {game.systemReqs[0].storage}
                                  </div>
                                </div>
                                <div className="sm:mb-1 md:mb-2 lg:mb-4">
                                  <div className="font-bold text-green-400">
                                    Recommended:
                                  </div>
                                  <div>
                                    <span className="text-gray-400">OS: </span>
                                    {game.systemReqs[1].OS}
                                  </div>
                                  <div>
                                    <span className="text-gray-400">
                                      Processor:{' '}
                                    </span>
                                    {game.systemReqs[1].processor}
                                  </div>
                                  <div>
                                    <span className="text-gray-400">
                                      Memory:{' '}
                                    </span>
                                    {game.systemReqs[1].memory}
                                  </div>
                                  <div>
                                    <span className="text-gray-400">
                                      Graphics:{' '}
                                    </span>
                                    {game.systemReqs[1].graphics}
                                  </div>
                                  {game.systemReqs[1].directX ? (
                                    <div>
                                      <span className="text-gray-400">
                                        DirectX:{' '}
                                      </span>
                                      {game.systemReqs[1].directX}
                                    </div>
                                  ) : null}
                                  <div>
                                    <span className="text-gray-400">
                                      Storage:{' '}
                                    </span>
                                    {game.systemReqs[1].storage}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </motion.div>
      {isGameFound === false && <Notfound />}
    </>
  );
};

const RenderAddToCartButton = ({ currentGame }) => {
  const ourCart = useContext(CartContext);
  const { cart, setSelectedGame, selectedGame, setIsCartOpen } = ourCart;

  const [isGameAdded, setIsGameAdded] = useState(false);

  const addToCartButton = (
    <motion.button
      whileTap={{ scale: 0.9 }}
      transition={{
        duration: 0.1,
      }}
      className="px-2 py-1 rounded text-sm sm:text-base font-secondary 
      hover:bg-zinc-700 duration-200 outline outline-1"
      onClick={() => {
        setSelectedGame(currentGame);
      }}
    >
      Add to Cart
    </motion.button>
  );

  const viewInCartButton = (
    <motion.button
      whileTap={{ scale: 0.9 }}
      transition={{
        duration: 0.1,
      }}
      className="px-2 py-1 rounded text-sm sm:text-base font-secondary 
      text-blue-300 ring-1 hover:text-blue-400 duration-200"
      onClick={() => setIsCartOpen(true)}
    >
      View in Cart
    </motion.button>
  );

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === currentGame.id) return setIsGameAdded(true);
    }
    return setIsGameAdded(false);
  }, [cart]);

  return <>{isGameAdded ? viewInCartButton : addToCartButton}</>;
};
