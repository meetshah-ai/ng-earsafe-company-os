import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { catalog } from "../../data/site";
import ProductSlider from "./ProductSlider";
import { Reveal, MaskLine } from "./Reveal";

export default function CategoryShowcase() {
  const scrollTo = (id) => {
    const el = document.getElementById(`cat-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="categories"
      data-testid="categories-section"
      className="relative py-24 md:py-32 bg-[#070f1b]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* header */}
        <div className="mb-10 max-w-2xl">
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

        {/* category pills */}
        <Reveal delay={0.1}>
          <div className="mb-16 flex flex-wrap gap-3">
            {catalog.map((c) => (
              <button
                key={c.id}
                onClick={() => scrollTo(c.id)}
                data-testid={`category-pill-${c.id}`}
                className="rounded-full border hairline px-5 py-2.5 text-sm text-white/75 transition-colors duration-300 hover:border-[#3fb8c4] hover:text-white"
              >
                {c.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* category slider rows */}
        <div className="flex flex-col gap-20 md:gap-28">
          {catalog.map((c) => (
            <div key={c.id} id={`cat-${c.id}`} data-testid={`category-row-${c.id}`}>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="eyebrow mb-2"
                  >
                    Top selling
                  </motion.p>
                  <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
                    {c.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-white/55">{c.blurb}</p>
                </div>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`category-viewall-${c.id}`}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-white/75 hover:text-white"
                >
                  Shop {c.name}
                  <span className="grid h-9 w-9 place-items-center rounded-full border hairline transition-colors duration-300 group-hover:border-[#3fb8c4] group-hover:bg-[#3fb8c4] group-hover:text-[#050b14]">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </div>

              <ProductSlider products={c.products} testId={`slider-${c.id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
