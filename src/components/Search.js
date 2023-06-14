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
    // setCurrentFilter(); this is better?
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      onExecuteSearch();
    }
  };

  return (
    <div className={isBrowseOpen ? '' : `z-[-10]`}>
      <input
        type="text"
        onChange={handleChange}
        value={searchInput}
        className="text-slate-50 text-lg px-2 py-0.5 rounded-lg outline-none bg-zinc-700 "
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
  );
};
