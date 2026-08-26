import { motion } from "framer-motion";

// Scroll-into-view reveal wrapper.
export function Reveal({ children, delay = 0, y = 28, className = "", ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// Masked line reveal for headings. The whileInView trigger lives on the
// stationary outer span so the IntersectionObserver fires reliably; the inner
// span (which is translated out of the clip box) animates via variants.
export function MaskLine({ children, delay = 0, className = "" }) {
  return (
    <motion.span
      className="block overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: {}, show: {} }}
    >
      <motion.span
        className={"block " + className}
        variants={{ hidden: { y: "110%" }, show: { y: "0%" } }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
