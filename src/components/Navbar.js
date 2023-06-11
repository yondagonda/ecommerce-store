import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav
      className="mb-6 flex gap-6 border border-solid border-white p-4
     text-slate-50 text-2xl"
    >
      <Link to="/ecommerce-store">Home</Link>
      <Link to="/ecommerce-store/browse">Browse Games</Link>
      <div>Cart</div>
    </nav>
  );
};
