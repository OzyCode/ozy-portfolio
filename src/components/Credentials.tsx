import { certificates, education } from "@/lib/data";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import ExternalLink from "./ExternalLink";

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
              className="text-muted underline decoration-card-border underline-offset-4 transition-colors hover:text-cyan hover:decoration-cyan"
            >
              {education.school}
            </ExternalLink>
            <p className="mt-1 text-sm text-muted">
              {education.period} · {education.location}
            </p>
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
                    className="font-medium leading-snug underline decoration-card-border underline-offset-4 transition-colors hover:text-pink hover:decoration-pink"
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
