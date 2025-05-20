
import { useEffect } from "react";
import { setupTimelineAnimation } from "@/lib/utils";

export const useAnimations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('[data-animate="true"]');
    animatedElements.forEach((el) => observer.observe(el));

    // Setup timeline animation
    setupTimelineAnimation();

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useAnimations;
