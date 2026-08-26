import { mediaLogos } from "../../data/site";
import { Reveal } from "./Reveal";

export default function MediaLogos() {
  return (
    <section data-testid="media-section" className="py-16 md:py-20 bg-[#f4f1ea]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <Reveal>
          <p className="mb-10 text-center text-xs tracking-[0.28em] uppercase text-[#0f2a44]/40">
            As seen in
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-20">
          {mediaLogos.map((m, i) => (
            <Reveal key={m} delay={i * 0.05}>
              <span className="font-display text-xl md:text-2xl font-semibold text-[#0f2a44]/35 transition-colors duration-300 hover:text-[#0f2a44]/70">
                {m}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
