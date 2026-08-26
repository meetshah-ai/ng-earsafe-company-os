import { ArrowUpRight } from "lucide-react";
import { flagshipProducts } from "../../data/site";
import { Reveal, MaskLine } from "./Reveal";
import ProductCard from "./ProductCard";

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
              <p className="eyebrow mb-4">The flagship range · open-ear audio</p>
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
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
