"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type MouseEvent } from "react";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { profile, stats } from "@/lib/data";
import Magnetic from "./Magnetic";
import Counter from "./Counter";
import { smoothScrollTo } from "@/lib/scroll";

const headline = "Building software, now bringing it into SAP consulting.";

export default function Hero() {
  const words = headline.split(" ");
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotionSafe();

  const spotlightX = useMotionValue(-400);
  const spotlightY = useMotionValue(-400);
  const springX = useSpring(spotlightX, { stiffness: 120, damping: 25 });
  const springY = useSpring(spotlightY, { stiffness: 120, damping: 25 });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const spotlightOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0]);

  // Glow is a 500px circle that fades to transparent past 70% of its radius
  // (175px) — keeping its center at least that far from the section's own
  // overflow-hidden edges means the clip only ever removes fully-transparent
  // pixels, so it never shows as a hard-edged cutoff.
  const GLOW_SAFE_MARGIN = 175;

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    if (reduceMotion) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const clamp = (value: number, min: number, max: number) =>
      min > max ? (min + max) / 2 : Math.min(Math.max(value, min), max);
    spotlightX.set(clamp(e.clientX - rect.left, GLOW_SAFE_MARGIN, rect.width - GLOW_SAFE_MARGIN));
    spotlightY.set(clamp(e.clientY - rect.top, GLOW_SAFE_MARGIN, rect.height - GLOW_SAFE_MARGIN));
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-[clamp(4.5rem,10vh,6rem)]"
    >
      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -z-10 h-[500px] w-[500px] rounded-full mix-blend-plus-lighter"
          style={{
            left: springX,
            top: springY,
            x: "-50%",
            y: "-50%",
            opacity: spotlightOpacity,
            background:
              "radial-gradient(circle, rgba(236,72,153,0.25), rgba(139,92,246,0.15) 45%, transparent 70%)",
          }}
        />
      )}

      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan"
        >
          {profile.role}
        </motion.p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.05 }}
              className={`inline-block ${
                word.includes("SAP") ? "gradient-text gradient-text-animated" : ""
              }`}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="mt-[clamp(1rem,2.5vh,1.5rem)] max-w-xl text-lg text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.75 }}
          className="mt-[clamp(1.5rem,4vh,2.5rem)] flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("#contact");
              }}
              className="glow-pulse inline-block rounded-full bg-linear-to-r from-violet via-pink to-orange px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 ease-out hover:scale-[1.03]"
            >
              Get in touch
            </a>
          </Magnetic>
          <Magnetic strength={0.25}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("#projects");
              }}
              className="inline-block rounded-full border border-card-border px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 ease-out hover:border-pink/60"
            >
              View projects
            </a>
          </Magnetic>
        </motion.div>

        <motion.dl
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08, delayChildren: 0.9 }}
          className="mt-[clamp(1.5rem,5vh,4rem)] grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
            >
              <dt className="font-heading text-2xl font-bold sm:text-3xl">
                <Counter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
              </dt>
              <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
