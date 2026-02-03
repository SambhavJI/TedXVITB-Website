import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import PastEvents from './PastEvents';
import Team from './Team';
import Footer from './Footer';
import Cursor from './Cursor';
import DotGridBackground from './DotGridBackground';
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/scroll-animations.css';

export default function App() {
  useScrollAnimation();

  return (
    <Router>
      <Cursor />
      <DotGridBackground />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/team" element={<Team />} />
      </Routes>

      <Footer />
    </Router>
  );
}
