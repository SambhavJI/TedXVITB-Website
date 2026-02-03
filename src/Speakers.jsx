import { Link } from 'react-router-dom';

const Speakers = ({
    name,
    title,
    description,
    img,
    reversed = false,
    buttonText = "View Past Events",
    buttonLink = "/past-events"
}) => {
    const isInternal = buttonLink.startsWith('/') || buttonLink.startsWith('#');

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-neutral-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-red-600/20 transition-all duration-500 group">
                {/* Image Section */}
                <div className={`relative h-80 md:h-[500px] overflow-hidden ${reversed ? 'md:order-last' : ''}`}>
                    <img
                        src={img}
                        alt={name}
                        className="w-full h-full object-cover object-top md:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-red-600 text-xs font-bold tracking-[0.2em] uppercase">
                            <div className="w-6 h-[2px] bg-red-600"></div>
                            Featured Speaker
                        </div>
                        <h4 className="text-3xl md:text-4xl font-black mb-2 uppercase">{name}</h4>
                        <p className="text-red-500 font-bold mb-4 text-xl italic">{title}</p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            {description}
                        </p>

                        {isInternal ? (
                            <Link
                                to={buttonLink}
                                className="inline-flex items-center justify-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 w-fit"
                            >
                                {buttonText}
                            </Link>
                        ) : (
                            <a
                                href={buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 w-fit"
                            >
                                {buttonText}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speakers;
