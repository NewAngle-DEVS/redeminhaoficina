import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function PageMotion() {
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const targets = gsap.utils.toArray<HTMLElement>('.history-heading, .history-body, .history-timeline li, .principle, .services-heading, .service-row, .service-photo, .workshop-copy, .amenities li, .process-heading, .process-steps li, .contact-copy, .contact-details, .questions > div');
      targets.forEach(element => {
        gsap.from(element, { y: 32, opacity: 0, duration: .85, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 94%', once: true }, clearProps: 'transform,opacity' });
      });
    });
    return () => media.revert();
  }, []);
  return null;
}
