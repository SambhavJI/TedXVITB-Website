export default function Footer() {
    const socialLinks = [
        {
            name: 'Instagram',
            href: '#', // Update with actual link
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: '#', // Update with actual link
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: '#', // Update with actual link
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            href: '#', // Update with actual link
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="bg-neutral-950 text-white py-16 px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto">

                <div className="grid md:grid-cols-3 gap-12 mb-12">

                    {/* Logo & Tagline */}
                    <div>
                        <img src="./logo-white.png" alt="TEDx Logo" className="h-8 mb-4" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Ideas worth spreading. TED<span className="text-[1em] lowercase">x</span>VITBhopal is an independently organized TED<span className="text-[1em] lowercase">x</span> event.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['About', 'Events', 'Speakers', 'Team'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const el = document.querySelector(`#${item.toLowerCase()}`);
                                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Get in Touch</h4>
                        <p className="text-gray-400 text-sm mb-2">VIT Bhopal University</p>
                        <p className="text-gray-400 text-sm mb-4">Bhopal-Indore Highway, Madhya Pradesh</p>
                        <a href="mailto:tedx@vitbhopal.ac.in" className="text-red-500 text-sm hover:text-red-400 transition-colors">
                            tedx@vitbhopal.ac.in
                        </a>
                        <br />
                        <a href="mailto:tedxchaptervitb@gmail.com" className="text-red-500 text-sm hover:text-red-400 transition-colors">
                            tedxchaptervitb@gmail.com
                        </a>
                    </div>

                </div>

                {/* Social Links & Copyright */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-500 text-xs text-center md:text-right">
                        © {new Date().getFullYear()} TED<span className="text-[1em] lowercase">x</span>VITBhopal. This independent TED<span className="text-[1em] lowercase">x</span> event is operated under license from TED.
                    </p>

                </div>

            </div>
        </footer>
    );
}
