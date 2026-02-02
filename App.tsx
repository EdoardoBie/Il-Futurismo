import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from './services/animationService';

import Background3D from './components/Background3D';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Biography from './components/Biography';
import PoemAnalysis from './components/PoemAnalysis';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import VelocityBreak from './components/VelocityBreak';
import Cinema from './components/Cinema';

const App: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial loading simulation
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.5, // Slower duration for more "weight"
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    // Update global skew based on velocity
    const update = (time: number) => {
      lenis.raf(time);
      
      // Calculate skew based on velocity
      const velocity = lenis.velocity;
      // Clamp skew
      const skew = Math.max(-3, Math.min(3, velocity * 0.1));

      if (scrollContainerRef.current) {
        // Apply skew transform to the main content wrapper
        gsap.set(scrollContainerRef.current, {
          skewY: skew,
          transformOrigin: "center center",
          overwrite: true
        });
      }

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#ff2a00] flex items-center justify-center z-50">
        <div className="text-center">
          <h1 className="text-6xl md:text-9xl font-black uppercase text-white animate-pulse">
            Loading<br/>Machine
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-[#f2eee3] text-[#0a0a0a] overflow-hidden selection:bg-[#ff2a00] selection:text-white">
      
      {/* 3D Background - Fixed behind content */}
      <Background3D />

      {/* Main Content Wrapper - Subject to Skew */}
      <div ref={scrollContainerRef} id="scroll-content" className="relative z-10 w-full will-change-transform origin-center transition-opacity duration-300">
        
        <Hero />
        
        {/* New Manifesto Section */}
        <Manifesto />
        
        {/* REPLACED: Quote Break with Kinetic VelocityBreak */}
        <VelocityBreak />

        {/* NEW: Cinema Video Section */}
        <Cinema />

        {/* New Biography Section */}
        <Biography />

        {/* Art Analysis Section */}
        <PoemAnalysis />

        {/* IMMERSIVE BREAK SECTION - The 3D Explosion Trigger */}
        <section id="immersive-break" className="h-[250vh] w-full relative flex items-center justify-center pointer-events-none">
             <div className="sticky top-1/2 -translate-y-1/2 text-center opacity-0 trigger-text">
                <h2 className="text-[12vw] font-black uppercase text-black mix-blend-overlay animate-pulse">
                  CHAOS
                </h2>
             </div>
        </section>

        {/* Timeline Section */}
        <Timeline />
        
        {/* Gallery Section */}
        <Gallery />

        {/* Footer */}
        <footer className="bg-black text-[#f2eee3] pt-24 pb-12 px-4 md:px-12 border-t-8 border-[#ff2a00]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
             <div>
                <h2 className="text-[10vw] leading-none font-black uppercase text-[#ff2a00] hover:text-white transition-colors duration-300">Future</h2>
                <h2 className="text-[10vw] leading-none font-black uppercase opacity-50">Is Now</h2>
             </div>
             
             <div className="mt-10 md:mt-0 flex flex-col gap-4 text-right">
                <a href="#" className="font-mono text-xl uppercase hover:text-[#ff2a00] hover:underline">Manifesto</a>
                <a href="#" className="font-mono text-xl uppercase hover:text-[#ff2a00] hover:underline">Works</a>
                <a href="#" className="font-mono text-xl uppercase hover:text-[#ff2a00] hover:underline">Contact</a>
             </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8">
            <p className="font-mono text-xs opacity-50 uppercase tracking-widest">© 1909 - 2024 Futurism Archive.</p>
            <p className="font-mono text-sm uppercase mt-4 md:mt-0 text-[#ff2a00]">
              Developed by <span className="font-bold text-white">Edoardo Biestro</span>
            </p>
          </div>
        </footer>

      </div>
      
      {/* Noise Overlay for texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.08] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

    </div>
  );
};

export default App;