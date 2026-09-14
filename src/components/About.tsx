import Image from "next/image";
import { ArrowsOut } from "@phosphor-icons/react/dist/ssr";
import { profile, extracurricular } from "@/lib/data";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import ExternalLink from "./ExternalLink";
import Lightbox from "./Lightbox";

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

            <Lightbox
              src="/images/roadmap-presentation-photo.jpg"
              width={520}
              height={520}
              alt="Presenting the department-wide IT roadmap review to leadership"
              caption="Presenting the department-wide IT roadmap review to leadership at RFID Saudi."
            >
              <button
                type="button"
                suppressHydrationWarning
                className="group relative mt-3 block aspect-square w-full overflow-hidden rounded-xl border border-card-border bg-card"
              >
                <Image
                  src="/images/roadmap-presentation-photo.jpg"
                  alt="Presenting the department-wide IT roadmap review to leadership"
                  fill
                  sizes="(min-width: 768px) 16rem, 14rem"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
                <span className="absolute bottom-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-background/80 text-foreground">
                  <ArrowsOut size={11} weight="bold" />
                </span>
              </button>
            </Lightbox>
            <p className="mt-1.5 text-caption text-muted">
              Presenting the IT roadmap review to leadership.
            </p>
          </div>

          <div className="min-w-0 flex-1">
            <p className="max-w-3xl text-lg leading-relaxed text-muted">{profile.bio}</p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
              {profile.currentlyExploring}
            </p>
          </div>
        </RevealItem>

        <RevealItem className="mt-8 flex flex-col gap-4">
          <div className="flex items-center gap-4 rounded-2xl border border-card-border bg-card px-6 py-5">
            <div className="flex h-10 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md border border-card-border bg-white p-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element -- small fixed-size
                  logo, object-contain sizing is simpler than next/image's fill model. */}
              <img
                src="/images/logos/n8n-logo.png"
                alt="n8n logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
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
                className="font-semibold text-foreground underline decoration-pink/40 underline-offset-4 transition-colors hover:text-pink hover:decoration-pink"
              >
                {extracurricular.org}
              </ExternalLink>{" "}
              ·{" "}
              {extracurricular.period}
              <br />
              {extracurricular.points[0]}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {extracurricular.photos.map((photo) => (
                <Lightbox
                  key={photo.src}
                  src={photo.src}
                  width={photo.width}
                  height={photo.height}
                  alt={photo.alt}
                  caption={photo.caption}
                >
                  <button
                    type="button"
                    suppressHydrationWarning
                    className={`group relative h-28 ${photo.aspect} shrink-0 overflow-hidden rounded-lg border border-card-border sm:h-32`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="8rem"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                    <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-background/80 text-foreground">
                      <ArrowsOut size={11} weight="bold" />
                    </span>
                  </button>
                </Lightbox>
              ))}
              {extracurricular.clips.map((clip) => (
                <Lightbox
                  key={clip.src}
                  src={clip.poster}
                  width={clip.width}
                  height={clip.height}
                  alt={`${clip.label} — Toastmasters speech recording`}
                  videoSrc={clip.src}
                >
                  <button
                    type="button"
                    suppressHydrationWarning
                    className="group relative h-28 aspect-[9/16] shrink-0 overflow-hidden rounded-lg border border-card-border sm:h-32"
                  >
                    <Image
                      src={clip.poster}
                      alt={`${clip.label} — Toastmasters speech recording`}
                      fill
                      sizes="8rem"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                    <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-background/80 text-foreground">
                      <ArrowsOut size={11} weight="bold" />
                    </span>
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-background/90 to-transparent px-2 pb-1.5 pt-6 text-left text-caption font-medium text-foreground">
                      {clip.label}
                    </span>
                  </button>
                </Lightbox>
              ))}
            </div>
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
