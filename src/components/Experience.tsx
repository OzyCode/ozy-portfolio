import { experience } from "@/lib/data";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import ExternalLink from "./ExternalLink";
import VideoPreview from "./VideoPreview";

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
                <ExternalLink
                  href={job.orgHref}
                  className="underline decoration-card-border underline-offset-4 transition-colors hover:text-pink hover:decoration-pink"
                >
                  {job.org}
                </ExternalLink>{" "}
                · {job.location}
              </p>
              <ul className="mt-4 space-y-2 text-muted">
                {job.points.map((point) => {
                  const isMuted = typeof point !== "string" && point.muted;
                  const text = typeof point === "string" ? point : point.text;
                  const video = typeof point === "string" ? undefined : point.video;
                  return (
                    <li
                      key={text}
                      className={`flex gap-3 leading-relaxed ${isMuted ? "text-sm text-muted/70" : ""}`}
                    >
                      <span
                        className={`shrink-0 rounded-full bg-pink ${
                          isMuted ? "mt-2 h-[3px] w-[3px] opacity-60" : "mt-2.5 h-1 w-1"
                        }`}
                      />
                      <span>
                        {text}
                        {video && <VideoPreview src={video} />}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
