"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { experience } from "@/lib/data";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import ExternalLink from "./ExternalLink";
import VideoPreview from "./VideoPreview";

function JobEntry({ job }: { job: (typeof experience)[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <RevealItem className="relative mb-12 last:mb-0">
      <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-linear-to-r from-violet to-pink" />
      <p className="text-caption font-medium uppercase tracking-widest text-cyan">
        {job.period}
      </p>
      <h3 className="mt-1 text-xl font-semibold">{job.role}</h3>
      <p className="text-muted">
        <ExternalLink
          href={job.orgHref}
          className="underline decoration-pink/40 underline-offset-4 transition-colors hover:text-pink hover:decoration-pink"
        >
          {job.org}
        </ExternalLink>{" "}
        · {job.location}
      </p>

      <p className="mt-4 leading-relaxed text-muted">
        {job.summary}
        {job.summaryVideo && <VideoPreview src={job.summaryVideo} />}
      </p>

      <button
        type="button"
        suppressHydrationWarning
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-cyan transition-colors hover:text-pink"
      >
        {expanded ? "Show less" : "Show details"}
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <CaretDown size={12} weight="bold" />
        </motion.span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-2 text-muted">
              {job.points.map((point) => {
                const isMuted = typeof point !== "string" && point.muted;
                const text = typeof point === "string" ? point : point.text;
                return (
                  <li
                    key={text}
                    className={`flex gap-3 leading-relaxed ${isMuted ? "text-sm text-muted/70" : ""}`}
                  >
                    <span
                      className={`shrink-0 rounded-full bg-pink ${
                        isMuted ? "mt-2 h-[3px] w-[3px] opacity-60" : "mt-2.5 h-1 w-1"
                      }`}
                    />
                    <span>{text}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </RevealItem>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-28">
      <RevealGroup>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative border-l border-card-border pl-8">
          {experience.map((job) => (
            <JobEntry key={job.org} job={job} />
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
