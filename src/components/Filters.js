import { FilterContext } from './Browse';
import React, { useContext } from 'react';
import { CartContext } from '../App';

export const Filters = () => {
  const { setCurrentFilter } = useContext(CartContext);

  return (
    <div
      className="hidden sm:block pt-14 px-5
      md:px-10 font-secondary "
    >
      <div className="flex flex-col gap-2 mb-4 md:gap-4 min-w-[23%] md:max-w-[180px]">
        <div className="text-2xl font-bold">Filters</div>
        <div className="flex flex-col gap-2 md:gap-4 items-start">
          <button onClick={(e) => setCurrentFilter(e.target.innerText)}>
            Wishlist
          </button>
          {/* <button>Ratings</button>  REMOVING THIS FILTER FOR NOW*/}
        </div>
      </div>

      <div className="flex flex-col gap-1.5 md:gap-3">
        <div className="text-lg font-bold">Genres</div>
        <div className="flex flex-col gap-2 md:gap-4 items-start">
          <button onClick={(e) => setCurrentFilter(e.target.innerText)}>
            Action
          </button>
          <button onClick={(e) => setCurrentFilter(e.target.innerText)}>
            RPG
          </button>
          <button onClick={(e) => setCurrentFilter(e.target.innerText)}>
            Singleplayer
          </button>
          <button onClick={(e) => setCurrentFilter(e.target.innerText)}>
            Shooter
          </button>
          <button onClick={(e) => setCurrentFilter(e.target.innerText)}>
            Adventure
          </button>
          <button onClick={(e) => setCurrentFilter(e.target.innerText)}>
            Strategy
          </button>
          <button onClick={(e) => setCurrentFilter(e.target.innerText)}>
            Racing
          </button>
          <button onClick={(e) => setCurrentFilter(e.target.innerText)}>
            Sports
          </button>
          <button onClick={(e) => setCurrentFilter(e.target.innerText)}>
            Simulation
          </button>
          <button onClick={(e) => setCurrentFilter(e.target.innerText)}>
            Puzzle
          </button>
        </div>
      </div>
    </div>
  );
};
