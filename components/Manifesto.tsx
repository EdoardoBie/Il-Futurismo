import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../services/animationService';
import { MANIFESTO_TEXTS } from '../constants';

const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate columns appearing
      gsap.from('.manifesto-col', {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });

      // Animate the highlight line separately
      gsap.from('.manifesto-highlight', {
        scale: 0.8,
        opacity: 0,
        rotation: -2,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.manifesto-highlight',
          start: 'top 80%',
          scrub: 1,
          end: 'bottom 50%'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative py-32 bg-[#f2eee3] text-black overflow-hidden border-y-8 border-black">
      {/* Decorative skewed background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute h-full w-[1px] bg-black" style={{ left: `${20 * i}%`, transform: 'skewX(-20deg)' }}></div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 border-b-4 border-black pb-8">
          <span className="block font-mono text-sm tracking-[0.5em] uppercase mb-4">The Foundation and Manifesto</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
            THEORY OF THE <br/>
            <span className="text-[#ff2a00] italic">FUTURE</span>
          </h2>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Main Lead Paragraph - Spans 8 cols */}
          <div className="col-span-1 md:col-span-8 manifesto-col">
            <p className="text-2xl md:text-4xl serif-font font-bold leading-tight mb-8">
              {MANIFESTO_TEXTS.header}
            </p>
          </div>

          {/* Date/Info sidebar - Spans 4 cols */}
          <div className="col-span-1 md:col-span-4 border-l-2 border-black pl-6 flex flex-col justify-between manifesto-col">
            <div className="font-mono text-xs uppercase">
              <p>Publication: Le Figaro</p>
              <p>Date: Feb 20, 1909</p>
              <p>Location: Paris, France</p>
            </div>
            <div className="mt-8">
              <div className="w-16 h-16 bg-[#ff2a00] rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Three Column Dense Text */}
          <div className="col-span-1 md:col-span-4 manifesto-col">
             <p className="serif-font text-lg text-justify leading-relaxed border-t-2 border-black pt-4">
               <span className="float-left text-6xl font-black font-sans mr-2 mt-[-10px] text-[#ff2a00]">1.</span>
               {MANIFESTO_TEXTS.col1}
             </p>
          </div>
          <div className="col-span-1 md:col-span-4 manifesto-col">
             <p className="serif-font text-lg text-justify leading-relaxed border-t-2 border-black pt-4">
                <span className="float-left text-6xl font-black font-sans mr-2 mt-[-10px]">2.</span>
                {MANIFESTO_TEXTS.col2}
             </p>
          </div>
          <div className="col-span-1 md:col-span-4 manifesto-col">
             <p className="serif-font text-lg text-justify leading-relaxed border-t-2 border-black pt-4">
                <span className="float-left text-6xl font-black font-sans mr-2 mt-[-10px]">3.</span>
                {MANIFESTO_TEXTS.col3}
             </p>
          </div>
        </div>

        {/* Giant Quote Interruption */}
        <div className="mt-32 relative text-center manifesto-highlight">
           <h3 className="text-5xl md:text-[7vw] font-black uppercase leading-[0.85] text-black mix-blend-multiply transform -rotate-1">
             {MANIFESTO_TEXTS.highlight}
           </h3>
           <h3 className="text-5xl md:text-[7vw] font-black uppercase leading-[0.85] text-[#ff2a00] absolute top-1 left-1 -z-10 opacity-50 transform -rotate-1 blur-[1px]">
             {MANIFESTO_TEXTS.highlight}
           </h3>
        </div>

      </div>
    </div>
  );
};

export default Manifesto;