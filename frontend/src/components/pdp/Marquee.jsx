import React from 'react';

const Marquee = ({ items }) => {
  const loop = [...items, ...items];
  return (
    <div className="bg-ng-navy text-white py-3.5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display font-bold text-sm md:text-base uppercase tracking-widest px-6">{item}</span>
            <span className="text-ng-cyan text-lg">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
