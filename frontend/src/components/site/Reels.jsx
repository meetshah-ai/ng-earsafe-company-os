import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Play, Heart, MessageCircle, ArrowLeft, ArrowRight, Instagram } from "lucide-react";
import { reels } from "../../data/site";
import { Reveal, MaskLine } from "./Reveal";

function ReelCard({ reel }) {
  return (
    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noreferrer"
      data-testid={`reel-card-${reel.id}`}
      className="group relative block aspect-[9/16] overflow-hidden rounded-3xl border hairline card-shadow"
    >
      <img
        src={reel.image}
        alt={reel.caption}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a44]/85 via-[#0f2a44]/10 to-[#0f2a44]/20" />

      {/* play */}
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid h-16 w-16 place-items-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-[#3fb8c4] group-hover:text-[#052832]">
          <Play size={22} fill="currentColor" />
        </span>
      </div>

      {/* top tag */}
      <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white backdrop-blur">
        {reel.tag}
      </span>

      {/* bottom meta */}
      <div className="absolute inset-x-4 bottom-4">
        <p className="font-display text-lg font-semibold leading-tight text-white">
          {reel.caption}
        </p>
        <div className="mt-3 flex items-center gap-5 text-white/85">
          <span className="flex items-center gap-1.5 text-xs">
            <Heart size={14} fill="currentColor" className="text-[#3fb8c4]" />
            {reel.likes}
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <MessageCircle size={14} />
            {reel.comments}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Reels() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback((api) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      id="reels"
      data-testid="reels-section"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow mb-4 flex items-center gap-2">
                <Instagram size={14} /> @ngearsafe · reels
              </p>
            </Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-[#0f2a44]">
              <MaskLine>In The</MaskLine>
              <MaskLine delay={0.08} className="text-[#3fb8c4]">
                Wild
              </MaskLine>
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-md text-[#0f2a44]/65">
                Real people, real movement — see how NG EarSafe keeps you tuned
                in without tuning out.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="flex items-center gap-3">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
                data-testid="reels-prev"
                className="grid h-11 w-11 place-items-center rounded-full border hairline text-[#0f2a44] transition-all duration-300 enabled:hover:border-[#3fb8c4] enabled:hover:text-[#3fb8c4] disabled:opacity-25"
                aria-label="Previous"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canNext}
                data-testid="reels-next"
                className="grid h-11 w-11 place-items-center rounded-full border hairline text-[#0f2a44] transition-all duration-300 enabled:hover:border-[#3fb8c4] enabled:hover:text-[#3fb8c4] disabled:opacity-25"
                aria-label="Next"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>

        <div className="overflow-hidden grab-cursor" ref={emblaRef}>
          <div className="flex gap-5 md:gap-6">
            {reels.map((r) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="min-w-0 shrink-0 basis-[68%] sm:basis-[40%] lg:basis-[24%] xl:basis-[19%]"
              >
                <ReelCard reel={r} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
