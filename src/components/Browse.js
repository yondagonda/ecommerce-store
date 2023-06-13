import { Link } from 'react-router-dom';
import { gameDataLibrary } from './gameDataLibrary';

export const Browse = () => {
  return (
    <div className="text-slate-50 bg-zinc-900 h-screen">
      <div className="text-3xl">Games</div>
      <GameList />
    </div>
  );
};

const GameList = () => {
  return (
    <div
      className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3
      sm:grid-cols-2 text-slate-50 gap-6 p-3"
    >
      {gameDataLibrary.map((game) => {
        return (
          <div className="border border-[transparent]" key={game.id}>
            <Link to={`/ecommerce-store/games/${game.id}`}>
              <img
                src={require(`../img/${game.id}/img1.${game.images.first}`)}
                alt={game.title}
                className="rounded-t-2xl"
              />
              <div className="bg-zinc-800 rounded-b-2xl h-32 p-4">
                <div className="flex justify-between">
                  <div>${game.price}</div>
                  <div>+ Wishlist</div>
                </div>
                <div className="text-2xl font-bold">{game.title}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
