import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import { BackgroundGradientAnimation } from "@/components/ui/Backgrounds/BackgroundGradientAnimation";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-accent/30 relative">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(20, 20, 0)"
        gradientBackgroundEnd="rgb(30, 30, 0)"
        firstColor="255, 255, 0"
        secondColor="255, 215, 0"
        thirdColor="255, 165, 0"
        fourthColor="255, 140, 0"
        size="17%"
        fullHeight={false}
        containerClassName="absolute inset-0 opacity-15"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a question or want to work together? Send me a message!"
          />

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6" data-animate="true">
              <div>
                <h3 className="text-xl font-medium mb-2">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out through the form or directly via email.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <span>laujm02@hotmail.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <LinkedInIcon className="h-4 w-4" />
                  </Button>
                  <a
                    href="https://www.linkedin.com/in/joo-ming-lau-974804235/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/laujooming
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <GitHubIcon className="h-4 w-4" />
                  </Button>
                  <a
                    href="https://github.com/jooming02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/jooming02
                  </a>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
};

export default ContactSection;
