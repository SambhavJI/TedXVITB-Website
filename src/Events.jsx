import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Events() {
    const eventDate = new Date('2026-04-02T00:00:00');

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = eventDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
    ];

    return (
        <section id="events" className="scroll-section text-white py-24 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="scroll-text text-red-600 text-sm font-semibold tracking-widest uppercase mb-4">
                        Upcoming Event
                    </h2>
                    <h3 className="scroll-text text-4xl md:text-5xl font-bold mb-4">
                        TED<span className="text-[1em] lowercase">x</span><span className="text-red-600">VITBhopal</span> 2026
                    </h3>
                    <p className="scroll-text text-gray-400 max-w-2xl mx-auto">
                        Get ready for an inspiring day of ideas worth spreading.
                    </p>
                </div>

                {/* Event Card */}
                <div className="scroll-card relative bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-8 md:p-12 border border-white/5 overflow-hidden group hover:border-red-600/30 transition-all duration-500">

                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-all duration-500"></div>

                    <div className="relative z-10">
                        {/* Date Badge */}
                        <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-8">
                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-red-500 text-sm font-medium">April 2, 2026</span>
                        </div>

                        {/* Countdown Timer */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                            {timeUnits.map((unit) => (
                                <div key={unit.label} className="text-center">
                                    <div className="bg-black/50 rounded-xl p-4 md:p-6 border border-white/5">
                                        <span className="text-3xl md:text-5xl font-bold text-white">
                                            {String(unit.value).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <span className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mt-2 block">
                                        {unit.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Theme Section */}
                        <div className="text-center border-t border-white/5 pt-8">
                            <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest mb-2">Event Theme</p>
                            <p className="text-3xl md:text-5xl font-black text-white italic mb-6">Beyond Origins</p>
                            <div className="max-w-3xl mx-auto">
                                <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-6">
                                    Beyond Origins is about looking past the starting point. We often talk about where ideas begin, but not enough about what happens after. This theme explores how ideas, discoveries, systems, and even words grow and change over time, shaping the world around us.
                                </p>
                                <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                                    Beyond Origins celebrates the journey beyond roots and first steps, focusing on real impact, evolution, and the stories that continue long after the beginning.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
                                <a
                                    href="https://forms.gle/5J6t5G32nbhLjENq5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-auto px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 hover:scale-[1.02] text-center"
                                >
                                    Register
                                </a>
                                <Link to="/past-events" className="w-full md:w-auto px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-all duration-300 text-center">
                                    View Past Events
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
