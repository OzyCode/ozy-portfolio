import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/lib/data";
import { RevealGroup, RevealItem } from "./Reveal";
import Magnetic from "./Magnetic";

const links = [
  {
    label: "Email",
    value: profile.links.email,
    href: `mailto:${profile.links.email}`,
    Icon: EnvelopeSimple,
  },
  { label: "GitHub", value: "github.com/OzyCode", href: profile.links.github, Icon: GithubLogo },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/osamakb",
    href: profile.links.linkedin,
    Icon: LinkedinLogo,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
      <RevealGroup className="rounded-3xl border border-card-border bg-card px-8 py-16 text-center sm:px-16">
        <RevealItem>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s <span className="gradient-text gradient-text-animated">talk</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Open to junior SAP consulting opportunities and interesting software work. Reach out
            through any of these.
          </p>
        </RevealItem>

        <RevealItem className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {links.map((link) => (
            <Magnetic key={link.label} strength={0.2}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="flex items-center gap-2 rounded-full border border-card-border px-6 py-3 text-sm font-medium transition-colors duration-200 ease-out hover:border-pink/60 hover:text-pink"
              >
                <link.Icon size={18} weight="bold" aria-hidden="true" />
                {link.value}
              </a>
            </Magnetic>
          ))}
        </RevealItem>
      </RevealGroup>

      <p className="mt-10 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Motion.
      </p>
    </section>
  );
}
