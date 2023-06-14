import { Link } from 'react-router-dom';
import { gameDataLibrary } from './gameDataLibrary';
import { Filters } from './Filters';
import React, { useEffect, useState } from 'react';
import { GameList } from './GameList';
import { CartContext } from '../App';
import { useContext } from 'react';

export const Browse = () => {
  const { setCurrentFilter, currentFilter } = useContext(CartContext);

  return (
    <div
      className="text-slate-50 bg-zinc-900 h-screen 
    flex"
    >
      <Filters />

      <div className="">
        <div>
          <div className="text-2xl px-4 pt-7 mb-2">Featured & Recommended</div>
          <div className="px-4 flex gap-3">
            <div className="text-sm bg-zinc-800 p-3 rounded-lg">
              Filter by: {currentFilter ? currentFilter : 'None'}
            </div>
            <button
              className="text-sm bg-zinc-800 p-3 rounded-lg"
              onClick={() => setCurrentFilter()}
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
