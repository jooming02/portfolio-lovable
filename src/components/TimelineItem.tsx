import { Building2 } from "lucide-react";
import { gradientTextColors } from "@/lib/colors";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { ExperienceImage } from "@/types/portfolio";

interface TimelineItemProps {
  date: string;
  title: string;
  company?: string;
  companyLogo?: string;
  description: string[];
  images?: ExperienceImage[];
  skills?: string[];
}

/** Card content for a single experience entry — used inside Aceternity <Timeline> */
const TimelineItem = ({
  title,
  company,
  companyLogo,
  description,
  images,
  skills,
}: TimelineItemProps) => {
  const hasImages = images && images.length > 0;
  const hasSkills = skills && skills.length > 0;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/50",
        "bg-background/30 backdrop-blur-sm",
        "transition-all duration-300",
        "hover:border-primary/20 hover:bg-background/45",
        "hover:shadow-[0_8px_40px_-16px_hsl(var(--primary)/0.2)]"
      )}
    >
      {/* Top edge highlight on hover — ties to GradientText palette */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      {/* Left accent rail — amber → violet, dossier / credential feel */}
      <div
        className="pointer-events-none absolute bottom-5 left-0 top-5 w-[2px] rounded-full opacity-70"
        style={{
          background: `linear-gradient(to bottom, ${gradientTextColors[0]}99, ${gradientTextColors[1]}80, transparent)`,
        }}
        aria-hidden
      />

      <div className="flex flex-col gap-4 p-5 pl-6 md:p-6 md:pl-7">
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-start gap-3">
            {companyLogo && (
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white p-2"
              >
                <img
                  src={encodeURI(companyLogo)}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            )}
            <div className="min-w-0">
              <h3 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {title}
              </h3>
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
                  variant="secondary"
                  className="text-xs font-medium"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          )}

          {/* <p className="mt-2 text-sm text-card-foreground/80">{description}</p> */}
          <ul className="mt-4 space-y-2.5">
            {description.map((point, index) => (
              <li
                key={index}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
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

          {/* Photos from public/experience/ — grid below role + bullets */}
          {hasImages && (
            <div
              className={cn(
                "mt-5 grid gap-3",
                images.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"
              )}
            >
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-lg border border-border/40 bg-muted/10"
                >
                  <img
                    src={encodeURI(image.src)}
                    alt={image.alt ?? `${title} photo ${index + 1}`}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:h-48"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default TimelineItem;
