import React, { useRef, useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from '../services/animationService';

const VelocityBreak: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Base loop animation for Row 1 (Left)
      const tl1 = gsap.to(row1Ref.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1
      });

      // Base loop animation for Row 2 (Right)
      const tl2 = gsap.to(row2Ref.current, {
        xPercent: 50, // Start from negative, move to positive
        ease: "none",
        duration: 20,
        repeat: -1
      });
      
      // Need to set initial position for Row 2 to ensure smooth loop from left to right
      gsap.set(row2Ref.current, { xPercent: -50 });

      // Scroll interaction: Acccelerate timeScale based on scroll velocity
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity());
          const timeScale = 1 + (velocity / 50); // Base speed + scroll boost
          
          gsap.to([tl1, tl2], {
            timeScale: timeScale,
            duration: 0.5,
            overwrite: true
          });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const QuoteRepeated = "WE STAND ON THE LAST PROMONTORY OF THE CENTURIES — WHY SHOULD WE LOOK BACK? — ";
  const QuoteRepeated2 = "NOI SIAMO SUL PROMONTORIO ESTREMO DEI SECOLI — PERCHÉ GUARDARE INDIETRO? — ";

  return (
    <section ref={containerRef} className="relative bg-[#ff2a00] text-black border-y-8 border-black py-20 overflow-hidden select-none z-20">
      
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20 flex justify-between px-12">
        <div className="w-1 h-full bg-black"></div>
        <div className="w-1 h-full bg-black"></div>
        <div className="w-1 h-full bg-black"></div>
      </div>

      {/* Row 1: Left Movement */}
      <div className="relative w-full overflow-hidden rotate-1 mb-4 mix-blend-hard-light">
        <div ref={row1Ref} className="flex whitespace-nowrap will-change-transform">
           {/* Duplicate 4 times to ensure seamless loop on wide screens */}
           {[...Array(4)].map((_, i) => (
             <span key={i} className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter mr-8">
               {QuoteRepeated}
             </span>
           ))}
        </div>
      </div>

      {/* Row 2: Right Movement */}
      <div className="relative w-full overflow-hidden -rotate-1 mix-blend-hard-light">
        <div ref={row2Ref} className="flex whitespace-nowrap will-change-transform">
           {[...Array(4)].map((_, i) => (
             <span key={i} className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter text-white stroke-black text-stroke-2 mr-8">
               {QuoteRepeated2}
             </span>
           ))}
        </div>
      </div>

      {/* Central Badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
         <div className="bg-black text-[#f2eee3] rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center border-4 border-[#f2eee3] animate-[spin_10s_linear_infinite]">
            <span className="font-mono text-xs md:text-sm text-center uppercase tracking-widest">
              Guerra<br/>Sola<br/>Igiene
            </span>
         </div>
      </div>

    </section>
  );
};

export default VelocityBreak;