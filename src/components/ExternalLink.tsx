"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";

function getHostname(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

export default function ExternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const hostname = getHostname(href);

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
          {children}
        </a>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          sideOffset={8}
          collisionPadding={12}
          className="tooltip-content z-50 flex items-center gap-2 rounded-lg border border-card-border bg-card px-3 py-2 text-xs text-muted shadow-lg"
          style={{ transformOrigin: "var(--radix-tooltip-content-transform-origin)" }}
        >
          <img
            src={`https://www.google.com/s2/favicons?sz=32&domain=${hostname}`}
            alt=""
            width={14}
            height={14}
            className="rounded-sm"
          />
          <span>{hostname}</span>
          <Tooltip.Arrow className="fill-card" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
