import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import GradientText from "@/components/effects/text/GradientText";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { footer } from "@/data/footer";
import type { FooterSocialLink } from "@/types/portfolio";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const SocialIcon = ({ type }: { type: FooterSocialLink["type"] }) => {
  switch (type) {
    case "github":
      return <GitHubIcon className="h-5 w-5" />;
    case "linkedin":
      return <LinkedInIcon className="h-5 w-5" />;
    case "email":
      return <Mail className="h-5 w-5" />;
  }
};

const columnHeadingClass = "font-display text-xl font-bold mb-4";

const FooterSection = () => {
  return (
    <footer
      id="contact"
      className="relative px-4 md:px-6 pt-16 pb-8 border-t border-border/50 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid gap-8 md:gap-12 md:grid-cols-3 items-start">
          {/* Brand & social */}
          <Reveal variant="fadeUp">
            <h2 className="mb-4">
              <GradientText
                animationSpeed={6}
                className="font-display text-xl font-bold"
              >
                {footer.name}
              </GradientText>
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {footer.bio}
              </p>
              <div className="flex gap-2">
                {footer.socialLinks.map((link) => (
                  <Button
                    key={link.type}
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    asChild
                  >
                    <a
                      href={link.href}
                      {...(link.type !== "email" && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      aria-label={link.label}
                    >
                      <SocialIcon type={link.type} />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal variant="fadeUp" delay={0.1}>
            <h2 className={columnHeadingClass}>Quick Links</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                  >
                    {link.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-primary">
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact */}
          <Reveal variant="fadeUp" delay={0.2}>
            <h2 className={columnHeadingClass}>{footer.contactHeading}</h2>
            <div className="space-y-2">
              {footer.availability.map((line) => (
                <p key={line} className="text-sm text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal variant="fadeIn" delay={0.3}>
          <div className="mt-12 pt-6 border-t border-border/50 text-center space-y-1">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {footer.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Last updated: {footer.lastUpdated}
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default FooterSection;
