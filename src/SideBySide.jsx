export default function SideBySide(info) {
  const { img, altText, heading, description, buttonText } = info;
  return (
    <section className="scroll-section bg-black text-white py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="scroll-image">
          <img
            src={img}
            alt={altText}
            className="w-full rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="scroll-text flex flex-col justify-center">
          <h3 className="text-3xl font-semibold mb-4">
            {heading}
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {description}
          </p>

          <button onClick={() => window.location.href = "https://www.linkedin.com/pulse/from-cozy-blankets-open-conversations-house-tedxvitbhopal-x59zc/?trackingId=2CkeLCtMRK2SWeSn8DgTEw%3D%3D"} className="self-start border border-red-600 text-red-600 px-6 py-3 rounded-full hover:bg-red-600 hover:text-black transition">
            {buttonText}
          </button>
        </div>

      </div>
    </section>
  );
}
