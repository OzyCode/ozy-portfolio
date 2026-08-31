"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // clipboard access denied or unavailable — fail silently
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      suppressHydrationWarning
      className={`relative flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors duration-200 ease-out cursor-pointer ${
        copied ? "border-cyan/60 text-cyan" : "border-card-border hover:border-pink/60 hover:text-pink"
      }`}
    >
      <AnimatePresence>
        {copied && (
          <motion.span
            aria-hidden
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 1.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 rounded-full border border-cyan"
          />
        )}
      </AnimatePresence>

      <span className="relative grid h-[18px] w-[18px] shrink-0 place-items-center">
        <AnimatePresence initial={false} mode="popLayout">
          {copied ? (
            <motion.span
              key="check"
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid place-items-center"
            >
              <Check size={18} weight="bold" aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="envelope"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="grid place-items-center"
            >
              <EnvelopeSimple size={18} weight="bold" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      <span className="relative grid">
        <span aria-hidden className="invisible col-start-1 row-start-1 whitespace-nowrap">
          {email.length >= "Copied!".length ? email : "Copied!"}
        </span>
        <span className="col-start-1 row-start-1 overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.span
              key={copied ? "copied" : "value"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="block whitespace-nowrap"
            >
              {copied ? "Copied!" : email}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>

      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </motion.button>
  );
}
