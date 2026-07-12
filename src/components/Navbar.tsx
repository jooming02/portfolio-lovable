import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import GradientText from "@/components/effects/text/GradientText";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const menuList = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const menuItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: 0.2, ease },
  },
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    // in each section, we have set the id attribute to match the navItems id
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full px-4 transition-all duration-300 md:px-6",
          isMobileMenuOpen
            ? "bg-background py-3 shadow-sm"
            : isScrolled
              ? "bg-background/80 py-3 shadow-sm backdrop-blur-md"
              : "bg-transparent py-4",
        )}
      >
        {/* justify-between space out the child, first on left, last on right, and space in between is evenly distributed */}
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <GradientText
              animationSpeed={5}
              className="font-display text-xl font-bold text-gradient md:text-2xl"
            >
              Portfolio
            </GradientText>
          </a>

          {/* Mobile menu button */}
          <button
            className="rounded-md p-2 hover:bg-accent md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>

          {/* Desktop menu */}
          <nav className="hidden items-center space-x-1 md:flex">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm transition-colors",
                      activeSection !== item.id &&
                        "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )}
                  >
                    {activeSection === item.id ? (
                      <GradientText className="font-display text-sm font-medium">
                        {item.label}
                      </GradientText>
                    ) : (
                      item.label
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Editorial full-screen menu — opaque base + atmospheric depth */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col overflow-hidden md:hidden"
            style={{ backgroundColor: "hsl(var(--background))" }}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease }}
          >
            {/* Atmosphere — opaque color layers, not see-through blur */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 50% at 100% 0%, hsl(265 80% 60% / 0.14), transparent 55%), radial-gradient(ellipse 60% 40% at 0% 100%, hsl(240 40% 20%), transparent 50%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />

            <nav
              className="relative z-10 flex flex-1 flex-col justify-center px-8 pb-12 pt-[72px]"
              aria-label="Mobile"
            >
              <motion.ul
                className="flex flex-col gap-1"
                variants={prefersReducedMotion ? undefined : menuList}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      variants={prefersReducedMotion ? undefined : menuItem}
                    >
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="group flex w-full items-baseline gap-4 py-3 text-left"
                      >
                        <span
                          className={cn(
                            "font-mono text-xs tracking-widest transition-colors",
                            isActive
                              ? "text-primary"
                              : "text-muted-foreground/70 group-hover:text-muted-foreground",
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="relative">
                          {isActive ? (
                            <GradientText className="font-display text-4xl font-semibold leading-none tracking-tight">
                              {item.label}
                            </GradientText>
                          ) : (
                            <span className="font-display text-4xl font-semibold leading-none tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">
                              {item.label}
                            </span>
                          )}
                          {isActive && (
                            <span
                              aria-hidden
                              className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-primary to-primary/20"
                            />
                          )}
                        </span>
                      </button>
                    </motion.li>
                  );
                })}
              </motion.ul>

              <motion.p
                className="mt-auto pt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60"
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                Lau Joo Ming — Portfolio
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
