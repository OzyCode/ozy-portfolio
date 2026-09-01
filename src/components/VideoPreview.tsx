"use client";

import { useRef, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { useReducedMotion } from "motion/react";
import { Play, Pause } from "@phosphor-icons/react/dist/ssr";

export default function VideoPreview({ src }: { src: string }) {
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
          className="ml-1.5 inline-flex items-center gap-1.5 rounded-full border border-card-border px-2.5 py-1 align-middle text-xs whitespace-nowrap text-cyan transition-colors hover:border-pink hover:text-pink"
        >
          <Play size={11} weight="fill" />
          Preview the clip
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
              className="block aspect-video w-72 object-cover sm:w-80"
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
