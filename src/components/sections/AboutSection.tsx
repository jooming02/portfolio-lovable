
import SectionHeading from "@/components/SectionHeading";
import { about } from "@/data/about";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Learn more about my background and approach to development"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center" data-animate="true">
          <div className="space-y-4">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary via-primary/60 to-primary/20 flex items-center justify-center">
              <div className="w-60 h-60 rounded-full bg-background flex items-center justify-center text-7xl">
                <img
                  src={about.profileImage}
                  alt={about.profileAlt}
                  className="w-56 h-56 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
