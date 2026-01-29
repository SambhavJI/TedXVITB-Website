import { useState } from 'react';

export default function Newsletter() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.message) {
            const subject = encodeURIComponent(
                `Newsletter Contribution from ${formData.name}`
            );

            const body = encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            );

            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=tedxchaptervitb@gmail.com&su=${subject}&body=${body}`;

            window.open(gmailLink, '_blank');

            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        }
    };


    return (
        <section className="scroll-section bg-black text-white py-24 px-6">
            <div className="max-w-3xl mx-auto text-center">

                {/* Section Header */}
                <h2 className="scroll-text text-red-600 text-sm font-semibold tracking-widest uppercase mb-4">
                    Share Your Ideas
                </h2>
                <h3 className="scroll-text text-3xl md:text-4xl font-bold mb-4">
                    Newsletter <span className="text-red-600">Contribution</span>
                </h3>
                <p className="scroll-text text-gray-400 mb-10 max-w-lg mx-auto">
                    Have an idea worth spreading? Share your thoughts, stories, or insights with us and get featured in our TEDxVITBhopal newsletter.
                </p>

                {/* Contribution Form */}
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="scroll-text flex flex-col gap-4 max-w-md mx-auto">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="px-6 py-4 bg-neutral-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-600/50 transition-colors duration-300"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="px-6 py-4 bg-neutral-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-600/50 transition-colors duration-300"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Share your idea or story..."
                            required
                            rows={4}
                            className="px-6 py-4 bg-neutral-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-600/50 transition-colors duration-300 resize-none"
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
                        >
                            Submit Contribution
                        </button>
                    </form>
                ) : (
                    <div className="scroll-text bg-neutral-900 border border-red-600/20 rounded-xl p-6 max-w-md mx-auto">
                        <div className="flex items-center justify-center gap-3 text-red-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-medium">Email client opened!</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2">
                            Complete sending your contribution via your email client.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="mt-4 text-red-500 hover:text-red-400 text-sm underline"
                        >
                            Submit another contribution
                        </button>
                    </div>
                )}

                {/* Note */}
                <p className="scroll-text text-gray-600 text-xs mt-6">
                    Your ideas may be featured in our newsletter with your permission.
                </p>

            </div>
        </section>
    );
}
