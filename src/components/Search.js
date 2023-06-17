import React, { useContext, useEffect } from 'react';
import { gameDataLibrary } from './gameDataLibrary';
import { SearchContext } from '../App';
import { GameList } from './GameList';
import search from '../img/symbols/search.svg';
import { motion } from 'framer-motion';

export const Searchbar = () => {
  const {
    searchInput,
    setSearchInput,
    setCurrentFilter,
    onExecuteSearch,
    isBackgroundVisible,
  } = useContext(SearchContext);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      onExecuteSearch();
    }
  };

  return (
    <div className={!isBackgroundVisible ? 'flex' : `flex z-[-10]`}>
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.97 }}
        className="hidden sm:block"
      >
        <input
          type="text"
          onChange={handleChange}
          value={searchInput}
          className="text-slate-50 text-base px-2 py-1 rounded-lg outline-none bg-zinc-700 w-[270px]
          lg:w-[400px] 2xl:w-[500px] 3xl:w-[550px] hover:brightness-[1.2] duration-200 2xl:text-lg"
          onKeyDown={(e) => handleKeyPress(e)}
          placeholder="Search Games"
        />
        <img
          onClick={onExecuteSearch}
          src={search}
          className="h-6 inline-block cursor-pointer searchicon ml-2"
          alt="search button"
        />
      </motion.div>
    </div>
  );
};
