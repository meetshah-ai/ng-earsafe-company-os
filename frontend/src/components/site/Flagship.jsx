import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { flagshipProducts } from "../../data/site";
import { Reveal, MaskLine } from "./Reveal";

function ProductCard({ p, index }) {
  return (
    <motion.a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      data-testid={`product-card-${p.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border hairline bg-gradient-to-b from-[#eef2f6] to-[#d5dde6]">
        {/* display-case spotlight */}
        <div className="absolute left-1/2 top-0 h-40 w-64 -translate-x-1/2 rounded-full bg-white/70 blur-2xl opacity-80" />
        {p.badge && (
          <span className="absolute left-4 top-4 z-20 rounded-full bg-[#0f2a44] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#3fb8c4]">
            {p.badge}
          </span>
        )}
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="relative z-10 h-full w-full object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-x-4 bottom-4 z-20 flex translate-y-3 items-center justify-between rounded-full border hairline bg-[#050b14]/70 px-5 py-3 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
            View product
          </span>
          <ArrowUpRight size={16} className="text-[#3fb8c4]" />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-1">
        <p className="eyebrow !text-white/40">{p.tagline}</p>
        <h3 className="font-display text-xl font-semibold tracking-tight text-white">
          {p.name}
        </h3>
        <div className="mt-1 flex items-center gap-3">
          <span className="text-lg font-semibold text-[#3fb8c4]">
            {p.price}
          </span>
          <span className="text-sm text-white/40 line-through">{p.mrp}</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Flagship() {
  return (
    <section
      id="flagship"
      data-testid="flagship-section"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">The flagship range</p>
            </Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">
              <MaskLine>The Open-Ear</MaskLine>
              <MaskLine delay={0.08} className="text-[#3fb8c4]">
                Revolution
              </MaskLine>
            </h2>
          </div>
          <Reveal delay={0.15}>
            <a
              href="https://ngearsafe.com/collections/all"
              target="_blank"
              rel="noreferrer"
              data-testid="flagship-viewall"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
            >
              View all products
              <span className="grid h-9 w-9 place-items-center rounded-full border hairline transition-colors duration-300 group-hover:border-[#3fb8c4] group-hover:bg-[#3fb8c4] group-hover:text-[#050b14]">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {flagshipProducts.map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
