"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import { useState, type ReactNode } from "react";

function getHostname(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

// Favicons are self-hosted under /public/favicons, named after the stripped
// hostname — so a link to a domain with no icon on disk just falls through to
// the globe rather than needing a lookup table kept in sync by hand.
const DOMAIN = /^[a-z0-9-]+(\.[a-z0-9-]+)+$/i;

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
  const [iconMissing, setIconMissing] = useState(false);
  const showFavicon = DOMAIN.test(hostname) && !iconMissing;

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
          {showFavicon ? (
            // next/image adds nothing for a fixed 14px icon under
            // `images.unoptimized` — it emits the same tag, minus the onError
            // fallback path this needs.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`/favicons/${hostname}.png`}
              alt=""
              width={14}
              height={14}
              decoding="async"
              className="rounded-sm"
              onError={() => setIconMissing(true)}
            />
          ) : (
            <Globe size={14} weight="bold" aria-hidden="true" className="shrink-0" />
          )}
          <span>{hostname}</span>
          <Tooltip.Arrow className="fill-card" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
