import { marqueeWords } from "../../data/site";

export default function Marquee() {
  const row = [...marqueeWords, ...marqueeWords];
  const Track = ({ hidden }) => (
    <div
      className="flex shrink-0 animate-marquee items-center"
      aria-hidden={hidden ? "true" : undefined}
    >
      {row.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="mx-8 text-sm font-display font-medium tracking-[0.22em] uppercase text-[#0f2a44]/70">
            {w}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#3fb8c4]" />
        </span>
      ))}
    </div>
  );

  return (
    <section
      id="marquee"
      data-testid="marquee-section"
      className="border-y hairline bg-white py-5 overflow-hidden marquee-track"
    >
      <div className="flex whitespace-nowrap">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}
