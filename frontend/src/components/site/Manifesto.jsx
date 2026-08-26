import { useState } from "react";
import { motion } from "framer-motion";
import { manifesto } from "../../data/site";
import { Reveal, MaskLine } from "./Reveal";

export default function Manifesto() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="manifesto"
      data-testid="manifesto-section"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow mb-4">The manifesto</p>
          </Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">
            <MaskLine>Why</MaskLine>
            <MaskLine delay={0.08}>Open</MaskLine>
            <MaskLine delay={0.16} className="text-[#3fb8c4]">
              Ear?
            </MaskLine>
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xs text-white/60">
              A safer, more natural way to listen — engineered with ENT
              specialists, built for real life.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          {manifesto.map((m, i) => (
            <motion.div
              key={m.no}
              data-testid={`manifesto-row-${m.no}`}
              onMouseEnter={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`group grid grid-cols-[auto_1fr] items-start gap-6 border-b hairline py-8 transition-colors duration-500 md:gap-10 ${
                active === i ? "" : ""
              }`}
            >
              <span
                className={`font-display text-4xl md:text-6xl font-black transition-all duration-500 ${
                  active === i ? "text-[#3fb8c4]" : "stroke-text"
                }`}
              >
                {m.no}
              </span>
              <div className="pt-1">
                <h3
                  className={`font-display text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300 ${
                    active === i ? "text-white" : "text-white/70"
                  }`}
                >
                  {m.title}
                </h3>
                <motion.p
                  initial={false}
                  animate={{
                    opacity: active === i ? 1 : 0.55,
                  }}
                  className="mt-3 max-w-xl text-white/55"
                >
                  {m.body}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
