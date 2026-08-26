import { motion } from "framer-motion";
import { Eye, Heart } from "lucide-react";
import { useQuickView } from "./QuickView";
import { useWishlist } from "./Wishlist";

export default function ProductCard({ product, index = 0, animate = true }) {
  const { open } = useQuickView();
  const { isSaved, toggle } = useWishlist();
  const light = product.stage === "light";
  const saved = isSaved(product.id);

  const Wrapper = animate ? motion.div : "div";
  const motionProps = animate
    ? {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: {
          duration: 0.7,
          delay: index * 0.06,
          ease: [0.22, 1, 0.36, 1],
        },
      }
    : {};

  return (
    <Wrapper
      {...motionProps}
      data-testid={`product-card-${product.id}`}
      onClick={() => open(product)}
      className="group block cursor-pointer"
    >
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-2xl border hairline ${
          light
            ? "bg-gradient-to-b from-[#eef2f6] to-[#d5dde6]"
            : "bg-[#0a1526]"
        }`}
      >
        {light && (
          <div className="absolute left-1/2 top-0 h-40 w-64 -translate-x-1/2 rounded-full bg-white/70 blur-2xl opacity-80" />
        )}
        {product.badge && (
          <span
            className={`absolute left-4 top-4 z-20 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] ${
              light
                ? "bg-[#0f2a44] text-[#3fb8c4]"
                : "border border-[#3fb8c4]/40 bg-[#050b14]/60 text-[#3fb8c4] backdrop-blur"
            }`}
          >
            {product.badge}
          </span>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggle(product);
          }}
          data-testid={`wishlist-toggle-${product.id}`}
          aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
          className={`absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border backdrop-blur transition-all duration-300 ${
            saved
              ? "border-[#3fb8c4] bg-[#3fb8c4] text-[#050b14]"
              : "hairline bg-[#050b14]/50 text-white hover:border-[#3fb8c4] hover:text-[#3fb8c4]"
          }`}
        >
          <Heart size={16} fill={saved ? "currentColor" : "none"} />
        </button>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`relative z-10 h-full w-full transition-transform duration-700 ease-out group-hover:scale-105 ${
            light ? "object-contain p-8" : "object-cover"
          }`}
        />
        {!light && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/50 to-transparent" />
        )}
        <div className="absolute inset-x-4 bottom-4 z-20 flex translate-y-3 items-center justify-center gap-2 rounded-full border hairline bg-[#050b14]/70 px-5 py-3 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Eye size={15} className="text-[#3fb8c4]" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
            Quick view
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1">
        <p className="eyebrow !text-white/40">{product.tagline}</p>
        <h3 className="font-display text-lg font-semibold tracking-tight text-white">
          {product.name}
        </h3>
        <div className="mt-1 flex items-center gap-3">
          <span className="font-semibold text-[#3fb8c4]">{product.price}</span>
          <span className="text-sm text-white/40 line-through">
            {product.mrp}
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
