import Navbar from './Navbar';
import Hero from './Hero';
import DarkVeil from './DarkVeil';
import Cursor from './Cursor';
import DotGridBackground from './DotGridBackground';
import WhatIsTEDx from './WhatIsTEDx';
import Events from './Events';
import Speakers from './Speakers';
import SideBySide from './SideBySide';
import TeamMarquee from './TeamMarquee';
import Newsletter from './Newsletter';
import Footer from './Footer';
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/scroll-animations.css';

export default function App() {
  useScrollAnimation();

  return (
    <>
      <Cursor />
      <DotGridBackground />
      <Navbar />

      {/* HERO WITH DARKVEIL */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <DarkVeil hueShift={232} speed={0.6} />
        </div>
        <div className="relative z-10">
          <Hero />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <WhatIsTEDx />
      </section>

      {/* EVENTS SECTION */}
      <Events />

      {/* SPEAKERS SECTION */}
      <Speakers />

      {/* NEWSLETTER / BLOG */}
      <SideBySide
        img="/public/1766179522124.jpg"
        altText="TEDx Newsletter"
        heading="TEDxVITBhopal 2025-26 : Comeback? …but what happened?"
        description="Every campus has a dream waiting for the right people to wake it up.If TED has taught us anything, it’s that one idea can rewrite the script. And this year, we decided to stop waiting for ideas…"
        buttonText="Read our Newsletter"
      />

      <SideBySide
        img="/1768898327065.png"
        altText="TEDx Newsletter"
        heading="From Turing to Today: The Making of Artificial Intelligence"
        description="We drink AI like diet coke these days. Everywhere, all the time, barely thinking about it. Talk about it like it fell right out of the future."
        buttonText="Read our Newsletter"
      />

      {/* TEAM SECTION */}
      <section id="team">
        <TeamMarquee />
      </section>

      {/* NEWSLETTER SIGNUP */}
      <Newsletter />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
