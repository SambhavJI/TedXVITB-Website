const teamMembers = [
    // Organiser & President
    { name: "Vidisha Adhiya", role: "Organiser & President", img: "/Team-pics-optimized/Organiser & President_/Vidisha Adhiya_.jpg" },
    // Web & App Development
    { name: "Aryaman Jha", role: "Operations Manager", img: "/Team-pics-optimized/Planning & Curation/Aryaman Jha.jpg" },
    { name: "Shivang Mishra", role: "Operations Manager", img: "/Team-pics-optimized/Logistics & Hospitality_/Shivang Mishra.jpg" },
    { name: "Gunwaan Bareja", role: "Junior Student Co-ordinator", img: "/Team-pics-optimized/Social media & Pr Outreach_/ Gunwaan Bareja.jpg" },
    { name: "Sakshi Sharma", role: "Design & Branding", img: "/Team-pics-optimized/Design & Branding/ Sakshi Sharma.jpg" },
    { name: "Sambhavi Tiwari", role: "Design & Branding", img: "/Team-pics-optimized/Design & Branding/ Sambhavi Tiwari.jpg" },
    { name: "Vidhu Vinod", role: "Design & Branding", img: "/Team-pics-optimized/Design & Branding/Vidhu Vinod.jpg" },
    { name: "Sambhav Trivedi", role: "Web & App Development", img: "/Team-pics-optimized/Web & App development_/ Sambhav Trivedi.jpg" },
    { name: "Mrinal Mohit", role: "Web & App Development", img: "/Team-pics-optimized/Web & App development_/Mrinal Mohit.jpg" },
    // Design & Branding
    // Content & Editorial
    { name: "Atharva Dandwate", role: "Content & Editorial", img: "/Team-pics-optimized/ContentEditorial/Atharva Dandwate.jpg" },
    { name: "Diya Srivastava", role: "Content & Editorial", img: "/Team-pics-optimized/ContentEditorial/Diya Srivastava.jpg" },
    { name: "Yatharth Singh", role: "Content & Editorial", img: "/Team-pics-optimized/ContentEditorial/Yatharth Singh.jpg" },
    // Event Management
    { name: "Diya Raghuvanshi", role: "Event Management", img: "/Team-pics-optimized/Event Management_/ Diya Raghuvanshi.jpg" },
    { name: "Rhythm Sharma", role: "Event Management", img: "/Team-pics-optimized/Event Management_/Rhythm Sharma.jpg" },
    // Event Tech
    { name: "Priyanshu", role: "Event Tech", img: "/Team-pics-optimized/Event Tech/Priyanshu.jpg" },
    // Finance & Sponsorship
    { name: "Aarushi Garg", role: "Finance & Sponsorship", img: "/Team-pics-optimized/Finance & Sponsorship_/Aarushi Garg.jpg" },
    { name: "Yokesh T", role: "Finance & Sponsorship", img: "/Team-pics-optimized/Finance & Sponsorship_/Yokesh T.jpg" },
    // Logistics & Hospitality
    // Photography & Video Editing
    { name: "Deeptanshu Kumar Singh", role: "Photography & Video Editing", img: "/Team-pics-optimized/Photography & Video editing_/ Deeptanshu Kumar Singh.jpg" },
    { name: "Harsh Bokade", role: "Photography & Video Editing", img: "/Team-pics-optimized/Photography & Video editing_/ Harsh Bokade.jpg" },
    { name: "Aryan Jain", role: "Photography & Video Editing", img: "/Team-pics-optimized/Photography & Video editing_/Aryan Jain.jpg" },
    { name: "Tuhin Rakshit", role: "Photography & Video Editing", img: "/Team-pics-optimized/Photography & Video editing_/Tuhin Rakshit.jpg" },
    // Planning & Curation
    { name: "Rishit Singh", role: "Planning & Curation", img: "/Team-pics-optimized/Planning & Curation/ Rishit Singh.jpg" },
    { name: "Rachit Vaishnav", role: "Planning & Curation", img: "/Team-pics-optimized/Planning & Curation/Rachit Vaishnav.jpg" },
    { name: "Shubhangana Kanthed", role: "Planning & Curation", img: "/Team-pics-optimized/Planning & Curation/Shubhangana Kanthed.jpg" },
    // Production
    { name: "Abhidha Gupta", role: "Production", img: "/Team-pics-optimized/Production_/Abhidha Gupta.jpg" },
    { name: "Arushi Bakshi", role: "Production", img: "/Team-pics-optimized/Production_/Arushi Bakshi.jpg" },
    // Social Media & PR Outreach
    { name: "Dyutiman Bharadwaj", role: "Social Media & PR Outreach", img: "/Team-pics-optimized/Social media & Pr Outreach_/ Dyutiman Bharadwaj.jpg" },
    { name: "Dikshika", role: "Social Media & PR Outreach", img: "/Team-pics-optimized/Social media & Pr Outreach_/Dikshika.jpg" },
];

export default function Team() {
    return (
        <section id="team" className="scroll-section text-white py-24 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-red-600 text-sm font-bold tracking-[0.3em] uppercase mb-4">
                        Our Team
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
                        Meet the <span className="text-red-600">Visionaries</span>
                    </h3>
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-12 h-[3px] bg-red-600"></div>
                        <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">Ideas Worth Spreading</span>
                        <div className="w-12 h-[3px] bg-red-600"></div>
                    </div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        The passionate minds orchestrating TEDxVITBhopal, dedicated to bringing revolutionary ideas to center stage.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="relative aspect-[3/4] overflow-hidden group border border-white/5 hover:border-red-600/50 transition-all duration-500 rounded-lg bg-neutral-900 shadow-xl shadow-red-950/20">
                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-red-600 border-l-[30px] border-l-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <img
                                src={member.img}
                                alt={member.name}
                                loading="lazy"
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            />

                            {/* Info Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-red-600 transition-colors duration-300">
                                        {member.name}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-[2px] bg-red-600"></div>
                                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                            {member.role}
                                        </p>
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