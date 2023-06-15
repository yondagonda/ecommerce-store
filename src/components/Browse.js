import { Link } from 'react-router-dom';
import { gameDataLibrary } from './gameDataLibrary';
import { Filters } from './Filters';
import React, { useEffect, useState } from 'react';
import { GameList } from './GameList';
import { CartContext } from '../App';
import { useContext } from 'react';

export const Browse = () => {
  const { setCurrentFilter, currentFilter, setSearchInput, setIsBrowseOpen } =
    useContext(CartContext);

  return (
    <div
      className="text-slate-50 bg-zinc-900 min-h-screen h-full overflow-[none]
    flex"
      onLoad={() => setIsBrowseOpen(true)}
    >
      <Filters />

      <div className="">
        <div>
          <div className="text-2xl px-4 pt-7 mb-2 font-bold">
            Featured & Recommended
          </div>
          <div className="px-4 flex gap-3">
            <div className="text-sm font-secondary bg-zinc-800 p-3 rounded-lg">
              {currentFilter === 'Error Page'
                ? 'Filter by:'
                : `Filter by: ${currentFilter ? currentFilter : 'None'}`}
            </div>
            <button
              className="text-sm bg-zinc-800 p-3 rounded-lg font-bold"
              onClick={() => {
                setCurrentFilter();
                setSearchInput('');
              }}
            >
              Clear Filter
            </button>
          </div>
        </div>
        <GameList />
      </div>
    </div>
  );
};
