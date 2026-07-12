import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Building2, X } from "lucide-react";
import { gradientTextColors } from "@/lib/colors";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/motion/Reveal";
import type { ExperienceImage } from "@/types/portfolio";

interface TimelineItemProps {
  date: string;
  title: string;
  company?: string;
  companyLogo?: string;
  type?: "work" | "education";
  description: string[];
  images?: ExperienceImage[];
  skills?: string[];
}

/** Card content for a single experience entry — used inside Aceternity <Timeline> */
const TimelineItem = ({
  title,
  company,
  companyLogo,
  type = "work",
  description,
  images,
  skills,
}: TimelineItemProps) => {
  const isEducation = type === "education";
  const hasImages = images && images.length > 0;
  const hasSkills = skills && skills.length > 0;
  const [lightbox, setLightbox] = useState<ExperienceImage | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

  return (
    <>
      <Reveal variant="fadeUp">
        <article
          className={cn(
            "group relative overflow-hidden rounded-xl border backdrop-blur-sm transition-all duration-300",
            isEducation
              ? "border-border/30 bg-background/20 hover:border-border/45 hover:bg-background/30"
              : "border-border/50 bg-background/30 hover:border-primary/20 hover:bg-background/45 hover:shadow-[0_8px_40px_-16px_hsl(var(--primary)/0.2)]"
          )}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />

          <div className="flex flex-col gap-3 p-4 pl-4 sm:gap-4 sm:p-5 md:p-6 md:pl-7">
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex items-start gap-2.5 sm:gap-3">
                {companyLogo && (
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 sm:h-14 sm:w-14 sm:p-2"
                  >
                    <img
                      src={encodeURI(companyLogo)}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl md:text-2xl">
                      {title}
                    </h3>
                    {isEducation && (
                      <Badge
                        variant="outline"
                        className="border-primary/25 bg-primary/5 text-xs font-medium text-muted-foreground"
                      >
                        Education
                      </Badge>
                    )}
                  </div>
                  {company && (
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                      {!companyLogo && (
                        <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      )}
                      <span>{company.trim()}</span>
                    </p>
                  )}
                  <div
                    className="mt-2 h-[2px] w-12 rounded-full opacity-90"
                    style={{
                      background: `linear-gradient(to right, ${gradientTextColors[0]}, ${gradientTextColors[1]})`,
                    }}
                    aria-hidden
                  />
                </div>
              </div>

              {hasSkills && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-primary/20 bg-primary/5 text-xs font-medium text-foreground/90"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}

              {/* <p className="mt-2 text-sm text-card-foreground/80">{description}</p> */}
              <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
                {description.map((point, index) => (
                  <li
                    key={index}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground sm:gap-3"
                  >
                    <span
                      className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${gradientTextColors[0]}, ${gradientTextColors[1]})`,
                      }}
                      aria-hidden
                    />
                    <span>{point.trim()}</span>
                  </li>
                ))}
              </ul>

              {hasImages && (
                <div
                  className={cn(
                    "mt-5 grid gap-3",
                    images.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"
                  )}
                >
                  {images.map((image, index) => {
                    const caption = image.alt;
                    return (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setLightbox(image)}
                        className={cn(
                          "group/img overflow-hidden rounded-lg border border-border/40 bg-muted/10 text-left transition-colors",
                          "hover:border-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        )}
                      >
                        {/* Fixed height for all tiles — portrait crops to match landscape; full image in lightbox */}
                        <div className="relative h-36 sm:h-44 md:h-48">
                          <img
                            src={encodeURI(image.src)}
                            alt={caption ?? `${title} photo ${index + 1}`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-[1.02]"
                          />
                          {caption && (
                            <div className="absolute inset-x-0 bottom-0 px-3 pb-2.5 pt-8">
                              <div
                                className="pointer-events-none absolute inset-0"
                                style={{
                                  background:
                                    "radial-gradient(ellipse 90% 130% at 50% 100%, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 42%, transparent 72%)",
                                }}
                                aria-hidden
                              />
                              <p className="relative text-xs font-medium leading-snug text-gray-200 line-clamp-2">
                                {caption}
                              </p>
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </article>
      </Reveal>

      {lightbox &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close preview"
            >
              <X className="h-6 w-6" />
            </button>
            <div
              className="relative flex w-full max-w-5xl flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative inline-block max-h-[85vh] max-w-full">
                <img
                  src={encodeURI(lightbox.src)}
                  alt={lightbox.alt ?? title}
                  className="block max-h-[85vh] max-w-full object-contain"
                />
                {lightbox.alt && (
                  <div className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-10">
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse 80% 140% at 50% 100%, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 45%, transparent 75%)",
                      }}
                      aria-hidden
                    />
                    <p className="relative text-center text-sm font-medium text-gray-200">
                      {lightbox.alt}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default TimelineItem;
