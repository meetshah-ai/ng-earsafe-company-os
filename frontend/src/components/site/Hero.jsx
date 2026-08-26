import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { heroProduct } from "../../data/site";

const lineParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } },
};
const lineChild = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const productY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const productScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-[100svh] overflow-hidden pt-28"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full glow-cyan blur-2xl opacity-80" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-[420px] w-[420px] rounded-full bg-[#ece7dd] blur-3xl" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100svh-7rem)]">
        {/* Copy */}
        <motion.div style={{ y: copyY }} className="lg:col-span-6 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="eyebrow mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#3fb8c4]" />
            India&apos;s open-ear pioneers
          </motion.p>

          <motion.h1
            variants={lineParent}
            initial="hidden"
            animate="show"
            className="font-display font-black uppercase leading-[0.92] tracking-tighter text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] text-[#0f2a44]"
          >
            <span className="block overflow-hidden">
              <motion.span variants={lineChild} className="block">
                Hear
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={lineChild} className="block text-[#3fb8c4]">
                Everything.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={lineChild} className="block">
                Feel Nothing.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-[#0f2a44]/65"
          >
            Open-ear audio that leaves your ears free and your senses switched
            on. And now — a whole new range of tech to move, recover and live
            better.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#flagship"
              data-testid="hero-primary-cta"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0f2a44] px-8 py-4 text-sm font-semibold text-white hover:bg-[#3fb8c4] hover:text-[#052832] transition-colors duration-300"
            >
              Shop Open-Ear
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#categories"
              data-testid="hero-secondary-cta"
              className="group inline-flex items-center gap-2 rounded-full border hairline px-8 py-4 text-sm font-medium text-[#0f2a44] hover:border-[#3fb8c4] transition-colors duration-300"
            >
              Explore Beyond Audio
            </a>
          </motion.div>
        </motion.div>

        {/* Product spotlight */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[360px]">
          <motion.div
            style={{ scale: glowScale }}
            className="absolute h-[420px] w-[420px] md:h-[540px] md:w-[540px] rounded-full glow-cyan blur-xl"
          />
          <motion.div
            style={{ y: productY, scale: productScale }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-[86%] max-w-[560px] overflow-hidden rounded-[2rem] border hairline bg-white card-shadow"
          >
            <img
              src={heroProduct.image}
              alt={heroProduct.name}
              className="w-full object-contain"
            />
            <div className="absolute bottom-4 left-4 rounded-full bg-[#0f2a44] px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#3fb8c4]">
              {heroProduct.name}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#marquee"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[0.65rem] tracking-[0.25em] uppercase text-[#0f2a44]/50"
      >
        Scroll to discover
        <ArrowDown size={16} className="animate-bounce text-[#3fb8c4]" />
      </motion.a>
    </section>
  );
}
