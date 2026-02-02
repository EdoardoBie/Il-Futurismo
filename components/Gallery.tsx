import React from 'react';
import { ARTWORKS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-12 bg-[#f2eee3]">
      <div className="mb-20">
        <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-[#0a0a0a]">
          Aggressive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a00] to-black">Motion</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {ARTWORKS.map((art, index) => (
          <div 
            key={art.id} 
            className={`group relative ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
          >
            <div className="relative overflow-hidden border-4 border-black bg-black">
              {/* Image Container with Glitch CSS */}
              <div className="relative h-[600px] w-full overflow-hidden filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-linear">
                <img 
                  src={art.imgUrl} 
                  alt={art.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:skew-x-3"
                />
                
                {/* Glitch Overlay Effect */}
                <div className="absolute inset-0 bg-[#ff2a00] opacity-0 group-hover:opacity-20 mix-blend-color-burn transition-opacity duration-100"></div>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-end border-b-2 border-black pb-2">
              <div>
                <h3 className="text-3xl font-bold uppercase">{art.title}</h3>
                <p className="text-sm font-mono text-[#ff2a00]">{art.artist}</p>
              </div>
              <span className="text-5xl font-bold opacity-30">{art.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;