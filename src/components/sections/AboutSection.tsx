import { useMemo } from "react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import Stack from "@/components/effects/Stack/Stack";
import { about } from "@/data/about";

const AboutSection = () => {
  const galleryCards = useMemo(
    () =>
      about.gallery.map((src) => (
        <img key={src} src={src} alt="" className="card-image" />
      )),
    [],
  );

  return (
    <section
      id="about"
      className="relative py-20 px-4 md:px-6 bg-accent/30 overflow-x-clip"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-[10%] top-[15%] h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -right-[5%] top-[20%] h-72 w-72 rounded-full bg-primary/5 blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Learn more about my background and approach to development"
          className="mb-8"
        />

        <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-16 xl:gap-28">
          <Reveal variant="slideRight" className="min-w-0 w-full lg:max-w-[36rem]">
            <div className="space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm md:text-base text-muted-foreground leading-relaxed text-left lg:text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <div
            className="mx-auto w-full max-w-[min(100%,280px)] shrink-0 sm:max-w-[320px] lg:mx-0"
            role="region"
            aria-label="Photo gallery, drag or tap to browse"
          >
            <div className="relative aspect-square w-full rounded-2xl shadow-[0_0_36px_-14px_hsl(var(--primary)/0.5)]">
              <Stack
                randomRotation
                sensitivity={180}
                sendToBackOnClick
                mobileClickOnly
                autoplay
                autoplayDelay={2000}
                pauseOnHover
                cards={galleryCards}
              />
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              <span className="md:hidden">Tap to browse photos</span>
              <span className="hidden md:inline">Drag to explore photos</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
