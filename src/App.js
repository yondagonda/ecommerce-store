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

export const CartContext = React.createContext();

function App() {
  const [selectedGame, setSelectedGame] = useState();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState();
  const [addToWish, setAddToWish] = useState();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (addToWish) {
      setWishlist(wishlist.concat(addToWish));
    }
  }, [addToWish]);

  useEffect(() => {
    if (wishlist) {
      console.log(wishlist);
    }
  }, [wishlist]);

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

      <Navbar setIsCartOpen={setIsCartOpen} isCartOpen />
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
        }}
      >
        <Routes>
          <Route path="/ecommerce-store" element={<Home />} />
          <Route path="/ecommerce-store/browse" element={<Browse />} />
          <Route path="/ecommerce-store/games/:id" element={<GamePage />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
