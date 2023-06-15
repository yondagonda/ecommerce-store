/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Browse } from './components/Browse';
import { GamePage } from './components/GamePage';
import { Navbar } from './components/Navbar';
import { BackgroundVideo } from './components/BackgroundVideo';
import { useState } from 'react';
import { Cart } from './components/Cart';
import { gameDataLibrary } from './components/gameDataLibrary';
import { Notfound } from './components/Notfound';

export const CartContext = React.createContext();
export const SearchContext = React.createContext();

// TODO:
// ADD MORE GAMES INTO THE DB
// clean up/finalise error 404 page

// Then, only after doing all the previous, sort out media queries for everything

function App() {
  const [selectedGame, setSelectedGame] = useState();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState();
  const [addToWish, setAddToWish] = useState();
  const [wishlist, setWishlist] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);

  const matches = [];
  let flag = false;

  const onExecuteSearch = () => {
    if (searchInput.length > 0) {
      gameDataLibrary.map((game) => {
        let match = game.title.match(new RegExp(searchInput, 'i'));

        if (match) {
          flag = true;
          setCurrentFilter('Search');
          console.log(game.id);
          matches.push(game.id);
        }
        setSearchResults(matches);
      });
      if (flag === false) {
        console.log('didint find shit yo');
        setCurrentFilter('Error Page');
      }
    } else {
      setCurrentFilter();
    }
  };

  useEffect(() => {
    if (searchResults.length > 0) {
      console.log(searchResults);
    }
  }, [searchResults]);

  useEffect(() => {
    if (addToWish) {
      setWishlist(wishlist.concat(addToWish));
    }
  }, [addToWish]);

  useEffect(() => {
    if (currentFilter) {
      console.log(`changing filter to: ${currentFilter}`);
    }
  }, [currentFilter]);

  useEffect(() => {
    if (selectedGame) {
      setCart(cart.concat(selectedGame));
    }
  }, [selectedGame]);

  useEffect(() => {
    if (cart.length) {
      determineTotal();
      console.log(cart);
    }
  }, [cart]);

  const determineTotal = () => {
    let sum = 0;
    cart.map((cartItem) => {
      sum += +cartItem.price;
    });
    sum = Math.round(sum * 100) / 100;
    setTotal(sum);
    console.log(sum);
  };

  const onWishlistAdd = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setAddToWish(id);
  };

  const onWishlistRemove = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist(wishlist.filter((item) => item !== id));
    setAddToWish();
  };

  useEffect(() => {
    // ensures cart dimming functionality + enables event listener
    const negativeSidebar = document.querySelector('.negativeSidebar');
    if (negativeSidebar !== null) {
      negativeSidebar.addEventListener('click', () => {
        setIsCartOpen(false);
      });
    }
  }, [isCartOpen]);

  return (
    <div className="App">
      <BackgroundVideo />

      {isCartOpen ? (
        <Cart
          setIsCartOpen={setIsCartOpen}
          cart={cart}
          setCart={setCart}
          setSelectedGame={setSelectedGame}
          total={total}
          isCartOpen={isCartOpen}
        />
      ) : null}
      <SearchContext.Provider
        value={{
          searchInput,
          setSearchInput,
          setCurrentFilter,
          onExecuteSearch,
        }}
      >
        <Navbar
          setIsCartOpen={setIsCartOpen}
          isCartOpen={isCartOpen}
          setCurrentFilter={setCurrentFilter}
          isBrowseOpen={isBrowseOpen}
          setIsBrowseOpen={setIsBrowseOpen}
        />
      </SearchContext.Provider>

      <CartContext.Provider
        value={{
          selectedGame,
          setSelectedGame,
          cart,
          setIsCartOpen,
          currentFilter,
          setCurrentFilter,
          addToWish,
          setAddToWish,
          wishlist,
          setWishlist,
          onWishlistAdd,
          onWishlistRemove,
          searchResults,
          setSearchResults,
          setSearchInput,
          setIsBrowseOpen,
        }}
      >
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/ecommerce-store" element={<Home />} />
          <Route path="/ecommerce-store/browse" element={<Browse />} />
          <Route path="/ecommerce-store/games/:id" element={<GamePage />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
