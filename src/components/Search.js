import React, { useContext, useEffect } from 'react';
import { gameDataLibrary } from './gameDataLibrary';
import { SearchContext } from '../App';
import { GameList } from './GameList';
import search from '../img/symbols/search.svg';

export const Searchbar = ({ isBrowseOpen }) => {
  const { searchInput, setSearchInput, setCurrentFilter, onExecuteSearch } =
    useContext(SearchContext);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      onExecuteSearch();
    }
  };

  return (
    <div className={isBrowseOpen ? 'flex' : `flex z-[-10]`}>
      <div className="hidden sm:block">
        <input
          type="text"
          onChange={handleChange}
          value={searchInput}
          className="text-slate-50 text-base px-2 py-0.5 rounded-lg outline-none bg-zinc-700 w-[270px]"
          onKeyDown={(e) => handleKeyPress(e)}
          placeholder="Search Games"
        />
        <img
          onClick={onExecuteSearch}
          src={search}
          className="h-6 inline-block cursor-pointer searchicon ml-2"
          alt="search button"
        />
      </div>
    </div>
  );
};
