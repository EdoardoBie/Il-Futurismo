import React, { useRef, useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from '../services/animationService';
import { HISTORY_CONTENT } from '../constants';

const Biography: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Section Headers
      const headers = gsap.utils.toArray('.history-header');
      headers.forEach((header: any) => {
        gsap.fromTo(header, 
          { opacity: 0.2, x: -20 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.5,
            scrollTrigger: {
              trigger: header,
              start: "top center",
              end: "bottom center",
              toggleActions: "play reverse play reverse"
            }
          }
        );
      });

      // Animate Index Items
      gsap.from('.index-item', {
        x: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
            trigger: '#table-of-contents',
            start: "top 80%"
        }
      });

      // Animate Ideology Cards
      gsap.from('.ideology-card', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '#ideology-grid',
          start: "top 80%"
        }
      });

      // Legacy Fade In
      gsap.from('#legacy-content', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: '#legacy-section',
            start: "top 70%"
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const chapters = [
      { id: 'chapter-marinetti', label: '01. L\'ARTEFICE' },
      { id: 'chapter-ideology', label: '02. IDEOLOGIA' },
      { id: 'chapter-forms', label: '03. LE FORME' },
      { id: 'chapter-history', label: '04. STORIA' },
      { id: 'legacy-section', label: '05. EREDITÀ' },
  ];

  return (
    <section ref={containerRef} className="relative bg-[#0a0a0a] text-[#f2eee3] min-h-screen pb-32">
      
      {/* Intro & Index Block */}
      <div className="container mx-auto px-4 md:px-12 py-32 border-b border-[#333]">
        <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Intro Text */}
            <div className="lg:w-2/3">
                <span className="text-[#ff2a00] font-mono tracking-widest uppercase mb-4 block">
                    {HISTORY_CONTENT.intro.subtitle}
                </span>
                <h2 className="text-6xl md:text-8xl font-black uppercase leading-none mb-12">
                    {HISTORY_CONTENT.intro.title}
                </h2>
                {HISTORY_CONTENT.intro.text.map((p, i) => (
                    <p key={i} className="serif-font text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed text-justify">
                        {p}
                    </p>
                ))}
            </div>

            {/* Table of Contents (Index) */}
            <div id="table-of-contents" className="lg:w-1/3 bg-[#111] p-8 border border-[#333] h-fit sticky top-32">
                <h3 className="font-mono text-[#ff2a00] text-sm uppercase tracking-widest mb-8 border-b border-[#333] pb-4">
                    Indice Analitico
                </h3>
                <ul className="flex flex-col gap-4">
                    {chapters.map((chapter, i) => (
                        <li key={i} className="index-item group cursor-pointer" onClick={() => scrollToSection(chapter.id)}>
                            <div className="flex items-center justify-between hover:pl-2 transition-all duration-300">
                                <span className="text-2xl font-bold text-gray-500 group-hover:text-white transition-colors uppercase">
                                    {chapter.label}
                                </span>
                                <span className="text-[#ff2a00] opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>

      {/* 1. MARINETTI SECTION */}
      <div id="chapter-marinetti" className="container mx-auto px-4 md:px-12 py-32 border-b border-[#333] scroll-mt-20">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            <div className="md:w-1/3 history-header md:sticky md:top-32 h-fit">
                <span className="text-8xl font-black text-[#222] absolute -top-10 -left-4 -z-10 select-none">01</span>
                <h3 className="text-4xl md:text-5xl font-bold uppercase mb-2">{HISTORY_CONTENT.sections[0].title}</h3>
                <p className="text-[#ff2a00] font-mono">{HISTORY_CONTENT.sections[0].subtitle}</p>
            </div>
            <div className="md:w-2/3">
                <div className="mb-12 relative h-[60vh] overflow-hidden border-2 border-[#ff2a00] group">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Filippo_Tommaso_Marinetti.jpg" 
                        alt="Marinetti" 
                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-[#ff2a00] mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity"></div>
                </div>
                {HISTORY_CONTENT.sections[0].content?.map((p, i) => (
                    <p key={i} className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6 text-justify">
                        {p}
                    </p>
                ))}
            </div>
        </div>
      </div>

      {/* 2. IDEOLOGY SECTION */}
      <div id="chapter-ideology" className="container mx-auto px-4 md:px-12 py-32 border-b border-[#333] scroll-mt-20">
         <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            <div className="md:w-1/3 history-header md:sticky md:top-32 h-fit">
                <span className="text-8xl font-black text-[#222] absolute -top-10 -left-4 -z-10 select-none">02</span>
                <h3 className="text-4xl md:text-5xl font-bold uppercase mb-2">{HISTORY_CONTENT.sections[1].title}</h3>
                <p className="text-[#ff2a00] font-mono">{HISTORY_CONTENT.sections[1].subtitle}</p>
            </div>
            <div className="md:w-2/3">
                <p className="text-2xl text-white mb-12 italic border-l-4 border-[#ff2a00] pl-6 py-2">
                    {HISTORY_CONTENT.sections[1].intro}
                </p>
                <div id="ideology-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {HISTORY_CONTENT.sections[1].points?.map((point, i) => (
                        <div key={i} className="ideology-card p-8 bg-[#151515] border border-[#333] hover:border-[#ff2a00] transition-colors duration-300 flex flex-col">
                            <h4 className="text-2xl font-bold uppercase mb-4 text-[#f2eee3]">{point.title}</h4>
                            <p className="text-base text-gray-400 serif-font leading-relaxed flex-grow">{point.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
         </div>
      </div>

      {/* 3. ART FORMS SECTION */}
      <div id="chapter-forms" className="container mx-auto px-4 md:px-12 py-32 border-b border-[#333] scroll-mt-20">
         <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            <div className="md:w-1/3 history-header md:sticky md:top-32 h-fit">
                <span className="text-8xl font-black text-[#222] absolute -top-10 -left-4 -z-10 select-none">03</span>
                <h3 className="text-4xl md:text-5xl font-bold uppercase mb-2">{HISTORY_CONTENT.sections[2].title}</h3>
                <p className="text-[#ff2a00] font-mono">{HISTORY_CONTENT.sections[2].subtitle}</p>
            </div>
            <div className="md:w-2/3">
                <p className="text-xl text-gray-400 mb-12">
                   {HISTORY_CONTENT.sections[2].intro}
                </p>
                <div className="flex flex-col gap-12">
                    {HISTORY_CONTENT.sections[2].items?.map((item, i) => (
                        <div key={i} className="group border-b border-[#333] pb-12 hover:border-white transition-colors duration-500">
                            <span className="font-mono text-[#ff2a00] text-sm uppercase tracking-widest mb-2 block">{item.cat}</span>
                            <h4 className="text-3xl md:text-5xl font-black uppercase text-white mb-4">
                                {item.title}
                            </h4>
                            <p className="text-lg text-gray-400 max-w-2xl group-hover:text-white transition-colors">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
         </div>
      </div>

      {/* 4. EVOLUTION SECTION (Comparison) */}
      <div id="chapter-history" className="container mx-auto px-4 md:px-12 pt-32 pb-16 scroll-mt-20">
         <div className="mb-16 text-center max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-bold uppercase mb-4">{HISTORY_CONTENT.evolution.title}</h3>
            <p className="text-[#ff2a00] font-mono mb-8">{HISTORY_CONTENT.evolution.subtitle}</p>
            <p className="text-gray-400 text-lg serif-font">{HISTORY_CONTENT.evolution.intro}</p>
         </div>

         <div id="evolution-table" className="flex flex-col md:flex-row border-t-4 border-white mb-24">
            
            {/* Phase 1 */}
            <div id="evo-left" className="md:w-1/2 p-8 md:p-16 border-b md:border-b-0 md:border-r border-[#333] bg-[#111] hover:bg-[#1a1a1a] transition-colors">
                <div className="mb-8">
                    <h4 className="text-3xl font-black uppercase">{HISTORY_CONTENT.evolution.first.name}</h4>
                    <p className="font-mono text-[#ff2a00] text-xl">{HISTORY_CONTENT.evolution.first.years}</p>
                </div>
                <p className="serif-font text-lg text-gray-300 leading-relaxed text-justify">
                    {HISTORY_CONTENT.evolution.first.desc}
                </p>
            </div>

            {/* Phase 2 */}
            <div id="evo-right" className="md:w-1/2 p-8 md:p-16 bg-[#0f0f0f] hover:bg-[#1a1a1a] transition-colors">
                <div className="mb-8">
                    <h4 className="text-3xl font-black uppercase text-gray-500">{HISTORY_CONTENT.evolution.second.name}</h4>
                    <p className="font-mono text-gray-600 text-xl">{HISTORY_CONTENT.evolution.second.years}</p>
                </div>
                <p className="serif-font text-lg text-gray-500 leading-relaxed text-justify">
                    {HISTORY_CONTENT.evolution.second.desc}
                </p>
            </div>

         </div>

         {/* 5. LEGACY / EREDITÀ SECTION (New) */}
         <div id="legacy-section" className="border-t border-[#333] pt-24 scroll-mt-20">
             <div id="legacy-content" className="max-w-4xl mx-auto text-center">
                 <h4 className="text-3xl font-black uppercase tracking-[0.5em] text-[#ff2a00] mb-8">{HISTORY_CONTENT.evolution.legacy.title}</h4>
                 {HISTORY_CONTENT.evolution.legacy.text.map((p, i) => (
                     <p key={i} className="serif-font text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 last:mb-0">
                         {p}
                     </p>
                 ))}
             </div>
         </div>
         
      </div>

    </section>
  );
};

export default Biography;