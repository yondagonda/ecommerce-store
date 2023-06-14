import { Link } from 'react-router-dom';
import { gameDataLibrary } from './gameDataLibrary';
import { useContext } from 'react';
import { CartContext } from '../App';
import addWL from '../img/symbols/addWL.svg';
import removeWL from '../img/symbols/removeWL.svg';

export const GameList = () => {
  //   console.log('re rendering gamelist');
  const { currentFilter, wishlist } = useContext(CartContext);

  return (
    <div
      className="bg-zinc-900 grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4
        xs:grid-cols-2 gap-3 sm:grid-cols-2 md:p-4 lg:grid-cols-2 text-slate-50 p-3"
    >
      {gameDataLibrary.map((game) => {
        if (
          game.details.genre.includes(currentFilter) ||
          currentFilter === undefined
        ) {
          return (
            <div className="border border-[transparent]" key={game.id}>
              <GameCardRender game={game} />
            </div>
          );
        }
        if (currentFilter === 'Wishlist') {
          if (wishlist.includes(game.id)) {
            return (
              <div className="border border-[transparent]" key={game.id}>
                <GameCardRender game={game} />
              </div>
            );
          }
        }
      })}
    </div>
  );
};

const GameCardRender = ({ game }) => {
  const {
    setWishlist,
    setAddToWish,
    wishlist,
    onWishlistRemove,
    onWishlistAdd,
  } = useContext(CartContext);

  return (
    <Link to={`/ecommerce-store/games/${game.id}`}>
      <img
        src={require(`../img/${game.id}/img1.${game.images.first}`)}
        alt={game.title}
        className="rounded-t-2xl"
      />
      <div className="bg-zinc-800 rounded-b-2xl h-24 md:h-28 p-4">
        <div className="flex justify-between">
          <div className="text-sm md:text-base ">${game.price}</div>

          {wishlist.includes(game.id) ? (
            <img
              onClick={(e) => onWishlistRemove(e, game.id)}
              src={removeWL}
              alt="heart"
              className="h-5 cursor-pointer"
            />
          ) : (
            <img
              onClick={(e) => onWishlistAdd(e, game.id)}
              src={addWL}
              alt="heart"
              className="h-5 cursor-pointer"
            />
          )}
        </div>
        <div className="text-base md:text-lg lg:text-xl font-bold">
          {game.title}
        </div>
      </div>
    </Link>
  );
};
