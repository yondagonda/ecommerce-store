import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const GamePage = () => {
  const { id } = useParams();

  return (
    <div className="text-slate-50  bg-zinc-900">
      <RenderGamePageInfo id={id} />
    </div>
  );
};

const RenderGamePageInfo = ({ id }) => {
  return (
    <>
      {gameDataLibrary.map((game) => {
        if (game.id === id) {
          // console.log(game);
          return (
            <div key={game.id} className="p-7">
              <div className="flex justify-around items-center">
                <Link to="/ecommerce-store/browse">
                  <div className="border px-4 py-1 rounded">Back</div>
                </Link>
                <div className="text-4xl font-bold">{game.title}</div>
              </div>
              <div className="">
                <div>Image Carousel Here</div>

                <div className="bg-zinc-800 rounded-2xl p-5 mb-2">
                  <div>Price: {game.price} Add to cart Add to wishlist</div>
                </div>

                <div className="bg-zinc-800 rounded-2xl p-5 grid grid-cols-2 gap-6">
                  <div>
                    <div className="font-bold text-md">About</div>
                    <div>{game.description}</div>
                  </div>
                  <div>
                    <div className="font-bold text-md">Details</div>
                    <div>Genres: {game.details.genre}</div>
                    <div>Relase Date: {game.details.releaseDate}</div>
                    <div>Developer: {game.details.developer}</div>
                    <div>Publisher: {game.details.publisher}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

const gameDataLibrary = [
  {
    id: 'marvelsspidermanmilesmorales',
    title: `Marvels' Spider-Man: Miles Morales`,
    price: '74.95',
    description: `Following the events of Marvel's Spider-Man Remastered, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvel's New York, Miles must take up the mantle of Spider-Man and own it.`,
    details: {
      genre: 'Action, Adventure',
      releaseDate: '19 Nov 2022',
      developer: 'Insonmiac Games, Nixxes Software',
      publisher: 'PlayStation PC LLC',
    },
    systemReqs: {},
  },
  {
    id: 'fifa23',
    title: 'EA SPORTS FIFA 23',
    price: '99.95',
  },
];
