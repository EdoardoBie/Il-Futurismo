import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins globally
gsap.registerPlugin(ScrollTrigger);

export const splitTextAnimation = (element: HTMLElement | null) => {
  if (!element) return;
  // A simple approximation of split-text logic since we don't have the paid SplitText plugin
  // In a real app, we would wrap chars in spans.
  gsap.fromTo(element, 
    { y: 100, opacity: 0, skewY: 10 },
    { 
      y: 0, 
      opacity: 1, 
      skewY: 0,
      duration: 1.2, 
      ease: "power4.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%"
      }
    }
  );
};

export { gsap, ScrollTrigger };