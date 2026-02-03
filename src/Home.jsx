import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import WhatIsTEDx from './WhatIsTEDx';
import Events from './Events';
import Speakers from './Speakers';
import SideBySide from './SideBySide';
import Newsletter from './Newsletter';
import DarkVeil from './DarkVeil';
import RegistrationPopup from './RegistrationPopup';

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
            <RegistrationPopup />
            <section id="home" className="relative min-h-screen overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* <DarkVeil hueShift={232} speed={0.6} /> */}
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
                <h3 className="scroll-text text-4xl md:text-5xl font-black mb-4 uppercase">
                    Voices That <span className="text-red-600">Inspire</span>
                </h3>
                <p className="scroll-text text-gray-400 max-w-2xl mx-auto">
                    Hear from visionary thinkers and doers who are redefining the boundaries of possibility.
                </p>
            </div>
            {/* SPEAKERS SECTION */}
            <div className="flex flex-col items-center gap-0">
                <Speakers
                    name="Mr. Srihari Mulgund"
                    title="Beyond Origins"
                    description="Mr. Srihari Mulgund is a Partner at EY-Parthenon and leads the Automotive Strategy practice, with experience executing 100+ strategic initiatives across global markets including the US, EU, India, Japan, and China. In his talk, he explores how strategy, leadership, and the startup mindset have evolved beyond traditional systems of building, reshaping the way organizations grow and lead today."
                    img="/speaker2.jpeg"
                    reversed={false}
                    buttonText="Register Now"
                    buttonLink="https://forms.gle/5J6t5G32nbhLjENq5"
                />
                <Speakers
                    name="Dr. Atun Roy Choudhury"
                    title="Beyond Origins"
                    description="Dr. Atun Roy Choudhury is an environmentalist with a PhD from BITS Pilani and the Technical Head at Unison i3x. He is the innovator behind the SAAnA Reactor, India’s first indigenous system converting non-segregated organic waste into electricity in just 23 days. In his talk, he explores how sustainability has evolved beyond an environmental concern into a growing professional and career-driven sector, shaping new opportunities for the future. Beyond science, he is also a passionate singer."
                    img="/speaker3.png"
                    reversed={true}
                    buttonText="Register Now"
                    buttonLink="https://forms.gle/5J6t5G32nbhLjENq5"
                />
                <Speakers
                    name="Mr. Vijay Sharma"
                    title="Beyond Origins"
                    description="Mr. Vijay Sharma is a tech entrepreneur, angel investor, and reluctant philosopher. An IIM Bangalore alumnus, he has spent over a decade building one of India’s largest mental health platform, impacting 4.5 million employees across 600+ organizations. In his talk, he explores Zen philosophy and koans, and their relevance in today’s world, highlighting how some problems aren’t meant to be solved, and how some people need listening, not advice."
                    img="/speaker4.jpeg"
                    reversed={false}
                    buttonText="Register Now"
                    buttonLink="https://forms.gle/5J6t5G32nbhLjENq5"
                />
                <Speakers
                    name="Ms. Rita Mendonca"
                    title="Beyond Origins"
                    description="Ms. Rita Mendonca is the founder of My Mind Gains, a psychologist and therapist known for making mental health conversations accessible and engaging. Featured in The Times of India and Hindustan Times, she creates insightful content by breaking down psychological concepts through films and everyday narratives. In her talk, she explores deeply rooted ideas like Mauna (silence), how they were originally practiced, and how they are perceived in the modern world"
                    img="/speaker5.jpeg"
                    reversed={true}
                    buttonText="Register Now"
                    buttonLink="https://forms.gle/5J6t5G32nbhLjENq5"
                />
                <Speakers
                    name="Dr. Siddhartha Maiti"
                    title="Cognitive Chrysalis"
                    description="A pioneering voice in neuro-innovation, exploring how our minds evolve in the digital age. Join us as we delve into the metamorphosis of human intelligence."
                    img="/speaker1.jpeg"
                    reversed={false}
                    buttonText="View Past Events"
                    buttonLink="/past-events"
                />

                <br />
                <br />
                <br />

            </div>
            <div className="text-center mb-16">
                <h2 className="scroll-text text-red-600 text-sm font-semibold tracking-widest uppercase mb-4">
                    Newsletter
                </h2>
                <h3 className="scroll-text text-4xl md:text-5xl font-bold mb-4">
                    TED<span className="text-[1em] lowercase">x</span><span className="text-red-600">VITBhopal</span> Xpress
                </h3>
                <p className="scroll-text text-gray-400 max-w-2xl mx-auto">
                    This newsletter shares updates, news, facts, ideas, learning, unlearning, BTS's , moments, and voices every idea
                </p>
            </div>

            <SideBySide
                img="/1766179522124.jpg"
                altText="TEDx Newsletter"
                heading="TEDxVITBhopal 2025-26 : Comeback? …but what happened?"
                description="Every campus has a dream waiting for the right people to wake it up. If TED has taught us anything, it’s that one idea can rewrite the script. And this year, we decided to stop waiting for ideas…"
                buttonText="Read our Newsletter"
            />

            <SideBySide
                img="/1768898327065.png"
                altText="TEDx Newsletter"
                heading="From Turing to Today: The Making of Artificial Intelligence"
                description="We drink AI like diet coke these days. Everywhere, all the time, barely thinking about it. Talk about it like it fell right out of the future."
                buttonText="Read our Newsletter"
            />

            {/* NEWSLETTER SIGNUP */}
            <Newsletter />
        </>
    );
}
