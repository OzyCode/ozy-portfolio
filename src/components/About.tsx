import { profile, extracurricular } from "@/lib/data";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <RevealGroup>
        <SectionHeading eyebrow="About" title="A bit about me" />

        <RevealItem>
          <p className="max-w-3xl text-lg leading-relaxed text-muted">{profile.bio}</p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            {profile.currentlyExploring}
          </p>
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
              <a
                href={extracurricular.orgHref}
                target="_blank"
                rel="noreferrer noopener"
                className="font-semibold text-foreground underline decoration-card-border underline-offset-4 transition-colors hover:text-pink hover:decoration-pink"
              >
                {extracurricular.org}
              </a>{" "}
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
