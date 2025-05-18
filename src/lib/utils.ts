
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function setupTimelineAnimation() {
  const timeline = document.querySelector('.timeline-container');
  if (!timeline) return;
  
  const timelineLine = document.querySelector('.timeline-line');
  if (!timelineLine) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        timelineLine.classList.add('timeline-line-grow');
        
        const items = document.querySelectorAll('.timeline-item');
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('timeline-item-visible');
          }, 300 * (index + 1));
        });
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(timeline);
}
