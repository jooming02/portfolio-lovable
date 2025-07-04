import SectionHeading from "@/components/SectionHeading";
import { BackgroundGradientAnimation } from "@/components/ui/Backgrounds/BackgroundGradientAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-accent/30 relative">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(15, 15, 15)"
        gradientBackgroundEnd="rgb(25, 25, 25)"
        firstColor="139, 69, 19"
        secondColor="255, 165, 0"
        thirdColor="255, 215, 0"
        fourthColor="205, 133, 63"
        size="15%"
        fullHeight={false}
        containerClassName="absolute inset-0 opacity-20"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            title="About Me"
            subtitle="Learn more about my background and approach to development"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center" data-animate="true">
            <div className="space-y-4">
              <p>
                Hi, I'm a passionate frontend developer with a degree in Computer Science from Asia Pacific University (APU),
                currently working as a Software Developer at Public Bank with a focus on the .NET framework. 
                I'm also former Web Developer Intern at Sunway Group with practical experience in React, Svelte, and modern frontend technologies.
              </p>
              <p>
                I specialize in React, TypeScript, and modern frontend frameworks, 
                but I'm also comfortable working with backend technologies. 
                I love learning new technologies and techniques to improve my craft.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary via-primary/60 to-primary/20 flex items-center justify-center">
                <div className="w-60 h-60 rounded-full bg-background flex items-center justify-center text-7xl">
                  <img
                    src="/profile/profile.jpeg"
                    alt="My profile"
                    className="w-56 h-56 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
};

export default AboutSection;
