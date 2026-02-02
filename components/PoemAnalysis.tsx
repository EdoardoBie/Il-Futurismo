import React, { useRef, useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from '../services/animationService';

const PoemAnalysis: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.analysis-card');
      
      cards.forEach((card: any) => {
        gsap.fromTo(card, 
          { y: 150, opacity: 0, skewY: 5 },
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 bg-[#1a1a1a] text-[#f2eee3] border-t-8 border-[#ff2a00] overflow-hidden">
      {/* Background Grid/Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        <div className="mb-24 text-center">
            <h2 className="text-6xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter">
              TRAGUARDO<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#ff2a00] via-[#ff2a00] to-red-900 block mt-2 transform -skew-x-12">
                ESPLOSIONE!
              </span>
            </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Visual Anchor */}
          <div className="md:w-5/12 hidden md:block">
            <div className="sticky top-[15vh] pb-24 h-auto">
               <div className="relative group perspective-[1000px]">
                  {/* The Graphic Representation */}
                  <div className="relative z-10 border-4 border-[#f2eee3] bg-black p-6 shadow-[20px_20px_0px_0px_rgba(255,42,0,1)] transform transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:translate-x-2">
                     <div className="border border-white/20 p-8 h-[600px] flex flex-col justify-between relative overflow-hidden">
                        
                        {/* NEW: Background Image Integration */}
                        <div className="absolute inset-0 z-0">
                           <img 
                              src="https://lh3.googleusercontent.com/d/1XstBigAEdMhhkDBp-db5wc9_olQlGe-b" 
                              alt="Futurist Composition" 
                              className="w-full h-full object-cover opacity-50 grayscale mix-blend-hard-light group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 ease-out scale-110 group-hover:scale-100"
                           />
                           <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
                        </div>

                        {/* Abstract typographical art mimicking the poem */}
                        <div className="absolute top-0 right-0 text-[200px] leading-none text-[#ff2a00] opacity-30 font-black select-none mix-blend-screen z-10">ZANG</div>
                        <div className="absolute bottom-0 left-0 text-[200px] leading-none text-[#ff2a00] opacity-30 font-black select-none mix-blend-screen z-10">TUMB</div>
                        
                        <div className="relative z-20">
                          <p className="font-mono text-xs tracking-[0.5em] uppercase mb-4 bg-black/50 inline-block p-1 backdrop-blur-sm">Manifesto 1914</p>
                          <h3 className="text-4xl font-bold uppercase leading-tight drop-shadow-lg text-shadow-sm">NOI SIAMO L'ELICA CHE FRULLA IL DOMANI.</h3>
                        </div>

                        <div className="relative z-20 border-t-2 border-[#ff2a00] pt-4">
                           <div className="w-full h-1 bg-white mb-1 animate-pulse"></div>
                           <div className="w-3/4 h-1 bg-white mb-1"></div>
                           <div className="w-1/2 h-1 bg-white"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: The Poem/Manifesto Cards */}
          <div className="md:w-7/12 flex flex-col pt-0 md:pt-12 pb-32">
             
             {/* CARD 1: THE EQUATION */}
             <div className="analysis-card mb-24 relative group">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#ff2a00] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                <div className="pl-6 md:pl-10">
                  <span className="font-mono text-[#ff2a00] text-sm tracking-widest mb-2 block">01 // L'EQUAZIONE</span>
                  <h3 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-[0.9]">
                    GIOVINEZZA = <br/>
                    <span className="text-[#ff2a00]">BENZINA SUPERIORE</span>
                  </h3>
                  <p className="serif-font text-2xl text-gray-300 italic mb-6">
                    "Noi siamo l’elica che frulla il domani!"
                  </p>
                  <div className="flex flex-wrap gap-4 font-black uppercase text-xl md:text-2xl">
                    <span className="border border-white px-4 py-1 hover:bg-white hover:text-black transition-colors cursor-crosshair">CORRERE!</span>
                    <span className="border border-white px-4 py-1 hover:bg-[#ff2a00] hover:border-[#ff2a00] hover:text-white transition-colors cursor-crosshair">BRUCIARE!</span>
                    <span className="border border-white px-4 py-1 hover:bg-white hover:text-black transition-colors cursor-crosshair">AFFERRARE!</span>
                  </div>
                </div>
             </div>

             {/* CARD 2: THE LOCOMOTIVE */}
             <div className="analysis-card mb-24 relative group">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                <div className="pl-6 md:pl-10">
                  <span className="font-mono text-[#ff2a00] text-sm tracking-widest mb-2 block">02 // LA MECCANICA</span>
                  <p className="text-xl md:text-3xl font-bold uppercase mb-4 leading-tight">
                    Il Successo non è una marcia lenta. NO! 
                  </p>
                  <div className="bg-[#f2eee3] text-black p-6 transform -rotate-1 shadow-[10px_10px_0px_0px_#333]">
                    <h3 className="text-3xl md:text-5xl font-black uppercase leading-none mb-2">
                      LOCOMOTIVA
                    </h3>
                    <p className="font-mono text-sm border-t border-black pt-2 mt-2">
                      Lanciata contro il muro del suono. Tuffo verticale nel metallo fuso della GLORIA.
                    </p>
                  </div>
                  <div className="mt-8 font-mono text-[#ff2a00] text-lg md:text-xl tracking-widest animate-pulse">
                    VELOCITÀ + ARDIRE = VITTORIA MATEMATICA.
                  </div>
                  <p className="mt-4 text-gray-500 font-mono text-xs">
                    RITMO CARDIACO: Tatapun-tatapun-tatapun...
                  </p>
                </div>
             </div>

             {/* CARD 3: THE EXPLOSION */}
             <div className="analysis-card mb-12 relative group">
                <div className="border-4 border-[#ff2a00] bg-[#ff2a00] text-black p-8 md:p-12 hover:scale-105 transition-transform duration-300">
                   <div className="flex justify-between items-start mb-8 border-b-2 border-black pb-4">
                      <span className="font-black text-2xl">03</span>
                      <span className="font-mono text-sm uppercase">Traguardo Finale</span>
                   </div>
                   
                   <h3 className="text-5xl md:text-8xl font-black uppercase leading-[0.8] mb-6 break-words">
                     ZANG-<br/>TUMB-<br/>TUMB!
                   </h3>
                   
                   <p className="text-xl font-bold uppercase mb-6 leading-tight">
                     Il giovane non sale la scala. Il giovane mette le <span className="underline decoration-4 decoration-white">ALI AL MOTORE</span>.
                   </p>

                   <div className="bg-black text-[#ff2a00] inline-block px-4 py-2 text-lg font-mono transform rotate-2">
                     SIAMO NOI L’INCENDIO DEL FUTURO!
                   </div>
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PoemAnalysis;