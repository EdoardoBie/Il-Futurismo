import React, { useRef, useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from '../services/animationService';

const ANALYSIS_POINTS = [
  {
    title: "IL RITMO MECCANICO",
    desc: "La metrica tradizionale è morta, schiacciata dalle ruote del progresso. Il ritmo non è più battito del cuore, ma pistone, biella, ingranaggio. È la cadenza del motore a scoppio che detta la legge della pagina."
  },
  {
    title: "LA SINTASSI DISTRUTTA",
    desc: "Nessun aggettivo per rallentare la corsa. Nessun avverbio per sfumare il senso. Solo verbi all'infinito che corrono come treni merci. La punteggiatura è abolita per lasciare spazio alla velocità pura del pensiero."
  },
  {
    title: "L'ELOGIO DELLA GUERRA",
    desc: "La violenza grafica dei caratteri tipografici rispecchia la pulizia igienica del conflitto. Le lettere esplodono come shrapnel, occupando lo spazio visivo con l'aggressività di un bombardamento aereo."
  }
];

const PoemAnalysis: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.analysis-card');
      
      cards.forEach((card: any) => {
        gsap.fromTo(card, 
          { y: 100, opacity: 0, rotationX: -5 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            ease: "power3.out",
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
    <section ref={containerRef} className="relative py-32 bg-[#1a1a1a] text-[#f2eee3] border-t-8 border-[#ff2a00]">
      {/* Background Grid/Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#555 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        <div className="mb-24 text-center">
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
              ANALISI ESTETICA<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ff2a00] to-red-900">
                TRAGUARDO-ESPLOSIONE
              </span>
            </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Sticky Image */}
          <div className="md:w-1/2">
            <div className="sticky top-[15vh] pb-24 h-auto">
               <div className="relative group perspective-1000">
                  {/* The Poster */}
                  <div className="relative z-10 border-4 border-[#f2eee3] bg-black p-2 shadow-[15px_15px_0px_0px_rgba(255,42,0,0.4)] transform transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-rotate-1 cursor-none">
                    {/* Placeholder for the graphic poem */}
                    <img 
                      src="https://picsum.photos/600/800?grayscale&blur=2" 
                      alt="Traguardo Esplosione Poem" 
                      className="w-full h-auto object-cover filter contrast-125 sepia-[0.5] group-hover:sepia-0 group-hover:contrast-150 transition-all duration-500"
                    />
                    
                    {/* "Dirty" Texture Overlay */}
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none bg-noise"></div>
                  </div>
                  
                  {/* Decorative Elements behind */}
                  <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#ff2a00] -z-10 opacity-40 transform rotate-2"></div>
               </div>
            </div>
          </div>

          {/* Right Column: Scrolling Analysis Cards */}
          <div className="md:w-1/2 flex flex-col pt-12 md:pt-32 pb-32">
             {ANALYSIS_POINTS.map((point, i) => (
                <div 
                  key={i} 
                  className="analysis-card mb-[40vh] last:mb-0 p-8 md:p-12 border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-[#ff2a00]/50 transition-colors duration-500"
                >
                  {/* Decorative number */}
                  <span className="absolute -top-4 -right-4 text-[10rem] font-black text-white/5 z-0 group-hover:text-[#ff2a00]/10 transition-colors duration-500 select-none">
                    0{i + 1}
                  </span>
                  
                  <h3 className="relative z-10 text-3xl md:text-5xl font-black uppercase mb-6 text-[#ff2a00] leading-none">
                    {point.title}
                  </h3>
                  <p className="relative z-10 serif-font text-xl leading-relaxed text-gray-200">
                    {point.desc}
                  </p>
                  
                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#ff2a00] opacity-50"></div>
                </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PoemAnalysis;