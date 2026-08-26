import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";

const links = [
  { label: "Open-Ear Audio", href: "#flagship" },
  { label: "Beyond Audio", href: "#categories" },
  { label: "Why Open-Ear", href: "#manifesto" },
  { label: "Our Story", href: "#story" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="site-navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500 ${
        scrolled
          ? "bg-[#050b14]/80 backdrop-blur-xl border-b hairline py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <img
            src="/ng-logo.png"
            alt="NG EarSafe"
            className="h-9 w-9 object-contain transition-transform duration-500 group-hover:rotate-6"
          />
          <span className="font-display font-extrabold tracking-tight text-lg hidden sm:block">
            NG EARSAFE
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.href.slice(1)}`}
              className="group relative text-sm text-white/75 hover:text-white transition-colors duration-300"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#3fb8c4] transition-[width] duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://ngearsafe.com/collections/all"
            target="_blank"
            rel="noreferrer"
            data-testid="nav-shop-cta"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#3fb8c4] px-6 py-2.5 text-sm font-medium text-[#3fb8c4] hover:bg-[#3fb8c4] hover:text-[#050b14] transition-colors duration-300"
          >
            <ShoppingBag size={16} />
            Shop All
          </a>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center h-10 w-10 rounded-full border hairline text-white"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t hairline bg-[#050b14]/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-display font-medium text-white/85"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://ngearsafe.com/collections/all"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-[#3fb8c4] px-6 py-3 text-sm font-medium text-[#3fb8c4]"
              >
                <ShoppingBag size={16} /> Shop All
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
