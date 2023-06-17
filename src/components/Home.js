import { Link } from 'react-router-dom';
import rightarrow from '../img/symbols/rightarrow.svg';
import github from '../img/symbols/github.svg';
import erroricon from '../img/symbols/erroricon.svg';
import commit from '../img/symbols/commit.svg';
import performance from '../img/symbols/performance.svg';
import paper from '../img/symbols/paper.svg';
import tools from '../img/symbols/tools.svg';
import React, { useContext, useEffect } from 'react';
import { CartContext } from '../App';
import { motion } from 'framer-motion';

export const Home = () => {
  const { hasRenderedGameListRef, setIsBackgroundVisible } =
    useContext(CartContext);

  useEffect(() => {
    hasRenderedGameListRef.current = false;
  }, []);

  return (
    <motion.div
      className="text-slate-50 flex flex-col items-center gap-3 mt-10 sm:mt-16 sm:gap-6
    lg:mt-[280px] 3xl:mt-[340px] lg:flex-row lg:justify-evenly"
      onLoad={() => setIsBackgroundVisible(true)}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        y: 0,
        transition: {
          y: {
            duration: 1,
          },
        },
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
      }}
    >
      <div className="flex flex-col gap-3 items-center sm:gap-5">
        <motion.div
          whileTap={{ scale: 0.98 }}
          transition={{
            duration: 0.12,
          }}
          className="text-center bg-white/20 p-4 rounded-xl backdrop-blur-[2px] w-[290px]
      xs:w-[400px] sm:w-[550px] lg:w-[650px] 2xl:w-[800px] 3xl:w-[900px] 
      xs:p-6 sm:p-8 2xl:p-12 3xl:p-20 cursor-default"
        >
          {/* ADD IN SIZE XL MEDIA QUERIES LATER  */}
          <div className="text-4xl font-bold sm:text-6xl lg:text-8xl 2xl:text-[120px] 3xl:text-[140px]">
            Game Store
          </div>
          <div className="text-base sm:text-lg lg:text-xl 2xl:text-2xl">
            The store where your gaming dreams come true! Discover a curated
            collection of the latest releases, timeless classics, and hidden
            gems. Immerse yourself in captivating adventures, intense battles,
            and mind-bending puzzles.
          </div>
        </motion.div>

        <motion.div
          whileTap={{ scale: 0.98 }}
          transition={{
            duration: 0.12,
          }}
          className="bg-white/20 p-4 rounded-xl text-center backdrop-blur-[2px] flex flex-col gap-1 
      items-center w-[290px] sm:flex-row sm:w-[550px] justify-evenly"
        >
          <Link to="/ecommerce-store/browse">
            <div
              className="h-8 flex justify-center items-center gap-2 bg-white rounded-2xl 
            hover:bg-blue-300 px-10 py-1 cursor-pointer w-[220px] duration-200 sm:h-10"
            >
              <img src={rightarrow} className="h-7" alt="right arrow" />
              <div className="text-zinc-900 font-secondary">Browse</div>
            </div>
          </Link>
          <div
            className="h-8 flex justify-center items-center gap-2 bg-white rounded-2xl hover:bg-blue-300 px-10 
        py-1 w-[220px] duration-200 cursor-pointer sm:h-10"
            onClick={() => {
              window.open('https://github.com/yondagonda');
            }}
          >
            <img src={github} className="h-5" alt="github icon" />
            <div className="text-zinc-900 font-secondary">Github</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        whileTap={{ scale: 0.98 }}
        transition={{
          duration: 0.12,
        }}
        className="bg-white/20 p-4 rounded-xl text-center backdrop-blur-[2px] flex flex-col gap-1 
      items-center w-[290px] sm:w-[340px] xl:w-[400px] 2xl:w-[440px] 3xl:w-[500px] lg:py-10"
      >
        <div className="text-2xl font-bold pb-2 lg:text-3xl 2xl:text-4xl cursor-default 3xl:text-5xl">
          Quick Navigation
        </div>

        <Link to="/ecommerce-store/error">
          <div
            className="h-8 flex justify-center items-center gap-2 bg-white rounded-2xl 
            hover:bg-blue-300 px-10 py-1 cursor-pointer w-[220px] duration-200"
          >
            <img src={erroricon} className="h-6" alt="right arrow" />
            <div className="text-zinc-900 font-secondary">Error 404</div>
          </div>
        </Link>

        <div
          className="h-8 flex justify-center items-center gap-2 bg-white rounded-2xl hover:bg-blue-300 px-10 
        py-1 w-[220px] duration-200 cursor-pointer"
        >
          <img src={commit} className="h-6" alt="github icon" />
          <div className="text-zinc-900 font-secondary">Commit Log</div>
        </div>

        <div
          className="h-8 flex justify-center items-center gap-2 bg-white rounded-2xl hover:bg-blue-300 px-10 
        py-1 w-[220px] duration-200 cursor-pointer"
        >
          <img src={performance} className="h-6" alt="github icon" />
          <div className="text-zinc-900 font-secondary">Performance</div>
        </div>

        <div
          className="h-8 flex justify-center items-center gap-2 bg-white rounded-2xl hover:bg-blue-300 px-10 
        py-1 w-[220px] duration-200 cursor-pointer"
        >
          <img src={tools} className="h-5" alt="github icon" />
          <div className="text-zinc-900 font-secondary">Technologies</div>
        </div>

        <div
          className="h-8 flex justify-center items-center gap-2 bg-white rounded-2xl hover:bg-blue-300 px-10 
        py-1 w-[220px] duration-200 cursor-pointer"
        >
          <img src={paper} className="h-5" alt="github icon" />
          <div className="text-zinc-900 font-secondary">Read Me</div>
        </div>
      </motion.div>
    </motion.div>
  );
};
