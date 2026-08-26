import { marqueeWords } from "../../data/site";

export default function Marquee() {
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <section
      id="marquee"
      data-testid="marquee-section"
      className="border-y hairline bg-[#050b14] py-5 overflow-hidden"
    >
      <div className="flex whitespace-nowrap marquee-track">
        <div className="flex shrink-0 animate-marquee items-center">
          {row.map((w, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-8 text-sm font-display font-medium tracking-[0.22em] uppercase text-white/70">
                {w}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#3fb8c4]" />
            </span>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee items-center"
          aria-hidden="true"
        >
          {row.map((w, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-8 text-sm font-display font-medium tracking-[0.22em] uppercase text-white/70">
                {w}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#3fb8c4]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
