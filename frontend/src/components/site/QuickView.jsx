import { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, ArrowUpRight } from "lucide-react";

const QuickViewContext = createContext(null);

export function useQuickView() {
  return useContext(QuickViewContext);
}

export function QuickViewProvider({ children }) {
  const [product, setProduct] = useState(null);

  const open = useCallback((p) => setProduct(p), []);
  const close = useCallback(() => setProduct(null), []);

  return (
    <QuickViewContext.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {product && <QuickViewModal product={product} onClose={close} />}
      </AnimatePresence>
    </QuickViewContext.Provider>
  );
}

function QuickViewModal({ product, onClose }) {
  const light = product.stage === "light";
  return (
    <motion.div
      data-testid="quickview-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] grid place-items-center bg-[#020509]/80 backdrop-blur-md p-4 md:p-8"
    >
      <motion.div
        data-testid="quickview-modal"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border hairline bg-[#0a1526] md:grid-cols-2"
      >
        <button
          onClick={onClose}
          data-testid="quickview-close"
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border hairline bg-[#050b14]/60 text-white backdrop-blur transition-colors duration-300 hover:border-[#3fb8c4] hover:text-[#3fb8c4]"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div
          className={`relative aspect-square overflow-hidden ${
            light
              ? "bg-gradient-to-b from-[#eef2f6] to-[#d5dde6]"
              : "bg-[#070f1b]"
          }`}
        >
          {light && (
            <div className="absolute left-1/2 top-0 h-40 w-64 -translate-x-1/2 rounded-full bg-white/70 blur-2xl" />
          )}
          <img
            src={product.image}
            alt={product.name}
            className={`relative z-10 h-full w-full ${
              light ? "object-contain p-8" : "object-cover"
            }`}
          />
        </div>

        <div className="flex flex-col p-8 md:p-10">
          {product.badge && (
            <span className="mb-4 w-fit rounded-full border border-[#3fb8c4]/40 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#3fb8c4]">
              {product.badge}
            </span>
          )}
          <p className="eyebrow !text-white/40">{product.tagline}</p>
          <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
            {product.name}
          </h3>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-2xl font-semibold text-[#3fb8c4]">
              {product.price}
            </span>
            <span className="text-white/40 line-through">{product.mrp}</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/65">
            {product.description}
          </p>

          <ul className="mt-6 grid gap-2.5">
            {product.specs?.map((s) => (
              <li key={s} className="flex items-center gap-3 text-sm text-white/75">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#3fb8c4]/15 text-[#3fb8c4]">
                  <Check size={12} />
                </span>
                {s}
              </li>
            ))}
          </ul>

          <a
            href={product.href}
            target="_blank"
            rel="noreferrer"
            data-testid="quickview-cta"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#3fb8c4] px-8 py-4 text-sm font-semibold text-[#050b14] transition-colors duration-300 hover:bg-white"
          >
            View on store
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
