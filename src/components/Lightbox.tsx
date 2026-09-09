"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";

export default function Lightbox({
  src,
  width,
  height,
  alt,
  caption,
  quote = false,
  children,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  quote?: boolean;
  children: ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="lightbox-overlay fixed inset-0 z-50 bg-background/90 backdrop-blur-sm" />
        <Dialog.Content
          className="lightbox-content fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[min(92vw,36rem)] overflow-hidden rounded-2xl border border-card-border bg-card shadow-2xl"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Dialog.Title className="sr-only">{alt}</Dialog.Title>
          <div className="flex max-h-[calc(85vh-4.5rem)] items-center justify-center bg-background">
            {/* eslint-disable-next-line @next/next/no-img-element -- intrinsic
                aspect ratio + object-contain is simpler here than next/image's
                fill-and-crop model, matching the favicon <img> in ExternalLink. */}
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="max-h-[calc(85vh-4.5rem)] w-auto max-w-full object-contain"
            />
          </div>
          {caption &&
            (quote ? (
              <blockquote className="border-t border-card-border px-5 py-4 text-sm italic leading-relaxed text-foreground/90">
                “{caption}”
              </blockquote>
            ) : (
              <p className="border-t border-card-border px-5 py-4 text-sm leading-relaxed text-muted">
                {caption}
              </p>
            ))}
          <Dialog.Close
            aria-label="Close"
            suppressHydrationWarning
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground transition-colors hover:text-pink"
          >
            <X size={18} weight="bold" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
