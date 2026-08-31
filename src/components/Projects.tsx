"use client";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { featuredProjects, secondaryProjects } from "@/lib/data";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import ExternalLink from "./ExternalLink";

function TagList({ tags, small }: { tags: string[]; small?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-2 ${small ? "mt-4 gap-1.5" : "mt-5"}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={`rounded-full border border-card-border text-muted ${
            small ? "px-2.5 py-0.5 text-[11px]" : "px-3 py-1 text-xs"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <RevealGroup>
        <SectionHeading eyebrow="Projects" title="Things I've built" />

        <div className="grid gap-6 sm:grid-cols-2 sm:grid-rows-[auto_auto]">
          {featuredProjects.map((project) => (
            <RevealItem key={project.name} className="sm:grid sm:grid-rows-subgrid sm:row-span-2">
              <TiltCard
                tiltStrength={3}
                className="gradient-border h-full rounded-2xl border border-card-border bg-card p-8 sm:grid sm:grid-rows-subgrid sm:row-span-2"
              >
                <div>
                  <h3 className="text-xl font-semibold">{project.name}</h3>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-cyan">
                        Problem
                      </p>
                      <p className="mt-1.5 leading-relaxed text-muted">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-pink">
                        Role
                      </p>
                      <p className="mt-1.5 leading-relaxed text-muted">{project.role}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-orange">
                      Result
                    </p>
                    <p className="mt-1.5 leading-relaxed text-muted">{project.result}</p>
                  </div>

                  <TagList tags={project.tags} />
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </div>

        <RevealItem className="mt-16 mb-6">
          <p className="text-sm font-medium uppercase tracking-widest text-muted">Also built</p>
        </RevealItem>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {secondaryProjects.map((project) => {
            const Card = (
              <TiltCard className="gradient-border h-full rounded-xl border border-card-border bg-card p-5">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm font-semibold">{project.name}</h4>
                  {project.href && (
                    <ArrowUpRight
                      size={16}
                      weight="bold"
                      className="mt-0.5 shrink-0 text-cyan"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-muted">
                  {project.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
                <TagList tags={project.tags} small />
              </TiltCard>
            );

            return (
              <RevealItem key={project.name}>
                {project.href ? (
                  <ExternalLink href={project.href} className="block h-full">
                    {Card}
                  </ExternalLink>
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
