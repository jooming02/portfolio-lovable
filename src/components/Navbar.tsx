import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import GradientText from "@/components/ui/TextAnimations/GradientText";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Handle scroll event to update active section and navbar style
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        // Get the top position and height of each section
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition <= sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // in each section, we have set the id attribute to match the navItems id
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-6",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4"
      )}
    >
      {/* justify-between space out the child, first on left, last on right, and space in between is evenly distributed */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          <GradientText
            animationSpeed={5}
            className="text-xl md:text-2xl font-bold text-gradient"
          >
            Portfolio
          </GradientText>
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} strokeWidth={2} />
          ) : (
            <Menu size={24} strokeWidth={2} />
          )}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm transition-colors",
                    activeSection !== item.id &&
                      "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {activeSection === item.id ? (
                    <GradientText className="font-medium text-sm">
                      {item.label}
                    </GradientText>
                  ) : (
                    item.label
                  )}
                </button>
              </li>
            ))}
          </ul>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[62px] bg-background/75 backdrop-blur-sm z-50 animate-fade-in">
            <nav className="h-full flex flex-col p-8">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "px-4 py-3 w-full text-left rounded-md text-lg transition-colors",
                        activeSection === item.id
                          ? "text-primary font-medium bg-accent/50"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex justify-end">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
