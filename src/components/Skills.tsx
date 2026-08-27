import {
  Buildings,
  Code,
  Database,
  Wrench,
  Lightning,
  RocketLaunch,
} from "@phosphor-icons/react/dist/ssr";
import { skills } from "@/lib/data";
import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";

const accents = ["text-violet", "text-pink", "text-orange", "text-cyan", "text-violet"];

const icons: Record<string, typeof Buildings> = {
  SAP: Buildings,
  Programming: Code,
  Databases: Database,
  Tools: Wrench,
  Automation: Lightning,
  Delivery: RocketLaunch,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28">
      <RevealGroup>
        <SectionHeading eyebrow="Skills" title="What I work with" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = icons[group.category];
            return (
            <RevealItem
              key={group.category}
              className="gradient-border rounded-2xl border border-card-border bg-card p-6 transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              <h3 className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-widest ${accents[i % accents.length]}`}>
                <Icon size={18} weight="bold" aria-hidden="true" />
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-background px-3 py-1.5 text-sm text-foreground/90 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-card-border hover:shadow-[0_0_16px_-2px_var(--color-pink)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </RevealItem>
            );
          })}
        </div>
      </RevealGroup>
    </section>
  );
}
