import Image from "next/image";
import { ArrowsOut } from "@phosphor-icons/react/dist/ssr";
import { profile, extracurricular } from "@/lib/data";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import ExternalLink from "./ExternalLink";
import VideoPreview from "./VideoPreview";
import Lightbox from "./Lightbox";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <RevealGroup>
        <SectionHeading eyebrow="About" title="A bit about me" />

        <RevealItem className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
          <div className="relative mx-auto w-48 shrink-0 sm:w-56 md:mx-0 md:w-64">
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
            <div className="absolute -bottom-4 -right-4 aspect-square w-16 -rotate-6 overflow-hidden rounded-xl border-2 border-background shadow-lg sm:w-20">
              <Image
                src="/images/work-photo.jpeg"
                alt="Working with a colleague on the 3PL and CarLog projects"
                fill
                sizes="5rem"
                className="object-cover"
              />
            </div>
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
            <div className="flex items-start gap-3">
              <Lightbox
                src={extracurricular.photo.src}
                width={extracurricular.photo.width}
                height={extracurricular.photo.height}
                alt={extracurricular.photo.alt}
                caption={extracurricular.photo.caption}
              >
                <button
                  type="button"
                  suppressHydrationWarning
                  className="group relative aspect-[3/4] w-16 shrink-0 overflow-hidden rounded-lg border border-card-border sm:w-20"
                >
                  <Image
                    src={extracurricular.photo.src}
                    alt={extracurricular.photo.alt}
                    fill
                    sizes="5rem"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                  <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-background/80 text-foreground">
                    <ArrowsOut size={11} weight="bold" />
                  </span>
                </button>
              </Lightbox>
              <p className="text-sm text-muted">
                <ExternalLink
                  href={extracurricular.orgHref}
                  className="font-semibold text-foreground underline decoration-pink/40 underline-offset-4 transition-colors hover:text-pink hover:decoration-pink"
                >
                  {extracurricular.org}
                </ExternalLink>{" "}
                ·{" "}
                {extracurricular.period}
                <br />
                {extracurricular.points[0]}
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {extracurricular.clips.map((clip) => (
                <VideoPreview
                  key={clip.src}
                  src={clip.src}
                  label={clip.label}
                  orientation="portrait"
                  inline={false}
                />
              ))}
            </div>
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
