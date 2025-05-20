
import SectionHeading from "@/components/SectionHeading";

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
            <p>
              Hi, I'm a passionate web developer with 5+ years of experience building modern web applications. 
              My journey in tech started when I built my first website at the age of 15, 
              and I've been hooked on creating digital experiences ever since.
            </p>
            <p>
              I specialize in React, TypeScript, and modern frontend frameworks, 
              but I'm also comfortable working with backend technologies. 
              I love learning new technologies and techniques to improve my craft.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-60 h-60 rounded-full bg-gradient-to-br from-primary via-primary/60 to-primary/20 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full bg-background flex items-center justify-center text-7xl">
                👩‍💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
