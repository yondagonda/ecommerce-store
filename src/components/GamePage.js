import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { gameDataLibrary } from './gameDataLibrary';
import { ImageSlider } from './ImageCarousel';
import { useState } from 'react';

export const GamePage = () => {
  const { id } = useParams();

  return (
    <div className="text-slate-50  bg-zinc-900 min-h-[100vh] flex justify-center">
      <RenderGamePageInfo id={id} />
    </div>
  );
};

const RenderGamePageInfo = ({ id }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      {gameDataLibrary.map((game) => {
        if (game.id === id) {
          return (
            <div
              key={game.id}
              className="p-3 sm:p-7 2xl:max-w-[2200px] 2xl:items-center 2xl:gap-4 flex flex-col"
            >
              <div
                className="mt-3 flex justify-center 2xl:justify-between items-center max-w-[1152px] 
              gap-6 2xl:mt-4"
              >
                <Link to="/ecommerce-store/browse">
                  <div className="border px-2 sm:px-3 sm:py-1 rounded">⬅</div>
                </Link>
                <div
                  className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold
               "
                >
                  {game.title}
                </div>
              </div>
              <div
                className="flex flex-col items-center 2xl:flex-row 2xl:gap-8 2xl:items-start
               2xl:mt-4"
              >
                <div>
                  <ImageSlider id={id} images={game.images} />
                </div>

                <div className="flex flex-col items-center 2xl:mt-16">
                  <div
                    className="rounded-2xl px-4 py-1.5 sm:p-2.5 mb-2 flex justify-center
                  items-center bg-zinc-800 gap-4 sm:gap-5 sm:w-[380px]"
                  >
                    <div className="font-bold">${game.price}</div>

                    <button
                      className="border px-2 py-1 rounded text-sm sm:text-base"
                      onClick={() => console.log(game)}
                    >
                      Add to Cart
                    </button>
                    <div className="text-sm sm:text-base">
                      + Add to Wishlist
                    </div>
                  </div>

                  <div className="bg-zinc-800 rounded-2xl max-w-[1152px]">
                    <div
                      className="grid grid-cols-1 gap-6 2xl:grid-cols-1 
                    md:grid-cols-[60%_40%] p-3 sm:p-5"
                    >
                      <div>
                        <div className="font-bold text-base">About</div>
                        <div className="text-sm sm:text-base">
                          {game.details.description}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-base">Details</div>
                        <div className="text-sm sm:text-base">
                          Genres: {game.details.genre}
                        </div>
                        <div className="text-sm sm:text-base">
                          Relase Date: {game.details.releaseDate}
                        </div>
                        <div className="text-sm sm:text-base">
                          Developer: {game.details.developer}
                        </div>
                        <div className="text-sm sm:text-base">
                          Publisher: {game.details.publisher}
                        </div>
                      </div>
                    </div>
                    <div
                      className="text-base bg-zinc-700 rounded-b-2xl font-bold"
                      onClick={handleOpen}
                    >
                      <div className="px-2 py-1 sm:px-4 sm:py-2 cursor-pointer hover:text-slate-400">
                        See Specifications {dropdownOpen ? '🠗' : '➜'}
                      </div>
                      {dropdownOpen ? (
                        <div
                          className="text-sm font-thin flex flex-col sm:px-3 sm:pb-1 md:pb-2
                        md:flex-row md:justify-center md:gap-2 lg:pb-4 lg:gap-7 px-2 py-0.5"
                        >
                          <div>
                            <div className="font-bold text-red-400">
                              {' '}
                              Minimum Requirements:
                            </div>
                            <div>
                              <span className="text-gray-400">OS: </span>
                              {game.systemReqs[0].OS}
                            </div>
                            <div>
                              <span className="text-gray-400">Processor: </span>
                              {game.systemReqs[0].processor}
                            </div>
                            <div>
                              <span className="text-gray-400">Memory: </span>
                              {game.systemReqs[0].memory}
                            </div>
                            <div>
                              <span className="text-gray-400">Graphics: </span>
                              {game.systemReqs[0].graphics}
                            </div>
                            <div>
                              <span className="text-gray-400">DirectX: </span>
                              {game.systemReqs[0].directX}
                            </div>
                            <div>
                              <span className="text-gray-400">Storage: </span>
                              {game.systemReqs[0].storage}
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-green-400">
                              Recommended:
                            </div>
                            <div>
                              <span className="text-gray-400">OS: </span>
                              {game.systemReqs[1].OS}
                            </div>
                            <div>
                              <span className="text-gray-400">Processor: </span>
                              {game.systemReqs[1].processor}
                            </div>
                            <div>
                              <span className="text-gray-400">Memory: </span>
                              {game.systemReqs[1].memory}
                            </div>
                            <div>
                              <span className="text-gray-400">Graphics: </span>
                              {game.systemReqs[1].graphics}
                            </div>
                            <div>
                              <span className="text-gray-400">DirectX: </span>
                              {game.systemReqs[1].directX}
                            </div>
                            <div>
                              <span className="text-gray-400">Storage: </span>
                              {game.systemReqs[1].storage}
                            </div>
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
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
