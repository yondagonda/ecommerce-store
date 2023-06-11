import { Routes, Route, Link } from 'react-router-dom';
import { Game } from './GamePage';

export const Browse = () => {
  return (
    <div>
      BROWSING GAMES
      <GameList />
    </div>
  );
};

const GameList = () => {
  return (
    <div className="grid grid-cols-4">
      <div>
        <Link to="/ecommerce-store/games/cod3">Cod 3</Link>
      </div>
      <div>
        <Link to="/ecommerce-store/games/bioshock">Bioshock</Link>
      </div>
      <div>
        <Link to="/ecommerce-store/games/terraria">Terraria</Link>
      </div>
      <div>
        <Link to="/ecommerce-store/games/minecraft">Minecraft</Link>
      </div>
      <div>
        <Link to="/ecommerce-store/games/fifa23">Fifa 23</Link>
      </div>
      <div>
        <Link to="/ecommerce-store/games/payday2">Payday 2</Link>
      </div>
    </div>
  );
};
