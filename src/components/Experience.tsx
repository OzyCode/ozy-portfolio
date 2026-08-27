import { experience } from "@/lib/data";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-28">
      <RevealGroup>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative border-l border-card-border pl-8">
          {experience.map((job) => (
            <RevealItem key={job.org} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-linear-to-r from-violet to-pink" />
              <p className="text-sm font-medium uppercase tracking-widest text-cyan">
                {job.period}
              </p>
              <h3 className="mt-1 text-xl font-semibold">{job.role}</h3>
              <p className="text-muted">
                <a
                  href={job.orgHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline decoration-card-border underline-offset-4 transition-colors hover:text-pink hover:decoration-pink"
                >
                  {job.org}
                </a>{" "}
                · {job.location}
              </p>
              <ul className="mt-4 space-y-2 text-muted">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-pink" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
