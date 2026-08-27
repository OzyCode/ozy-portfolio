"use client";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/lib/data";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <RevealGroup>
        <SectionHeading eyebrow="Projects" title="Things I've built" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => {
            const Card = (
              <TiltCard className="gradient-border h-full rounded-2xl border border-card-border bg-card p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  {project.href && (
                    <ArrowUpRight
                      size={18}
                      weight="bold"
                      className="mt-1 shrink-0 text-cyan"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                  {project.period}
                </p>
                <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-card-border px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            );

            return (
              <RevealItem key={project.name}>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block h-full"
                  >
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </RevealItem>
            );
          })}
        </div>
      </RevealGroup>
    </section>
  );
}
