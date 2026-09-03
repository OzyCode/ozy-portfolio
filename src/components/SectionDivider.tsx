"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useId, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

type Point = [number, number];
type Segment = { p0: Point; p1: Point; p2: Point; p3: Point };

const variants: { segments: Segment[]; colors: [string, string, string] }[] = [
  {
    segments: [
      { p0: [0, 24], p1: [37.5, 4], p2: [62.5, 44], p3: [100, 24] },
      { p0: [100, 24], p1: [137.5, 4], p2: [162.5, 44], p3: [200, 24] },
      { p0: [200, 24], p1: [237.5, 4], p2: [262.5, 44], p3: [300, 24] },
    ],
    colors: ["var(--violet)", "var(--pink)", "var(--orange)"],
  },
  {
    segments: [
      { p0: [0, 24], p1: [50, -6], p2: [100, 54], p3: [150, 24] },
      { p0: [150, 24], p1: [200, -6], p2: [250, 54], p3: [300, 24] },
    ],
    colors: ["var(--pink)", "var(--orange)", "var(--cyan)"],
  },
  {
    segments: [
      { p0: [0, 24], p1: [12, 8], p2: [38, 8], p3: [50, 24] },
      { p0: [50, 24], p1: [62, 40], p2: [88, 40], p3: [100, 24] },
      { p0: [100, 24], p1: [112, 8], p2: [138, 8], p3: [150, 24] },
      { p0: [150, 24], p1: [162, 40], p2: [188, 40], p3: [200, 24] },
      { p0: [200, 24], p1: [212, 8], p2: [238, 8], p3: [250, 24] },
      { p0: [250, 24], p1: [262, 40], p2: [288, 40], p3: [300, 24] },
    ],
    colors: ["var(--cyan)", "var(--violet)", "var(--pink)"],
  },
  {
    segments: [{ p0: [0, 36], p1: [100, -16], p2: [200, -16], p3: [300, 36] }],
    colors: ["var(--orange)", "var(--pink)", "var(--violet)"],
  },
  {
    segments: [
      { p0: [0, 24], p1: [60, 24], p2: [60, 4], p3: [120, 4] },
      { p0: [120, 4], p1: [180, 4], p2: [180, 44], p3: [240, 44] },
      { p0: [240, 44], p1: [270, 44], p2: [270, 24], p3: [300, 24] },
    ],
    colors: ["var(--violet)", "var(--cyan)", "var(--orange)"],
  },
  {
    segments: [
      { p0: [0, 10], p1: [80, 10], p2: [80, 44], p3: [150, 44] },
      { p0: [150, 44], p1: [220, 44], p2: [220, 10], p3: [300, 10] },
    ],
    colors: ["var(--pink)", "var(--violet)", "var(--cyan)"],
  },
];

function segmentsToPath(segments: Segment[]) {
  const d = [`M${segments[0].p0[0]},${segments[0].p0[1]}`];
  for (const seg of segments) {
    d.push(`C${seg.p1[0]},${seg.p1[1]} ${seg.p2[0]},${seg.p2[1]} ${seg.p3[0]},${seg.p3[1]}`);
  }
  return d.join(" ");
}

// Point at t (0-1) along the whole multi-segment curve — lets the fidget
// dot ride the exact drawn wave instead of floating free of it.
function pointAt(segments: Segment[], t: number) {
  const clamped = Math.min(Math.max(t, 0), 1);
  const scaled = clamped * segments.length;
  const index = Math.min(Math.floor(scaled), segments.length - 1);
  const localT = scaled - index;
  const { p0, p1, p2, p3 } = segments[index];
  const mt = 1 - localT;
  const a = mt ** 3;
  const b = 3 * mt ** 2 * localT;
  const c = 3 * mt * localT ** 2;
  const d = localT ** 3;
  return {
    x: a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0],
    y: a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1],
  };
}

export default function SectionDivider({ index = 0 }: { index?: number }) {
  const gradientId = useId();
  const variant = variants[index % variants.length];
  const { segments } = variant;
  const [c1, c2, c3] = variant.colors;
  const gradient = `linear-gradient(90deg, ${c1}, ${c2}, ${c3})`;
  const pathD = segmentsToPath(segments);

  const svgRef = useRef<SVGSVGElement>(null);
  const dragStart = useRef({ x: 0, t: 0.5 });
  const [isDragging, setIsDragging] = useState(false);
  const t = useMotionValue(0.5);
  const cx = useTransform(t, (v) => pointAt(segments, v).x);
  const cy = useTransform(t, (v) => pointAt(segments, v).y);

  function handlePointerDown(e: ReactPointerEvent<SVGCircleElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragStart.current = { x: e.clientX, t: t.get() };
    setIsDragging(true);
  }

  function handlePointerMove(e: ReactPointerEvent<SVGCircleElement>) {
    if (!isDragging) return;
    const width = svgRef.current?.getBoundingClientRect().width ?? 224;
    const deltaT = (e.clientX - dragStart.current.x) / width;
    t.set(Math.min(Math.max(dragStart.current.t + deltaT, 0.04), 0.96));
  }

  function handlePointerUp(e: ReactPointerEvent<SVGCircleElement>) {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setIsDragging(false);
    animate(t, 0.5, { type: "spring", stiffness: 260, damping: 16 });
  }

  return (
    <div aria-hidden className="relative mx-auto max-w-5xl px-6">
      <motion.div
        className="absolute left-1/2 top-1/2 h-32 w-72 -translate-x-1/2 -translate-y-1/2 sm:w-96"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="h-full w-full rounded-full opacity-[0.22] blur-[20px]"
          style={{ background: gradient }}
          animate={{ x: [-24, 24, -24], y: [-10, 10, -10], scale: [1, 1.2, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <svg
        ref={svgRef}
        viewBox="0 0 300 48"
        className="absolute left-1/2 top-1/2 h-10 w-56 -translate-x-1/2 -translate-y-1/2 overflow-visible sm:w-72"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={c1} />
            <stop offset="50%" stopColor={c2} />
            <stop offset="100%" stopColor={c3} />
          </linearGradient>
        </defs>
        <motion.path
          d={pathD}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.8 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
        />

        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.1 }}
        >
          {/* generous invisible hit area — the visible bead stays small */}
          <motion.circle
            cx={cx}
            cy={cy}
            r={14}
            fill="transparent"
            style={{ pointerEvents: "all", cursor: isDragging ? "grabbing" : "grab", touchAction: "none" }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          />
          <motion.circle
            cx={cx}
            cy={cy}
            r={isDragging ? 6 : 4.5}
            fill={`url(#${gradientId})`}
            style={{ pointerEvents: "none" }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
