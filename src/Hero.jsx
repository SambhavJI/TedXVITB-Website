import TextType from './TextType';
import TrueFocus from './TrueFocus';

export default function Hero() {
  const scrollToEvents = () => {
    const element = document.querySelector('#events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-transparent text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-none tracking-tight">
            Ideas Change <span className="text-red-600">Everything</span>.
          </h1>

          {/* Typed subtitle */}
          <TextType
            text={[
              'Conversations that inspire change.',
              'Stories that challenge perspectives.',
              'Ideas that matter.'
            ]}
            typingSpeed={50}
            pauseDuration={1200}
            showCursor={true}
            cursorCharacter="|"
            className="text-base md:text-xl text-gray-400 font-medium"
          />

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
            TED<span className="text-[1em] lowercase font-bold">x</span>VITBhopal brings together innovators, thinkers, and dreamers to share ideas
            that spark meaningful conversations and inspire positive change in our community.
          </p>

          {/* CTA */}
          <button
            onClick={scrollToEvents}
            className="mt-4 w-fit px-6 py-3 rounded-full border border-red-600 text-red-600 font-medium transition-all duration-300 hover:bg-red-600 hover:text-black"
          >
            Upcoming events
          </button>
        </div>

        {/* RIGHT GRAPHIC */}
        <TrueFocus
          sentence="Beyond Origins"
          manualMode={false}
          blurAmount={9}
          borderColor="#ed0534"
          animationDuration={0.5}
          pauseBetweenAnimations={2}
        />

      </div>
    </section>
  );
}
