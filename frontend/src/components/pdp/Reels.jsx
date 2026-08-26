import React, { useRef, useState } from 'react';
import { Play, Heart, MessageCircle, ChevronLeft, ChevronRight, X, Instagram } from 'lucide-react';
import { reels } from '../../mock/mock';

const Reels = () => {
  const scroller = useRef(null);
  const [active, setActive] = useState(null);

  const scrollBy = (dir) => {
    if (!scroller.current) return;
    const amount = scroller.current.clientWidth * 0.8;
    scroller.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-ng-cyan font-display font-bold text-sm tracking-widest uppercase flex items-center gap-2"><Instagram size={16} /> @ngearsafe · reels</p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ng-navy uppercase leading-[1.05] mt-3">In the wild</h2>
          <p className="mt-3 text-ng-ink/70 text-[15px] max-w-lg">Real people, real routines — see how NG Root Revive fits into everyday self-care. Swipe through and tap to play.</p>
        </div>
        <div className="hidden md:flex gap-2">
          <button onClick={() => scrollBy(-1)} aria-label="Previous" className="w-11 h-11 rounded-full border-2 border-ng-navy text-ng-navy flex items-center justify-center hover:bg-ng-navy hover:text-white transition-colors"><ChevronLeft size={20} /></button>
          <button onClick={() => scrollBy(1)} aria-label="Next" className="w-11 h-11 rounded-full border-2 border-ng-navy text-ng-navy flex items-center justify-center hover:bg-ng-navy hover:text-white transition-colors"><ChevronRight size={20} /></button>
        </div>
      </div>

      <div ref={scroller} className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
        {reels.map((r) => (
          <button
            key={r.id}
            onClick={() => setActive(r)}
            className="group relative shrink-0 snap-start w-[240px] md:w-[280px] aspect-[9/16] rounded-2xl overflow-hidden bg-ng-navy text-left"
          >
            <img src={r.image} alt={r.caption} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-ng-navy/85 via-ng-navy/10 to-transparent" />
            <span className="absolute top-3 left-3 bg-white/15 backdrop-blur text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">{r.tag}</span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 text-ng-navy flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play size={22} className="fill-ng-navy translate-x-0.5" />
            </span>
            <div className="absolute bottom-0 inset-x-0 p-4">
              <p className="text-white text-sm font-medium leading-snug">{r.caption}</p>
              <div className="mt-2 flex items-center gap-4 text-white/85 text-xs">
                <span className="flex items-center gap-1"><Heart size={13} className="fill-white/85" /> {r.likes}</span>
                <span className="flex items-center gap-1"><MessageCircle size={13} /> {r.comments}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div onClick={() => setActive(null)} className="fixed inset-0 z-50 bg-ng-navy/90 backdrop-blur flex items-center justify-center p-4">
          <button className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors" aria-label="Close"><X size={22} /></button>
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-[400px] aspect-[9/16] rounded-2xl overflow-hidden bg-black">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={active.caption}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Reels;
