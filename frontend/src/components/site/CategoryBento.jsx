import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "../../data/site";
import { Reveal, MaskLine } from "./Reveal";

function CategoryCard({ c, index }) {
  return (
    <motion.a
      href={c.href}
      target="_blank"
      rel="noreferrer"
      data-testid={`category-card-${c.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border hairline ${c.span} ${
        c.tall ? "h-[360px] lg:h-[460px]" : "h-[300px] lg:h-[340px]"
      }`}
    >
      <img
        src={c.image}
        alt={c.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-70 transition-[transform,opacity] duration-[900ms] ease-out group-hover:scale-110 group-hover:opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/20 bg-[#050b14]/40 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
            New
          </span>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-[#3fb8c4] group-hover:bg-[#3fb8c4] group-hover:text-[#050b14]">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <div>
          <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-white">
            {c.name}
          </h3>
          <p className="mt-1 text-sm text-white/60">{c.count}</p>
        </div>
      </div>
    </motion.a>
  );
}

export default function CategoryBento() {
  return (
    <section
      id="categories"
      data-testid="categories-section"
      className="relative py-24 md:py-32 bg-[#070f1b]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-4">The range is growing</p>
          </Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">
            <MaskLine>Beyond</MaskLine>
            <MaskLine delay={0.08} className="text-[#3fb8c4]">
              Audio
            </MaskLine>
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-white/65">
              Same obsession with comfort and craft — now across wearables,
              beauty tech, massagers and everyday accessories for your car and
              phone.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {categories.map((c, i) => (
            <CategoryCard key={c.id} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
