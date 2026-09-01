"use client";

import { useRef, useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useReducedMotion } from "motion/react";
import { Play, Pause } from "@phosphor-icons/react/dist/ssr";

export default function VideoPreview({ src }: { src: string }) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

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
    <Tooltip.Root onOpenChange={(isOpen) => !isOpen && setPlaying(false)}>
      <Tooltip.Trigger asChild>
        <button
          type="button"
          suppressHydrationWarning
          className="ml-1.5 inline-flex items-center gap-1.5 rounded-full border border-card-border px-2.5 py-1 align-middle text-xs whitespace-nowrap text-cyan transition-colors hover:border-pink hover:text-pink"
        >
          <Play size={11} weight="fill" />
          Preview the clip
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          sideOffset={10}
          collisionPadding={12}
          className="tooltip-content z-50 overflow-hidden rounded-xl border border-card-border bg-card shadow-2xl"
          style={{ transformOrigin: "var(--radix-tooltip-content-transform-origin)" }}
        >
          <div className="relative">
            <video
              ref={videoRef}
              src={src}
              muted
              loop
              playsInline
              autoPlay={!reduceMotion}
              disablePictureInPicture
              disableRemotePlayback
              controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
              onContextMenu={(e) => e.preventDefault()}
              className="block aspect-video w-72 object-cover sm:w-80"
            />
            {reduceMotion && (
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
          <Tooltip.Arrow className="fill-card" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
