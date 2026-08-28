"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type MouseEvent } from "react";
import { profile, stats } from "@/lib/data";
import Magnetic from "./Magnetic";
import Counter from "./Counter";
import { smoothScrollTo } from "@/lib/scroll";

const headline = "Building software, now bringing it into SAP consulting.";

export default function Hero() {
  const words = headline.split(" ");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const blobOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const spotlightX = useMotionValue(-400);
  const spotlightY = useMotionValue(-400);
  const springX = useSpring(spotlightX, { stiffness: 120, damping: 25 });
  const springY = useSpring(spotlightY, { stiffness: 120, damping: 25 });

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <motion.div
        aria-hidden
        style={{ y: blobY, opacity: blobOpacity }}
        className="pointer-events-none absolute inset-0 -z-10 saturate-[1.2]"
      >
        <motion.div
          className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-violet/50 blur-[110px]"
          animate={{ x: [0, 50, 0], y: [0, 35, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-32 h-[26rem] w-[26rem] rounded-full bg-pink/40 blur-[110px]"
          animate={{ x: [0, -40, 0], y: [0, 45, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-orange/30 blur-[110px]"
          animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-cyan/20 blur-[110px]"
          animate={{ x: [0, -25, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="grain-overlay absolute inset-0" />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 h-[500px] w-[500px] rounded-full opacity-70 mix-blend-plus-lighter"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(236,72,153,0.25), rgba(139,92,246,0.15) 45%, transparent 70%)",
        }}
      />

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
          className="mt-6 max-w-xl text-lg text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center gap-4"
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
          className="mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4"
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
