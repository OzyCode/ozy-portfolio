import { RevealItem } from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <RevealItem className="mb-12">
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan">{eyebrow}</p>
      <h2 className="text-h2 font-bold tracking-tight">{title}</h2>
    </RevealItem>
  );
}
