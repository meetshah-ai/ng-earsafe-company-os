import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Heart, ArrowUpRight, Trash2 } from "lucide-react";

const WishlistContext = createContext(null);
const STORAGE_KEY = "ng-wishlist";

export function useWishlist() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      /* ignore */
    }
  }, [items]);

  const isSaved = useCallback(
    (id) => items.some((p) => p.id === id),
    [items]
  );

  const toggle = useCallback((product) => {
    setItems((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [
            {
              id: product.id,
              name: product.name,
              tagline: product.tagline,
              price: product.price,
              mrp: product.mrp,
              image: product.image,
              stage: product.stage,
              href: product.href,
            },
            ...prev,
          ]
    );
  }, []);

  const remove = useCallback((id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <WishlistContext.Provider
      value={{
        items,
        count: items.length,
        isSaved,
        toggle,
        remove,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
      <WishlistDrawer
        open={drawerOpen}
        items={items}
        onClose={closeDrawer}
        onRemove={remove}
      />
    </WishlistContext.Provider>
  );
}

function WishlistDrawer({ open, items, onClose, onRemove }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-testid="wishlist-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[110] bg-[#020509]/70 backdrop-blur-sm"
        >
          <motion.aside
            data-testid="wishlist-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l hairline bg-[#0a1526]"
          >
            <div className="flex items-center justify-between border-b hairline px-6 py-5">
              <div className="flex items-center gap-2">
                <Heart size={18} className="text-[#3fb8c4]" />
                <h3 className="font-display text-lg font-semibold">
                  Your Wishlist
                </h3>
                <span className="text-sm text-white/40">({items.length})</span>
              </div>
              <button
                onClick={onClose}
                data-testid="wishlist-close"
                className="grid h-10 w-10 place-items-center rounded-full border hairline text-white transition-colors duration-300 hover:border-[#3fb8c4] hover:text-[#3fb8c4]"
                aria-label="Close wishlist"
              >
                <X size={18} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full border hairline text-white/40">
                  <Heart size={26} />
                </div>
                <p className="font-display text-xl font-semibold">
                  No favourites yet
                </p>
                <p className="max-w-xs text-sm text-white/55">
                  Tap the heart on any product to save it here and revisit it
                  anytime.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 rounded-full border border-[#3fb8c4] px-6 py-3 text-sm font-medium text-[#3fb8c4] transition-colors duration-300 hover:bg-[#3fb8c4] hover:text-[#050b14]"
                >
                  Continue browsing
                </button>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <div className="flex flex-col gap-4">
                  {items.map((p) => {
                    const light = p.stage === "light";
                    return (
                      <div
                        key={p.id}
                        data-testid={`wishlist-item-${p.id}`}
                        className="flex gap-4 rounded-2xl border hairline bg-[#070f1b] p-3"
                      >
                        <div
                          className={`h-24 w-24 shrink-0 overflow-hidden rounded-xl ${
                            light
                              ? "bg-gradient-to-b from-[#eef2f6] to-[#d5dde6]"
                              : "bg-[#0a1526]"
                          }`}
                        >
                          <img
                            src={p.image}
                            alt={p.name}
                            className={`h-full w-full ${
                              light ? "object-contain p-2" : "object-cover"
                            }`}
                          />
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col">
                          <p className="truncate text-sm font-semibold text-white">
                            {p.name}
                          </p>
                          <p className="mt-0.5 truncate text-xs text-white/45">
                            {p.tagline}
                          </p>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="text-sm font-semibold text-[#3fb8c4]">
                              {p.price}
                            </span>
                            <span className="text-xs text-white/40 line-through">
                              {p.mrp}
                            </span>
                          </div>
                          <div className="mt-auto flex items-center gap-4 pt-2">
                            <a
                              href={p.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-[#3fb8c4] transition-colors duration-200"
                            >
                              View <ArrowUpRight size={13} />
                            </a>
                            <button
                              onClick={() => onRemove(p.id)}
                              data-testid={`wishlist-remove-${p.id}`}
                              className="inline-flex items-center gap-1 text-xs text-white/45 hover:text-red-400 transition-colors duration-200"
                            >
                              <Trash2 size={13} /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
