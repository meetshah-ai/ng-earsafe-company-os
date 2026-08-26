import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { announcements } from "../../data/site";

export default function AnnouncementBar({ onVisibilityChange }) {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % announcements.length),
      4000
    );
    return () => clearInterval(t);
  }, [visible]);

  useEffect(() => {
    onVisibilityChange?.(visible);
  }, [visible, onVisibilityChange]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-testid="announcement-bar"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="fixed inset-x-0 top-0 z-[60] overflow-hidden bg-[#3fb8c4] text-[#050b14]"
        >
          <div className="max-w-[1440px] mx-auto flex h-9 items-center justify-center px-10">
            <div className="relative h-5 overflow-hidden text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="whitespace-nowrap text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                  data-testid="announcement-text"
                >
                  {announcements[index]}
                </motion.p>
              </AnimatePresence>
            </div>
            <button
              onClick={() => setVisible(false)}
              data-testid="announcement-close"
              className="absolute right-4 grid h-6 w-6 place-items-center rounded-full text-[#050b14]/70 transition-colors duration-200 hover:bg-[#050b14]/10 hover:text-[#050b14]"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
