import React from "react";

const teamMembers = [
  // Organiser & President
  { name: "Vidisha Adhiya", role: "Organiser & President", img: "/Team-pics-optimized/Organiser & President_/Vidisha Adhiya_.jpg" },
  // Web & App Development
  { name: "Sambhav Trivedi", role: "Web & App Development", img: "/Team-pics-optimized/Web & App development_/ Sambhav Trivedi.jpg" },
  { name: "Mrinal Mohit", role: "Web & App Development", img: "/Team-pics-optimized/Web & App development_/Mrinal Mohit.jpg" },
  // Design & Branding
  { name: "Sakshi Sharma", role: "Design & Branding", img: "/Team-pics-optimized/Design & Branding/ Sakshi Sharma.jpg" },
  { name: "Sambhavi Tiwari", role: "Design & Branding", img: "/Team-pics-optimized/Design & Branding/ Sambhavi Tiwari.jpg" },
  { name: "Vidhu Vinod", role: "Design & Branding", img: "/Team-pics-optimized/Design & Branding/Vidhu Vinod.jpg" },
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
  { name: "Shivang Mishra", role: "Operations Manager", img: "/Team-pics-optimized/Logistics & Hospitality_/Shivang Mishra.jpg" },
  // Photography & Video Editing
  { name: "Deeptanshu Kumar Singh", role: "Photography & Video Editing", img: "/Team-pics-optimized/Photography & Video editing_/ Deeptanshu Kumar Singh.jpg" },
  { name: "Harsh Bokade", role: "Photography & Video Editing", img: "/Team-pics-optimized/Photography & Video editing_/ Harsh Bokade.jpg" },
  { name: "Aryan Jain", role: "Photography & Video Editing", img: "/Team-pics-optimized/Photography & Video editing_/Aryan Jain.jpg" },
  { name: "Tuhin Rakshit", role: "Photography & Video Editing", img: "/Team-pics-optimized/Photography & Video editing_/Tuhin Rakshit.jpg" },
  // Planning & Curation
  { name: "Rishit Singh", role: "Planning & Curation", img: "/Team-pics-optimized/Planning & Curation/ Rishit Singh.jpg" },
  { name: "Aryaman Jha", role: "Operations Manager", img: "/Team-pics-optimized/Planning & Curation/Aryaman Jha.jpg" },
  { name: "Rachit Vaishnav", role: "Planning & Curation", img: "/Team-pics-optimized/Planning & Curation/Rachit Vaishnav.jpg" },
  { name: "Shubhangana Kanthed", role: "Planning & Curation", img: "/Team-pics-optimized/Planning & Curation/Shubhangana Kanthed.jpg" },
  // Production
  { name: "Abhidha Gupta", role: "Production", img: "/Team-pics-optimized/Production_/Abhidha Gupta.jpg" },
  { name: "Arushi Bakshi", role: "Production", img: "/Team-pics-optimized/Production_/Arushi Bakshi.jpg" },
  // Social Media & PR Outreach
  { name: "Dyutiman Bharadwaj", role: "Social Media & PR Outreach", img: "/Team-pics-optimized/Social media & Pr Outreach_/ Dyutiman Bharadwaj.jpg" },
  { name: "Gunwaan Bareja", role: "Junior Student Co-ordinator", img: "/Team-pics-optimized/Social media & Pr Outreach_/ Gunwaan Bareja.jpg" },
  { name: "Dikshika", role: "Social Media & PR Outreach", img: "/Team-pics-optimized/Social media & Pr Outreach_/Dikshika.jpg" },
];

export default function TeamMarquee() {
  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      {/* CSS for the Marquee Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: scroll 80s linear infinite;
            will-change: transform;
          }
          .marquee-container:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="absolute inset-0 bg-gradient-to-b from-red-950/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight uppercase">
            Meet the <span className="text-red-600">Team</span>
          </h2>
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
            <div className="w-8 md:w-12 h-[3px] bg-red-600"></div>
            <span className="text-red-600 font-bold text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase">Ideas Worth Spreading</span>
            <div className="w-8 md:w-12 h-[3px] bg-red-600"></div>
          </div>
        </div>

        <div className="marquee-container overflow-hidden relative">
          <div className="animate-marquee gap-8 px-4">
            {/* First Group */}
            <div className="flex gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={`member-1-${index}`} member={member} />
              ))}
            </div>

            {/* Duplicate Group for Seamless Loop */}
            <div className="flex gap-8" aria-hidden="true">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={`member-2-${index}`} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member }) {
  return (
    <div className="relative w-[220px] h-[300px] overflow-hidden cursor-pointer group flex-shrink-0">
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-red-600 border-l-[40px] border-l-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative w-full h-full overflow-hidden bg-neutral-900">
        <img
          src={member.img}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-300"></div>

        {/* Info Box */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-16 pb-6 px-4">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white font-bold text-lg leading-tight mb-1">{member.name}</h3>
            <div className="flex items-center gap-2">
              <div className="w-5 h-[2px] bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <p className="text-red-500 text-[10px] font-bold tracking-widest uppercase">{member.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Border effect */}
      <div className="absolute inset-0 border border-white/5 group-hover:border-red-600/50 transition-colors duration-500 pointer-events-none"></div>
    </div>
  );
}