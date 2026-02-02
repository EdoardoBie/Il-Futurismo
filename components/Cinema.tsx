import React, { useRef, useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from '../services/animationService';

const Cinema: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Reveal Title with stagger and power
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        skewY: 5,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%"
        }
      });

      // Reveal Video with a vertical shutter effect (Using ScaleY for robustness)
      gsap.from(maskRef.current, {
        scaleY: 0,
        transformOrigin: "bottom center",
        duration: 1.5,
        ease: "expo.inOut",
        scrollTrigger: {
            trigger: maskRef.current,
            start: "top 70%",
            end: "bottom center"
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-[#f2eee3] text-black border-b-8 border-black">
       <div className="container mx-auto px-4 md:px-12">
            
            <div ref={textRef} className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b-4 border-black pb-4 gap-4">
                <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter">
                    CINEMA<br/>
                    <span className="text-[#ff2a00] italic pr-4">MECCANICO</span>
                </h2>
                <div className="text-right flex flex-col items-end">
                    <span className="block font-mono text-sm uppercase tracking-widest mb-2">
                        Archivio Storico
                    </span>
                    <span className="bg-black text-[#f2eee3] px-3 py-1 font-bold text-xs uppercase inline-block transform -rotate-2">
                        Esperimento 1926
                    </span>
                </div>
            </div>

            <div className="relative w-full aspect-video bg-[#1a1a1a] p-2 md:p-4 shadow-[20px_20px_0px_0px_#ff2a00] border-2 border-black">
                {/* Mechanical Corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-black -translate-x-2 -translate-y-2 z-30"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-black translate-x-2 -translate-y-2 z-30"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-black -translate-x-2 translate-y-2 z-30"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-black translate-x-2 translate-y-2 z-30"></div>

                {/* Video Container with Mask */}
                <div ref={maskRef} className="relative w-full h-full overflow-hidden bg-black border border-white/10 group">
                    <iframe 
                        /* Using a reliable YouTube embed of "Anemic Cinema" (Duchamp) or similar Futurist/Dada abstract film */
                        src="https://www.youtube.com/embed/M_W4O8U8jOs?autoplay=1&mute=1&controls=0&loop=1&playlist=M_W4O8U8jOs&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1" 
                        className="w-full h-full object-cover pointer-events-none filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out scale-[1.2]"
                        allow="autoplay; encrypted-media"
                        title="Futurist Video"
                        loading="lazy"
                    ></iframe>
                    
                    {/* Old Film Grain Overlay (CSS based) */}
                    <div className="absolute inset-0 pointer-events-none z-10 opacity-30 mix-blend-overlay" 
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
                    </div>
                    
                    {/* Scanlines */}
                    <div className="absolute inset-0 pointer-events-none z-10 opacity-20" 
                         style={{ background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))", backgroundSize: "100% 4px, 6px 100%" }}>
                    </div>

                    {/* Play Hint */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                        <div className="w-20 h-20 rounded-full border-4 border-[#ff2a00] flex items-center justify-center animate-pulse">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-[#ff2a00] border-b-[10px] border-b-transparent ml-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 flex justify-between font-mono text-xs md:text-sm uppercase text-gray-500 border-t border-black/20 pt-4">
                <span>Fig. 3.4 — La Deformazione del Reale</span>
                <span>Interagisci per colore</span>
            </div>
       </div>
    </section>
  );
};

export default Cinema;