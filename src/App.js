/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { Home } from './components/Home';
import { Browse } from './components/Browse';
import { GamePage } from './components/GamePage';
import { Navbar } from './components/Navbar';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Cart } from './components/Cart';
import { gameDataLibrary } from './components/gameDataLibrary';
import { Notfound } from './components/Notfound';
import { AnimatePresence } from 'framer-motion';

export const CartContext = React.createContext();
export const SearchContext = React.createContext();

// TODO:
// Then, only after doing all the previous, sort out media queries for everything

function App() {
  const location = useLocation();
  const [selectedGame, setSelectedGame] = useState();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState();
  const [addToWish, setAddToWish] = useState();
  const [wishlist, setWishlist] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const hasRenderedGameListRef = useRef(false);

  const matches = [];
  let flag = false;

  const onExecuteSearch = () => {
    if (searchInput.length > 0) {
      navigate('/ecommerce-store/browse', { replace: 'true' });
      gameDataLibrary.map((game) => {
        let match = game.title.match(new RegExp(searchInput, 'i'));

        if (match) {
          flag = true;
          setCurrentFilter('Search');
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

  const [isBackgroundVisible, setIsBackgroundVisible] = useState(true);

  return (
    <div className="App">
      <div
        className={
          !isBackgroundVisible ? 'bg-zinc-900 min-h-screen h-full z-[-1]' : null
        }
      >
        {isBackgroundVisible ? <BackgroundVideo /> : null}

        <Cart
          setIsCartOpen={setIsCartOpen}
          cart={cart}
          setCart={setCart}
          setSelectedGame={setSelectedGame}
          total={total}
          isCartOpen={isCartOpen}
        />

        <SearchContext.Provider
          value={{
            searchInput,
            setSearchInput,
            setCurrentFilter,
            onExecuteSearch,
            setIsCartOpen,
            isCartOpen,
            cart,
            isBackgroundVisible,
          }}
        >
          <Navbar />
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
            hasRenderedGameListRef,
            setIsBackgroundVisible,
          }}
        >
          <AnimatePresence>
            <Routes location={location} key={location.key}>
              <Route path="*" element={<Notfound />} />
              <Route path="/ecommerce-store" element={<Home />} />
              <Route path="/ecommerce-store/browse" element={<Browse />} />
              <Route path="/ecommerce-store/games/:id" element={<GamePage />} />
            </Routes>
          </AnimatePresence>
        </CartContext.Provider>
      </div>
    </div>
  );
}

export default App;
