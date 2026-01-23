import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const teamMembers = [
  { name: "Alice Johnson", role: "Frontend Developer", img: "/download.jpg" },
  { name: "Bob Smith", role: "Backend Developer", img: "/download.jpg" },
  { name: "Charlie Lee", role: "UI/UX Designer", img: "/download.jpg" },
  { name: "David Kim", role: "Fullstack Developer", img: "/download.jpg" },
  { name: "Eve Clark", role: "Project Manager", img: "/download.jpg" },
];

export default function TeamMarquee() {
  const scrollItems = [...teamMembers, ...teamMembers];
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } },
    });
  }, [controls]);

  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            MEET THE <span className="text-red-600">TEAM</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-12 h-[3px] bg-red-600"></div>
            <span className="text-red-600 font-bold text-sm tracking-[0.3em]">IDEAS WORTH SPREADING</span>
            <div className="w-12 h-[3px] bg-red-600"></div>
          </div>
        </div>

        <div
          ref={containerRef}
          className="overflow-hidden relative"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: ["0%", "-50%"],
              transition: { x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } },
            })
          }
        >
          <motion.div
            className="flex gap-8"
            animate={controls}
            style={{ minWidth: "max-content" }}
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