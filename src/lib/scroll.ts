"use client";

import { animate, type AnimationPlaybackControls } from "motion/react";

// Moving/repositioning content already on screen — not an entrance/exit —
// so this uses the ease-in-out family, not ease-out.
const EASE_IN_OUT_CUBIC: [number, number, number, number] = [0.645, 0.045, 0.355, 1];

let activeScroll: AnimationPlaybackControls | null = null;

// offsetTop (walked through offsetParent) reflects true layout position and,
// unlike getBoundingClientRect, ignores CSS transforms — so it's accurate
// even when the target hasn't played its scroll-reveal entrance yet.
function getAbsoluteTop(el: HTMLElement): number {
  let top = 0;
  let node: HTMLElement | null = el;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
}

export function smoothScrollTo(hash: string) {
  activeScroll?.stop();

  const id = hash.replace("#", "");
  const headerHeight =
    (document.querySelector("[data-nav-bar]") as HTMLElement | null)?.offsetHeight ?? 0;

  let targetY = 0;

  if (id !== "top") {
    const section = document.getElementById(id);
    const anchor = (section?.querySelector("h2") ?? section) as HTMLElement | null;

    if (anchor) {
      // Comfortable breathing room below the header — not flush against it,
      // but not centered either. Centering a heading that sits at the top
      // of a tall section wastes the upper half of the viewport on empty
      // space and pushes the actual content below the fold.
      const desiredTop = headerHeight + 40;
      targetY = getAbsoluteTop(anchor) - desiredTop;
    }
  }

  targetY = Math.max(0, targetY);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    window.scrollTo(0, targetY);
    return;
  }

  const distance = Math.abs(targetY - window.scrollY);
  const duration = Math.min(1, Math.max(0.4, distance / 1600));

  activeScroll = animate(window.scrollY, targetY, {
    duration,
    ease: EASE_IN_OUT_CUBIC,
    onUpdate: (v) => window.scrollTo(0, v),
    onComplete: () => {
      activeScroll = null;
    },
  });
}
