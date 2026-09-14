"use client";

import Image from "next/image";
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
          className={`font-metadata rounded-full border border-card-border text-caption text-muted ${
            small ? "px-2.5 py-0.5" : "px-3 py-1"
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
                      <p className="text-caption font-semibold uppercase tracking-widest text-cyan">
                        Problem
                      </p>
                      <p className="mt-1.5 leading-relaxed text-muted">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-caption font-semibold uppercase tracking-widest text-pink">
                        Role
                      </p>
                      <p className="mt-1.5 leading-relaxed text-muted">{project.role}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mt-4">
                    <p className="text-caption font-semibold uppercase tracking-widest text-orange">
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
          <p className="font-metadata text-sm font-medium uppercase tracking-widest text-muted">
            Also built
          </p>
        </RevealItem>

        <div className="grid gap-6 sm:grid-cols-2">
          {secondaryProjects.map((project) => {
            const Card = (
              <TiltCard className="gradient-border h-full overflow-hidden rounded-xl border border-card-border bg-card">
                {"image" in project && project.image && (
                  <div className="relative flex h-56 w-full items-center justify-center overflow-hidden border-b border-card-border bg-background">
                    {"light" in project.image && project.image.light ? (
                      // Light-background content (a real screenshot, not a
                      // dark-themed diagram) gets its own tight white mat —
                      // a border alone reads clearly against both the white
                      // fill and the dark card, unlike a drop shadow, which
                      // is invisible on a background this dark.
                      <div className="overflow-hidden rounded-lg border border-card-border bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                        <Image
                          src={project.image.src}
                          alt={project.image.alt}
                          width={900}
                          height={431}
                          className="h-28 w-auto object-contain sm:h-32"
                        />
                      </div>
                    ) : (
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        unoptimized={"unoptimized" in project.image && project.image.unoptimized}
                        className="object-contain p-3"
                      />
                    )}
                  </div>
                )}
                <div className="p-5">
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
                  <p className="font-metadata mt-1 text-caption uppercase tracking-widest text-muted">
                    {project.period}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
                  <TagList tags={project.tags} small />
                </div>
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
