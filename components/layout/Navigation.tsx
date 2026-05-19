"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-2 px-2 py-2 rounded-full bg-deep-space/60 backdrop-blur-xl border border-gold-shimmer/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <a
              href="#"
              className="px-4 py-2 font-serif text-lg text-gold-shimmer hover:text-gold-bright transition-colors translate-y-[1px]"
            >
              PB
            </a>
            <div className="hidden md:flex items-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-text-secondary hover:text-gold-shimmer hover:bg-gold-shimmer/10 rounded-full transition-all text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
