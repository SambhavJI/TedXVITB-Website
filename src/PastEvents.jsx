export default function PastEvents() {
    const historicalEvents = [
        {
            year: "2023",
            theme: "Cognitive Chrysalis",
            description: "In his inspiring TED Talk, Dr. Siddhartha Maiti, Assistant Professor at VIT Bhopal University, shared the captivating narrative of his ascent from humble beginnings in India to the heights of academia in the United States. Embarking on his academic journey at the University of Massachusetts, Dr. Maiti went on to carve a path through some of the most esteemed biotechnology firms in the US.",
            speakers: ["Dr. Siddhartha Maiti"],
            images: [
                "/event1.jpeg",
                "/event3.jpeg",
                "/event2.jpeg"
            ]
        }
    ];

    return (
        <section className="min-h-screen bg-black text-white py-24 px-6 pt-32">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="scroll-text text-red-600 text-sm font-semibold tracking-widest uppercase mb-4">
                        Our Legacy
                    </h2>
                    <h1 className="scroll-text text-4xl md:text-6xl font-bold mb-6">
                        Past <span className="text-red-600">Events</span>
                    </h1>
                    <p className="scroll-text text-gray-400 max-w-2xl mx-auto italic">
                        Relive the moments and ideas that shaped TED<span className="text-[1em] lowercase">x</span>VITBhopal through the years.
                    </p>
                </div>

                <div className="space-y-24">
                    {historicalEvents.map((event, index) => (
                        <div key={index} className="scroll-card border-t border-white/10 pt-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-4 py-1 bg-red-600 rounded-full text-sm font-bold">{event.year}</span>
                                        <h2 className="text-3xl font-bold">{event.theme}</h2>
                                    </div>
                                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                        {event.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {event.speakers.map((speaker, sIdx) => (
                                            <span key={sIdx} className="px-3 py-1 bg-neutral-900 border border-white/5 rounded-lg text-sm text-gray-300">
                                                {speaker}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-48 rounded-2xl border border-white/5 overflow-hidden">
                                        <img src={event.images[0]} alt="Past Event 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="h-48 rounded-2xl border border-white/5 overflow-hidden">
                                        <img src={event.images[1]} alt="Past Event 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="col-span-2 h-64 rounded-2xl border border-white/5 overflow-hidden">
                                        <img src={event.images[2]} alt="Past Event 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
