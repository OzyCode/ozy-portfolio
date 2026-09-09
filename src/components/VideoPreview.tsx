"use client";

import { useRef, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { useReducedMotion } from "motion/react";
import { Play, Pause } from "@phosphor-icons/react/dist/ssr";

export default function VideoPreview({
  src,
  label = "Preview the clip",
  orientation = "landscape",
  inline = true,
}: {
  src: string;
  label?: string;
  orientation?: "landscape" | "portrait";
  inline?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function handleOpenChange(isOpen: boolean) {
    if (isOpen) {
      setIsLoading(true);
    } else {
      setPlaying(false);
    }
  }

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <Popover.Root onOpenChange={handleOpenChange}>
      <Popover.Trigger asChild>
        <button
          type="button"
          suppressHydrationWarning
          className={`glow-pulse-sm gradient-bg-animated inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-white transition-transform duration-200 ease-out hover:scale-105 ${
            inline ? "ml-1.5 align-middle" : ""
          }`}
        >
          <Play size={12} weight="fill" />
          {label}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={10}
          collisionPadding={12}
          className="tooltip-content z-50 overflow-hidden rounded-xl border border-card-border bg-card shadow-2xl"
          style={{ transformOrigin: "var(--radix-popover-content-transform-origin)" }}
        >
          <div className="relative">
            <video
              ref={videoRef}
              src={src}
              muted
              loop
              playsInline
              preload="auto"
              autoPlay={!reduceMotion}
              disablePictureInPicture
              disableRemotePlayback
              controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
              onContextMenu={(e) => e.preventDefault()}
              onLoadedData={() => setIsLoading(false)}
              onWaiting={() => setIsLoading(true)}
              onPlaying={() => setIsLoading(false)}
              className={`block object-cover ${
                orientation === "portrait" ? "aspect-[9/16] w-44 sm:w-48" : "aspect-video w-72 sm:w-80"
              }`}
            />
            {isLoading && (
              <div
                role="status"
                aria-live="polite"
                className="absolute inset-0 flex items-center justify-center bg-card"
              >
                <span
                  aria-hidden
                  className={`h-6 w-6 rounded-full border-2 border-card-border border-t-cyan ${
                    reduceMotion ? "animate-pulse" : "animate-spin"
                  }`}
                />
                <span className="sr-only">Loading preview…</span>
              </div>
            )}
            {reduceMotion && !isLoading && (
              <button
                type="button"
                onClick={togglePlayback}
                aria-label={playing ? "Pause preview" : "Play preview"}
                className="absolute inset-0 flex items-center justify-center bg-background/20 transition-colors hover:bg-background/30"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground">
                  {playing ? <Pause size={16} weight="fill" /> : <Play size={16} weight="fill" />}
                </span>
              </button>
            )}
          </div>
          <Popover.Arrow className="fill-card" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
