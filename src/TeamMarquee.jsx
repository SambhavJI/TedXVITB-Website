import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

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
  { name: "Shivang Mishra", role: "Logistics & Hospitality", img: "/Team-pics-optimized/Logistics & Hospitality_/Shivang Mishra.jpg" },

  // Photography & Video Editing
  { name: "Deeptanshu Kumar Singh", role: "Photography & Video Editing", img: "/Team-pics-optimized/Photography & Video editing_/ Deeptanshu Kumar Singh.jpg" },
  { name: "Harsh Bokade", role: "Photography & Video Editing", img: "/Team-pics-optimized/Photography & Video editing_/ Harsh Bokade.jpg" },
  { name: "Aryan Jain", role: "Photography & Video Editing", img: "/Team-pics-optimized/Photography & Video editing_/Aryan Jain.jpg" },
  { name: "Tuhin Rakshit", role: "Photography & Video Editing", img: "/Team-pics-optimized/Photography & Video editing_/Tuhin Rakshit.jpg" },

  // Planning & Curation
  { name: "Rishit Singh", role: "Planning & Curation", img: "/Team-pics-optimized/Planning & Curation/ Rishit Singh.jpg" },
  { name: "Aryaman Jha", role: "Planning & Curation", img: "/Team-pics-optimized/Planning & Curation/Aryaman Jha.jpg" },
  { name: "Rachit Vaishnav", role: "Planning & Curation", img: "/Team-pics-optimized/Planning & Curation/Rachit Vaishnav.jpg" },
  { name: "Shubhangana Kanthed", role: "Planning & Curation", img: "/Team-pics-optimized/Planning & Curation/Shubhangana Kanthed.jpg" },

  // Production
  { name: "Abhidha Gupta", role: "Production", img: "/Team-pics-optimized/Production_/Abhidha Gupta.jpg" },
  { name: "Arushi Bakshi", role: "Production", img: "/Team-pics-optimized/Production_/Arushi Bakshi.jpg" },

  // Social Media & PR Outreach
  { name: "Dyutiman Bharadwaj", role: "Social Media & PR Outreach", img: "/Team-pics-optimized/Social media & Pr Outreach_/ Dyutiman Bharadwaj.jpg" },
  { name: "Gunwaan Bareja", role: "Social Media & PR Outreach", img: "/Team-pics-optimized/Social media & Pr Outreach_/ Gunwaan Bareja.jpg" },
  { name: "Dikshika", role: "Social Media & PR Outreach", img: "/Team-pics-optimized/Social media & Pr Outreach_/Dikshika.jpg" },
];

export default function TeamMarquee() {
  const scrollItems = [...teamMembers, ...teamMembers];
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 80, ease: "linear" } },
    });
  }, [controls]);

  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
            MEET THE <span className="text-red-600">TEAM</span>
          </h2>
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
            <div className="w-8 md:w-12 h-[3px] bg-red-600"></div>
            <span className="text-red-600 font-bold text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em]">IDEAS WORTH SPREADING</span>
            <div className="w-8 md:w-12 h-[3px] bg-red-600"></div>
          </div>
        </div>

        <div
          ref={containerRef}
          className="overflow-hidden relative"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: ["0%", "-50%"],
              transition: { x: { repeat: Infinity, repeatType: "loop", duration: 80, ease: "linear" } },
            })
          }
        >
          <motion.div
            className="flex gap-8"
            animate={controls}
            style={{ minWidth: "max-content", willChange: "transform", transform: "translateZ(0)" }}
          >
            {scrollItems.map((member, index) => (
              <div
                key={index}
                className="relative w-[200px] h-[280px] overflow-hidden cursor-pointer group flex-shrink-0"
              >
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-red-600 border-l-[40px] border-l-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative w-full h-full overflow-hidden bg-neutral-900">
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-all duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent pt-12 pb-4 px-4">
                    <div className="transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                      <h3 className="text-white font-bold text-lg leading-tight mb-1">{member.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-[2px] bg-red-600"></div>
                        <p className="text-red-500 text-xs font-semibold tracking-wider uppercase">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}