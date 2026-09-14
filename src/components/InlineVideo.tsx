"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export default function InlineVideo({
  src,
  className,
}: {
  /** Base path without extension — resolves to `${src}.webm` and `${src}.mp4`. */
  src: string;
  /** Sizing/shape classes (aspect ratio, width, margin, etc.) — the caller owns layout entirely. */
  className: string;
}) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // The native `autoplay` attribute only fires its one-shot readiness
    // check on mount — it never re-triggers playback later. Browsers also
    // routinely pause off-screen <video> elements outright as a power-saving
    // heuristic, and nothing brings them back on their own. An
    // IntersectionObserver is what actually keeps this reliable: play()
    // whenever the video scrolls into view (covers the initial mount *and*
    // every scroll-back-in), pause() when it leaves (good citizenship).
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <div className={`relative overflow-hidden rounded-xl border border-card-border bg-card ${className}`}>
      <video
        ref={videoRef}
        autoPlay={!reduceMotion}
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={`${src}.webm`} type="video/webm" />
        <source src={`${src}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}
