import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Searchbar } from './Search';

export const Navbar = ({
  setIsCartOpen,
  isCartOpen,
  setSearchInput,
  searchInput,
}) => {
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);

  const lightNavBar = `flex justify-around border-b-[1px] border-white p-3
  text-slate-50 text-2xl font-bold`;

  const darkNavBar = `flex justify-around border-b-[1px] border-white p-3
  text-slate-50 text-2xl font-bold bg-zinc-900 `;

  return (
    <nav className={isBrowseOpen ? darkNavBar : lightNavBar}>
      <div onClick={() => setIsBrowseOpen(false)}>
        <Link to="/ecommerce-store">Home</Link>
      </div>
      <div onClick={() => setIsBrowseOpen(true)}>
        <Link to="/ecommerce-store/browse">Browse Games</Link>
        {/* also on click of browse games, should reset any search filters  */}
      </div>
      <Searchbar isBrowseOpen={isBrowseOpen} />
      <div className="cursor-pointer" onClick={() => setIsCartOpen(true)}>
        Cart
      </div>
    </nav>
  );
};
