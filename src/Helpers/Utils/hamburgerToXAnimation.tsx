import { motion } from "framer-motion";
import type { JSX } from "react";
export default function HamburgerToXAnimation({ isOpen }: { isOpen: boolean }): JSX.Element {
  return (
  <>
     <motion.span className="w-6 h-0.5 block absolute ml-2 z-50"
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -8}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ backgroundColor: "var(--text-color)" }}
      />
      <motion.span className="w-6 h-0.5 block absolute ml-2 z-50"
        animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 10 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ backgroundColor: "var(--text-color)" }}
      />

      <motion.span className="w-6 h-0.5 block absolute ml-2 z-50"
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 8}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ backgroundColor: "var(--text-color)" }}
      />
  </>
  )
}