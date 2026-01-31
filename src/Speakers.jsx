import { Link } from 'react-router-dom';

export default function Speakers() {
    // Placeholder speaker - update with real data when available
    const speaker = {
        name: "Dr. Siddhartha Maiti",
        title: "Cognitive Chrysalis",
        description: "In an inspiring TED Talk, Dr. Siddhartha Maiti, Assistant Professor at VIT Bhopal University, recounts his journey from humble beginnings in India to academic and professional success in the United States, spanning the University of Massachusetts and leading biotechnology firms.",
        image: "/speaker1.jpeg" // placeholder image
    };

    return (
        <section id="speakers" className="scroll-section text-white py-24 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Speaker Card */}
                <div className="scroll-card max-w-2xl mx-auto">
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl overflow-hidden border border-white/5 group hover:border-red-600/30 transition-all duration-500">

                        <div className="grid md:grid-cols-2">
                            {/* Image */}
                            <div className="relative h-64 md:h-auto overflow-hidden">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r"></div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 text-red-600 text-xs font-semibold uppercase tracking-widest mb-3">
                                    <div className="w-6 h-[2px] bg-red-600"></div>
                                    Featured Speaker
                                </div>
                                <h4 className="text-2xl font-bold mb-2">{speaker.name}</h4>
                                <p className="text-red-500 font-medium mb-4">{speaker.title}</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {speaker.description}
                                </p>
                                <br />
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
