export default function Speakers() {
    // Placeholder speaker - update with real data when available
    const speaker = {
        name: "Speaker Name",
        title: "Topic Coming Soon",
        description: "Our first confirmed speaker will be announced soon. Stay tuned for an inspiring talk that challenges perspectives and sparks new ideas.",
        image: "/download.jpg" // placeholder image
    };

    return (
        <section id="speakers" className="scroll-section text-white py-24 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Section Header */}
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
                            </div>
                        </div>
                    </div>
                </div>

                {/* More Speakers Coming */}
                <div className="text-center mt-12">
                    <p className="text-gray-500 text-sm">
                        More speakers will be announced soon. Follow us for updates!
                    </p>
                </div>

            </div>
        </section>
    );
}
