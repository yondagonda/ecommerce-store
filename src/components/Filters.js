import { FilterContext } from './Browse';
import React, { useContext } from 'react';
import { CartContext } from '../App';
import punch from '../img/symbols/punch.svg';
import { motion } from 'framer-motion';

export const Filters = () => {
  const { setCurrentFilter } = useContext(CartContext);

  return (
    <div
      className="hidden sm:block pt-10 pr-2 pl-1
      md:px-5 md:pt-14 font-secondary lg:px-8 lg:pt-20 2xl:px-10"
    >
      <div className="flex flex-col gap-2 mb-4 md:gap-4 min-w-[23%] md:max-w-[180px]">
        <div className="text-2xl font-bold">Filters</div>
        <div className="flex flex-col gap-2 md:gap-4 items-start">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2"
            onClick={(e) => {
              setCurrentFilter(e.currentTarget.dataset.id);
            }}
            data-id="Wishlist"
          >
            <div
              className="group-hover:bg-white group-hover:text-black text-2xl 
            bg-zinc-700 px-2 py-1 w-10 rounded-lg duration-200"
            >
              🎁
            </div>
            <div className="2xl:text-lg">Wishlist</div>
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 md:gap-3">
        <div className="text-lg font-bold">Genres</div>
        <div className="flex flex-col gap-2 md:gap-4 items-start">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2"
            onClick={(e) => {
              setCurrentFilter(e.currentTarget.dataset.id);
            }}
            data-id="Action"
          >
            <div
              className="group-hover:bg-white group-hover:text-black text-2xl 
            bg-zinc-700 px-2 py-1 rounded-lg w-10 duration-200"
            >
              👊
            </div>
            <div className="2xl:text-lg">Action</div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2"
            onClick={(e) => {
              setCurrentFilter(e.currentTarget.dataset.id);
            }}
            data-id="RPG"
          >
            <div
              className="group-hover:bg-white group-hover:text-black text-2xl 
            bg-zinc-700 px-2 py-1 rounded-lg w-10 duration-200"
            >
              📖
            </div>
            <div className="2xl:text-lg">RPG</div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2"
            onClick={(e) => {
              setCurrentFilter(e.currentTarget.dataset.id);
            }}
            data-id="Singleplayer"
          >
            <div
              className="group-hover:bg-white group-hover:text-black text-2xl 
            bg-zinc-700 px-2 py-1 rounded-lg w-10 duration-200"
            >
              🧘
            </div>
            <div className="2xl:text-lg">Singleplayer</div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2"
            onClick={(e) => {
              setCurrentFilter(e.currentTarget.dataset.id);
            }}
            data-id="Shooter"
          >
            <div
              className="group-hover:bg-white group-hover:text-black text-2xl 
            bg-zinc-700 px-2 py-1 rounded-lg w-10 duration-200"
            >
              🔫
            </div>
            <div className="2xl:text-lg">Shooter</div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2"
            onClick={(e) => {
              setCurrentFilter(e.currentTarget.dataset.id);
            }}
            data-id="Adventure"
          >
            <div
              className="group-hover:bg-white group-hover:text-black text-2xl 
            bg-zinc-700 px-2 py-1 rounded-lg w-10 duration-200"
            >
              🚣
            </div>
            <div className="2xl:text-lg">Adventure</div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2"
            onClick={(e) => {
              setCurrentFilter(e.currentTarget.dataset.id);
            }}
            data-id="Strategy"
          >
            <div
              className="group-hover:bg-white group-hover:text-black text-2xl 
            bg-zinc-700 px-2 py-1 rounded w-10 duration-200"
            >
              ♖
            </div>
            <div className="2xl:text-lg">Strategy</div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2"
            onClick={(e) => {
              setCurrentFilter(e.currentTarget.dataset.id);
            }}
            data-id="Racing"
          >
            <div
              className="group-hover:bg-white group-hover:text-black text-2xl 
            bg-zinc-700 px-2 py-1 rounded w-10 duration-200 "
            >
              🏎
            </div>
            <div className="2xl:text-lg">Racing</div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2"
            onClick={(e) => {
              setCurrentFilter(e.currentTarget.dataset.id);
            }}
            data-id="Sports"
          >
            <div
              className="group-hover:bg-white group-hover:text-black text-2xl 
            bg-zinc-700 px-2 py-1 rounded w-10 duration-200"
            >
              ⚽
            </div>
            <div className="2xl:text-lg">Sports</div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2"
            onClick={(e) => {
              setCurrentFilter(e.currentTarget.dataset.id);
            }}
            data-id="Simulation"
          >
            <div
              className="group-hover:bg-white group-hover:text-black text-2xl 
            bg-zinc-700 px-2 py-1 rounded-lg w-10 duration-200"
            >
              💻
            </div>
            <div className="2xl:text-lg">Simulation</div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2"
            onClick={(e) => {
              setCurrentFilter(e.currentTarget.dataset.id);
            }}
            data-id="Puzzle"
          >
            <div
              className="group-hover:bg-white group-hover:text-black text-2xl 
            bg-zinc-700 px-2 py-1 rounded-lg w-10 duration-200"
            >
              🧠
            </div>
            <div className="2xl:text-lg">Puzzle</div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
