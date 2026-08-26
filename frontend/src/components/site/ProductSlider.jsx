import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductSlider({ products, testId = "product-slider" }) {
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
    <div className="relative" data-testid={testId}>
      <div className="overflow-hidden grab-cursor" ref={emblaRef}>
        <div className="flex gap-5 md:gap-6">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="min-w-0 shrink-0 basis-[72%] sm:basis-[45%] lg:basis-[30%] xl:basis-[23.5%]"
            >
              <ProductCard product={p} index={i} animate={false} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          data-testid={`${testId}-prev`}
          className="grid h-11 w-11 place-items-center rounded-full border hairline text-[#0f2a44] transition-all duration-300 enabled:hover:border-[#3fb8c4] enabled:hover:text-[#3fb8c4] disabled:opacity-25"
          aria-label="Previous"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          data-testid={`${testId}-next`}
          className="grid h-11 w-11 place-items-center rounded-full border hairline text-[#0f2a44] transition-all duration-300 enabled:hover:border-[#3fb8c4] enabled:hover:text-[#3fb8c4] disabled:opacity-25"
          aria-label="Next"
        >
          <ArrowRight size={18} />
        </button>
        <span className="ml-2 text-xs uppercase tracking-[0.2em] text-[#0f2a44]/35">
          Swipe
        </span>
      </div>
    </div>
  );
}
