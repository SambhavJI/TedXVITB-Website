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
        img="/1767770582221.jpg"
        altText="TEDx Newsletter"
        heading="From Cozy Blankets to Open Conversations"
        description="While most of our college was soaking in lazy unexpected vacations back home, wrapped in cozy blankets and comfort food, BAMMMMMM …"
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
