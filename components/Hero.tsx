import React, { useEffect, useRef } from 'react';
import { gsap } from '../services/animationService';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const textRef3 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial Explosion Effect
    tl.fromTo(textRef1.current, 
      { x: -200, opacity: 0, scale: 2 }, 
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: "expo.out" }
    )
    .fromTo(textRef2.current,
      { x: 200, opacity: 0, scale: 0.5 },
      { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "bounce.out" },
      "-=0.5"
    )
    .fromTo(textRef3.current,
      { y: 200, opacity: 0, rotation: 10 },
      { y: 0, opacity: 1, rotation: 0, duration: 1, ease: "power4.out" },
      "-=0.6"
    );

    // Mouse Interaction
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40;
      const y = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(textRef1.current, { x: x, y: y, duration: 1, ease: "power2.out" });
      gsap.to(textRef2.current, { x: -x, y: -y, duration: 1, ease: "power2.out" });
      gsap.to(textRef3.current, { x: x * 1.5, y: y * 1.5, rotation: x * 0.5, duration: 1, ease: "power2.out" });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 text-center leading-[0.8] mix-blend-exclusion">
        <h1 ref={textRef1} className="display-font text-[15vw] md:text-[22vw] text-[#ff2a00] block select-none">
          ZANG
        </h1>
        <h1 ref={textRef2} className="display-font text-[15vw] md:text-[22vw] text-black outline-text block select-none z-20 relative">
          TUMB
        </h1>
        <h1 ref={textRef3} className="display-font text-[15vw] md:text-[22vw] text-black block select-none">
          TUMB
        </h1>
      </div>
      
      <div className="absolute bottom-10 left-10 max-w-xs">
        <p className="font-mono text-xs md:text-sm uppercase tracking-widest border-t-2 border-black pt-4">
          F.T. Marinetti — 1914<br/>
          Adrianople Siege<br/>
          Parole in libertà
        </p>
      </div>
    </section>
  );
};

export default Hero;