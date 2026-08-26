import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const ProductGallery = ({ images, badges = [], activeExternal }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (typeof activeExternal === 'number') setActive(activeExternal);
  }, [activeExternal]);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  return (
    <div className="lg:sticky lg:top-24">
      <div className="relative group rounded-2xl overflow-hidden bg-white border border-ng-sand aspect-square">
        {badges.map((b) => (
          <span key={b} className="absolute z-10 top-4 left-4 bg-ng-navy text-white text-[11px] font-semibold tracking-widest px-3 py-1.5 rounded-full">
            {b}
          </span>
        ))}
        <span className="absolute z-10 top-4 right-4 bg-white/80 backdrop-blur text-ng-navy rounded-full p-2 border border-ng-sand">
          <ZoomIn size={16} />
        </span>
        <img
          src={images[active]}
          alt={`Product view ${active + 1}`}
          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
        <button onClick={prev} aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-ng-navy rounded-full p-2 shadow-sm border border-ng-sand opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-ng-navy rounded-full p-2 shadow-sm border border-ng-sand opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-6 gap-2.5">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setActive(i)}
            className={`aspect-square rounded-xl overflow-hidden bg-white border-2 transition-all ${active === i ? 'border-ng-navy' : 'border-ng-sand hover:border-ng-cyan'}`}
            aria-label={`View image ${i + 1}`}
          >
            <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-contain p-1.5" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
