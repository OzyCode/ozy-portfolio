import Image from "next/image";
import { ArrowsOut } from "@phosphor-icons/react/dist/ssr";
import { certificates, education } from "@/lib/data";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import ExternalLink from "./ExternalLink";
import Lightbox from "./Lightbox";

export default function Credentials() {
  return (
    <section id="credentials" className="mx-auto max-w-5xl px-6 py-28">
      <RevealGroup>
        <SectionHeading eyebrow="Credentials" title="Education & certifications" />

        <div className="grid gap-6 md:grid-cols-2">
          <RevealItem className="rounded-2xl border border-card-border bg-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan">
              Education
            </h3>
            <p className="mt-4 font-semibold">{education.degree}</p>
            <ExternalLink
              href={education.schoolHref}
              className="text-muted underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan hover:decoration-cyan"
            >
              {education.school}
            </ExternalLink>
            <p className="mt-1 text-sm text-muted">
              {education.period} · {education.location}
            </p>
            <div className="mt-4 flex gap-2">
              {education.photos.map((photo) => (
                <Lightbox
                  key={photo.src}
                  src={photo.src}
                  width={photo.width}
                  height={photo.height}
                  alt={photo.alt}
                  caption={photo.caption}
                  quote={photo.quote}
                >
                  <button
                    type="button"
                    suppressHydrationWarning
                    className="group relative aspect-[3/4] w-20 shrink-0 overflow-hidden rounded-lg border border-card-border sm:w-24"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="6rem"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                    <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-background/80 text-foreground">
                      <ArrowsOut size={11} weight="bold" />
                    </span>
                  </button>
                </Lightbox>
              ))}
            </div>
          </RevealItem>

          <RevealItem className="rounded-2xl border border-card-border bg-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-pink">
              Certifications
            </h3>
            <ul className="mt-4 space-y-4">
              {certificates.map((cert) => (
                <li key={cert.name}>
                  <ExternalLink
                    href={cert.href}
                    className="font-medium leading-snug underline decoration-pink/40 underline-offset-4 transition-colors hover:text-pink hover:decoration-pink"
                  >
                    {cert.name}
                  </ExternalLink>
                  <p className="text-sm text-muted">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </RevealItem>
        </div>
      </RevealGroup>
    </section>
  );
}
