import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import WhatIsTEDx from './WhatIsTEDx';
import Events from './Events';
import Speakers from './Speakers';
import SideBySide from './SideBySide';
import TeamMarquee from './TeamMarquee';
import Newsletter from './Newsletter';
import DarkVeil from './DarkVeil';

export default function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                // Delay slightly to ensure layout is ready
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);
    return (
        <>
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
            <div className="text-center mb-16">
                <h2 className="scroll-text text-red-600 text-sm font-semibold tracking-widest uppercase mb-4">
                    Featured Speakers
                </h2>
                <h3 className="scroll-text text-4xl md:text-5xl font-bold mb-4">
                    Voices That <span className="text-red-600">Inspire</span>
                </h3>
                <p className="scroll-text text-gray-400 max-w-2xl mx-auto">
                    Meet the thought leaders who will share ideas worth spreading.
                </p>
            </div>
            {/* SPEAKERS SECTION */}
            <div className="flex flex-col items-center">
                <Speakers
                    name="Dr. Siddhartha Maiti"
                    title="Cognitive Chrysalis"
                    description="In an inspiring TED Talk, Dr. Siddhartha Maiti, Assistant Professor at VIT Bhopal University, recounts his journey from humble beginnings in India to academic and professional success in the United States, spanning the University of Massachusetts and leading biotechnology firms."
                    image="/speaker1.jpeg"
                    reversed={false}
                    buttonText="View Past Events"
                    buttonLink="/past-events"
                />
                <Speakers
                    name="To be announced"
                    title="Beyond Origins"
                    description="Step into a world of transformation and discovery. Our upcoming speaker will explore the boundaries of heritage and innovation, challenging us to look beyond where we come from and focus on where we are headed."
                    image="/download.jpg"
                    reversed={true}
                    buttonText="Register Now"
                    buttonLink="https://forms.gle/your-form-link"
                />
            </div>
            <div className="text-center mt-12">
                <p className="text-gray-500 text-sm">
                    More speakers will be announced soon. Follow us for updates!
                </p>
            </div>

            {/* NEWSLETTER / BLOG */}
            <SideBySide
                img="/1766179522124.jpg"
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
        </>
    );
}
