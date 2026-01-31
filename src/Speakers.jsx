import { Link } from 'react-router-dom';

export default function Speakers({ name, title, description, image, reversed, buttonText, buttonLink }) {
    const isInternal = buttonLink?.startsWith('/');

    return (
        <section id="speakers" className="scroll-section text-white py-12 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Speaker Card */}
                <div className="scroll-card max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl overflow-hidden border border-white/5 group hover:border-red-600/30 transition-all duration-500">
                        <div className="grid md:grid-cols-2">
                            {/* Image - with order-last control */}
                            <div className={`relative h-64 md:h-96 overflow-hidden ${reversed ? 'md:order-last' : ''}`}>
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent ${reversed ? 'md:bg-gradient-to-l' : 'md:bg-gradient-to-r'}`}></div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 text-red-600 text-xs font-semibold uppercase tracking-widest mb-3">
                                    <div className="w-6 h-[2px] bg-red-600"></div>
                                    Featured Speaker
                                </div>
                                <h4 className="text-3xl font-bold mb-2">{name}</h4>
                                <p className="text-red-500 font-medium mb-4 text-lg">{title}</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    {description}
                                </p>

                                {isInternal ? (
                                    <Link to={buttonLink} className="w-full md:w-fit px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-all duration-300 text-center">
                                        {buttonText}
                                    </Link>
                                ) : (
                                    <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-fit px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 text-center">
                                        {buttonText}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
