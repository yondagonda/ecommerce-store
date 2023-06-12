import { Link } from 'react-router-dom';
import spidermanmilesmorales from '../img/marvelsspidermanmilesmorales/img1.png';
import fifa23 from '../img/fifa23/img1.jpg';
import cyberpunk from '../img/cyberpunk.jpg';
import godofwar from '../img/godofwar.jpg';
import lastofus from '../img/lastofus.jpg';
import reddead2 from '../img/reddead2.jpg';

export const Browse = () => {
  return (
    <div className="text-slate-50 bg-zinc-900">
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
      <div>
        <div className="border border-[transparent]">
          <Link to="/ecommerce-store/games/marvelsspidermanmilesmorales">
            <img
              src={spidermanmilesmorales}
              alt="Marvels Spiderman: Miles Morales"
              className="rounded-t-2xl"
            />
            <div className="bg-zinc-800 rounded-b-2xl h-32 p-4">
              <div className="flex justify-between">
                <div>$74.95</div>
                <div>Heart</div>
              </div>
              <div className="text-2xl font-bold">
                Marvels' Spider-Man: Miles Morales
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="border border-[transparent]">
          <Link to="/ecommerce-store/games/fifa23">
            <img src={fifa23} alt="Fifa 23" className="rounded-t-2xl" />
            <div className=" bg-zinc-800 rounded-b-2xl h-32 p-4">
              <div className="flex justify-between">
                <div>$99.95</div>
                <div>Heart</div>
              </div>
              <div className="text-2xl font-bold">EA SPORTS™ FIFA 23</div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="border border-[transparent]">
          <Link to="/ecommerce-store/games/cyberpunk2077">
            <img
              src={cyberpunk}
              alt="Cyberpunk 2077"
              className="rounded-t-2xl"
            />
            <div className=" bg-zinc-800 rounded-b-2xl h-32 p-4">
              <div className="flex justify-between">
                <div>$44.97</div>
                <div>Heart</div>
              </div>
              <div className="text-2xl font-bold">Cyberpunk 2077</div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <Link to="/ecommerce-store/games/godofwar">
          <img src={godofwar} alt="God of War" className="rounded-t-2xl" />
          <div className=" bg-zinc-800 rounded-b-2xl h-32 p-4">
            <div className="flex justify-between">
              <div>$44.97</div>
              <div>Heart</div>
            </div>
            <div className="text-2xl font-bold">God of War</div>
          </div>
        </Link>
      </div>
      <div>
        <div className="border border-[transparent]">
          <Link to="/ecommerce-store/games/lastofus">
            <img
              src={lastofus}
              alt="The Last of Us"
              className="rounded-t-2xl"
            />
            <div className=" bg-zinc-800 rounded-b-2xl h-32 p-4">
              <div className="flex justify-between">
                <div>$94.95</div>
                <div>Heart</div>
              </div>
              <div className="text-2xl font-bold">The Last of Us Part I</div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="border border-[transparent]">
          <Link to="/ecommerce-store/games/reddead2">
            <img
              src={reddead2}
              alt="Red Dead Redemption 2"
              className="rounded-t-2xl"
            />
            <div className=" bg-zinc-800 rounded-b-2xl h-32 p-4">
              <div className="flex justify-between">
                <div>$29.68</div>
                <div>Heart</div>
              </div>
              <div className="text-2xl font-bold">Red Dead Redemption 2</div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="border border-[transparent]">
          <Link to="/ecommerce-store/games/minecraft">Minecraft</Link>
        </div>
      </div>
      <div>
        <Link to="/ecommerce-store/games/payday2">Payday 2</Link>
      </div>
    </div>
  );
};
