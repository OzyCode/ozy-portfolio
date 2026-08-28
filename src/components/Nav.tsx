"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { nav } from "@/lib/data";
import { smoothScrollTo } from "@/lib/scroll";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    smoothScrollTo(href);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-card-border" : ""
      }`}
    >
      <div data-nav-bar className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="font-heading text-lg font-semibold tracking-tight"
        >
          Osamah<span className="text-pink">.</span>
        </a>

        <nav className="hidden gap-8 text-sm text-muted md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={(e) => handleNavClick(e, n.href)}
              className="transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="h-0.5 w-5 bg-foreground"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="h-0.5 w-5 bg-foreground"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="h-0.5 w-5 bg-foreground"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-card-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col px-6 py-2 text-sm text-muted">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={(e) => {
                    setOpen(false);
                    handleNavClick(e, n.href);
                  }}
                  className="flex min-h-11 items-center transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
