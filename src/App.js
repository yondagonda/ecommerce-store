import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Browse } from './components/Browse';
import { GamePage } from './components/GamePage';
import { Navbar } from './components/Navbar';
import bgvideo from './media/cyberpunk-bg.mp4';

function App() {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        muted
        playsInline
        id="bg-video"
        className="h-screen object-cover fixed z-[-1] min-h-full min-w-full bg-fixed 
        bg-blend-darken"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>

      <Navbar />

      <Routes>
        <Route path="/ecommerce-store" element={<Home />} />
        <Route path="/ecommerce-store/browse" element={<Browse />} />
        <Route path="/ecommerce-store/games/:id" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
