import React, { useRef, useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from '../services/animationService';
import { TIMELINE_EVENTS } from '../constants';

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.timeline-item');
      const totalWidth = sections.length * 100;
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (triggerRef.current?.offsetWidth || 0) * 2, // Longer scroll for reading
        }
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={triggerRef} className="relative h-screen bg-[#ff2a00] text-[#f2eee3] overflow-hidden">
      
      {/* Background Year Markers that move slower */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none opacity-10 font-black text-[30vw] whitespace-nowrap z-0 overflow-hidden">
        1909 — 1910 — 1912 — 1913 — 1914
      </div>

      <div className="absolute top-10 left-10 z-20 border-b-4 border-black pb-2 bg-[#ff2a00] px-4">
         <h2 className="text-3xl md:text-4xl font-bold uppercase text-black">Chronology of Velocity</h2>
      </div>

      <div ref={sectionRef} className="flex h-full w-[500%]">
        {TIMELINE_EVENTS.map((event, index) => (
          <div key={index} className="timeline-item w-screen h-full flex flex-col md:flex-row justify-center items-center px-8 md:px-20 border-r-4 border-black/20 relative z-10">
             
             {/* Large Number */}
             <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
                <span className="block text-[20vw] md:text-[15vw] leading-none font-black text-black opacity-20 select-none transform md:-rotate-90">
                  {event.year}
                </span>
             </div>

             {/* Content Card */}
             <div className="md:w-2/3 max-w-4xl">
                <div className="bg-[#f2eee3] text-black p-8 md:p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-2 hover:shadow-[25px_25px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-4 mb-6 border-b-2 border-black pb-4">
                    <div className="w-4 h-4 bg-[#ff2a00] rounded-full"></div>
                    <span className="font-mono text-sm uppercase tracking-widest">Historical Event {index + 1}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-7xl font-black uppercase mb-6 leading-[0.9] tracking-tight">
                    {event.title}
                  </h3>
                  
                  <p className="serif-font text-lg md:text-2xl leading-relaxed">
                    {event.desc}
                  </p>
                </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;