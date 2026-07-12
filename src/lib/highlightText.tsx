import type { ReactNode } from "react";
import type { AboutHighlight } from "@/types/portfolio";
import { cn } from "@/lib/utils";

const variantClass: Record<NonNullable<AboutHighlight["variant"]>, string> = {
  emphasis: "font-medium text-foreground",
  accent: "font-medium text-primary",
};

/**
 * Split `text` by highlight phrases (longest match first) and wrap matches.
 * Controlled entirely by the highlights config — no hardcoding in the section.
 */
export function highlightText(
  text: string,
  highlights: AboutHighlight[] = [],
): ReactNode {
  if (!highlights.length) return text;

  const sorted = [...highlights].sort(
    (a, b) => b.text.length - a.text.length,
  );
  const escaped = sorted.map((h) =>
    h.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const match = sorted.find((h) => h.text === part);
    if (!match) return part;

    return (
      <span
        key={`${match.text}-${index}`}
        className={cn(variantClass[match.variant ?? "emphasis"])}
      >
        {part}
      </span>
    );
  });
}
