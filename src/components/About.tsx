import Image from "next/image";
import { profile, extracurricular } from "@/lib/data";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import ExternalLink from "./ExternalLink";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <RevealGroup>
        <SectionHeading eyebrow="About" title="A bit about me" />

        <RevealItem className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
          <div className="mx-auto w-48 shrink-0 sm:w-56 md:mx-0 md:w-64">
            <TiltCard className="gradient-border relative aspect-[2/3] overflow-hidden rounded-3xl border border-card-border bg-card">
              <Image
                src="/images/profile.jpg"
                alt={profile.name}
                fill
                sizes="(min-width: 768px) 16rem, 14rem"
                className="object-cover"
                priority
              />
            </TiltCard>
          </div>

          <div className="min-w-0 flex-1">
            <p className="max-w-3xl text-lg leading-relaxed text-muted">{profile.bio}</p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
              {profile.currentlyExploring}
            </p>
          </div>
        </RevealItem>

        <RevealItem className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-card-border bg-card px-6 py-5">
            <p className="text-sm text-muted">
              <span className="font-semibold text-orange">Currently exploring</span>
              <br />
              n8n · workflow automation · API integrations
            </p>
          </div>

          <div className="rounded-2xl border border-card-border bg-card px-6 py-5">
            <p className="text-sm text-muted">
              <ExternalLink
                href={extracurricular.orgHref}
                className="font-semibold text-foreground underline decoration-card-border underline-offset-4 transition-colors hover:text-pink hover:decoration-pink"
              >
                {extracurricular.org}
              </ExternalLink>{" "}
              ·{" "}
              {extracurricular.period}
              <br />
              {extracurricular.points[0]}
            </p>
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
