import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { stats } from "../../data/site";
import { Reveal, MaskLine } from "./Reveal";

const LIFESTYLE =
  "https://images.unsplash.com/photo-1718382341267-aef8a9e4ecef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400";

export default function DidYouKnow() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      id="story"
      ref={ref}
      data-testid="story-section"
      className="relative py-24 md:py-32 bg-[#ece7dd] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Reveal>
            <p className="eyebrow mb-4">Did you know?</p>
          </Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-[#0f2a44]">
            <MaskLine>Listen</MaskLine>
            <MaskLine delay={0.08}>without</MaskLine>
            <MaskLine delay={0.16} className="text-[#3fb8c4]">
              trade-offs
            </MaskLine>
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div data-testid={`stat-${i}`}>
                  <p className="font-display text-4xl md:text-5xl font-black text-[#0f2a44]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-[#0f2a44]/55">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="relative" y={40}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border hairline card-shadow">
            <motion.img
              src={LIFESTYLE}
              alt="Open-ear listening outdoors"
              style={{ y: imgY, scale: 1.2 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a44]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-[#0f2a44]/50 p-5 backdrop-blur-md">
              <p className="text-sm text-white/90">
                &ldquo;Stay aware of your surroundings — traffic, teammates and
                the world — while your soundtrack plays on.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
