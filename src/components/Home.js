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

  const mainLinksCSS = `h-8 flex justify-center items-center gap-2 bg-white rounded-2xl 
  hover:bg-blue-400 px-10 py-1 w-[220px] 2xl:w-[250px] duration-200 cursor-pointer sm:h-10`;

  const linksHeadingCSS = 'text-zinc-900 2xl:text-xl font-bold';

  const quickNavLinksCSS = `h-8 2xl:h-9 flex justify-center items-center gap-2 bg-white rounded-2xl hover:bg-blue-400 px-10 
  py-1 w-[220px] 2xl:w-[250px] duration-200 cursor-pointer`;

  return (
    <motion.main
      className="text-slate-50 flex flex-col items-center gap-3 mt-10 sm:mt-16 sm:gap-6
    lg:mt-[140px] xl:mt-[190px] 2xl:mt-[210px] 3xl:mt-[260px] lg:flex-row lg:justify-evenly"
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
      <section className="flex flex-col gap-3 items-center sm:gap-5">
        <motion.article
          whileTap={{ scale: 0.98 }}
          transition={{
            duration: 0.12,
          }}
          className="text-center bg-white/20 p-4 rounded-xl backdrop-blur-[4px] w-[94%]
      xs:w-[400px] sm:w-[550px] lg:w-[650px] 2xl:w-[750px] 3xl:w-[900px] 
      xs:p-6 sm:p-8 2xl:p-10 3xl:p-14 cursor-default"
        >
          <h1 className="text-4xl font-bold sm:text-6xl 2xl:text-[110px] 3xl:text-[130px] select-none">
            Game Store
          </h1>
          <p className="text-base sm:text-lg lg:text-xl 3xl:text-2xl select-none">
            The store where your gaming dreams come true! Discover a curated
            collection of the latest releases, timeless classics, and hidden
            gems. Immerse yourself in captivating adventures, intense battles,
            and mind-bending puzzles.
          </p>
        </motion.article>

        <motion.article
          whileTap={{ scale: 0.98 }}
          transition={{
            duration: 0.12,
          }}
          className="bg-white/20 p-4 rounded-xl text-center backdrop-blur-[4px] flex flex-col gap-1 
      items-center w-[94%] sm:flex-row sm:w-[550px] justify-evenly select-none"
        >
          <Link to="/ecommerce-store/browse">
            <motion.div whileHover={{ scale: 1.02 }} className={mainLinksCSS}>
              <img src={rightarrow} className="h-7" alt="right arrow" />
              <h3 className={linksHeadingCSS}>Browse</h3>
            </motion.div>
          </Link>

          <motion.a
            href="https://github.com/yondagonda"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            className={mainLinksCSS}
          >
            <img src={github} className="h-5" alt="github icon" />
            <h3 className={linksHeadingCSS}>Github</h3>
          </motion.a>
        </motion.article>
      </section>

      <motion.article
        whileTap={{ scale: 0.98 }}
        transition={{
          duration: 0.12,
        }}
        className="bg-white/20 p-4 rounded-xl text-center backdrop-blur-[2px] flex flex-col gap-1 
      items-center w-[300px] sm:w-[340px] xl:w-[380px] 2xl:w-[440px] 3xl:w-[500px] 
      xl:py-8 2xl:py-10 mb-4 select-none"
      >
        <h2 className="text-2xl font-bold pb-2 lg:text-3xl cursor-default 3xl:text-4xl select-none">
          Quick Navigation
        </h2>

        <Link to="/ecommerce-store/error">
          <motion.div whileHover={{ scale: 1.02 }} className={quickNavLinksCSS}>
            <img src={erroricon} className="h-6" alt="error icon" />
            <h3 className={linksHeadingCSS}>Error 404</h3>
          </motion.div>
        </Link>

        <motion.a
          href="https://github.com/yondagonda/ecommerce-store/commits/main"
          target="_blank"
          whileHover={{ scale: 1.02 }}
          className={quickNavLinksCSS}
        >
          <img src={commit} className="h-6" alt="commit tree" />
          <h3 className={linksHeadingCSS}>Commit Log</h3>
        </motion.a>

        <motion.a
          href="https://github.com/yondagonda/ecommerce-store#performance"
          target="_blank"
          whileHover={{ scale: 1.02 }}
          className={quickNavLinksCSS}
        >
          <img src={performance} className="h-6" alt="speedometer" />
          <h3 className={linksHeadingCSS}>Performance</h3>
        </motion.a>

        <motion.a
          href="https://github.com/yondagonda/ecommerce-store#technologies"
          target="_blank"
          whileHover={{ scale: 1.02 }}
          className={quickNavLinksCSS}
        >
          <img src={tools} className="h-5" alt="chemical brewing" />
          <h3 className={linksHeadingCSS}>Technologies</h3>
        </motion.a>

        <motion.a
          href="https://github.com/yondagonda/ecommerce-store#readme"
          target="_blank"
          whileHover={{ scale: 1.02 }}
          className={quickNavLinksCSS}
        >
          <img src={paper} className="h-5" alt="scroll of paper" />
          <h3 className={linksHeadingCSS}>Read Me</h3>
        </motion.a>
      </motion.article>
    </motion.main>
  );
};
