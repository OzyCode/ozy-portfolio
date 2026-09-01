"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

// SSR has no window, so there's no way to know the client's OS-level
// preference ahead of time — matching motion/react's own SSR default (false)
// keeps the first client render identical to the server-rendered HTML and
// avoids a hydration mismatch. useSyncExternalStore then swaps in the real
// value (and stays live if the OS setting changes) as a normal update.
function getServerSnapshot() {
  return false;
}

export function useReducedMotionSafe() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
