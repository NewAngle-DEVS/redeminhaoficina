import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whatsappLink } from '../content';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { number: '01', title: 'Conte pra gente.', description: 'Envie o modelo do seu carro e o motivo da visita pelo WhatsApp.' },
  { number: '02', title: 'Combine sua visita.', description: 'Consulte a disponibilidade e as orienta\u00e7\u00f5es com a equipe.' },
  { number: '03', title: 'Venha para a oficina.', description: 'Traga seu carro e converse sobre a revis\u00e3o ou manuten\u00e7\u00e3o.' },
];

export default function Process() {
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      const line = section.current?.querySelector('.process-line-fill');
      if (line) gsap.fromTo(line, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: section.current, start: 'top 80%', end: 'bottom 75%', scrub: 0.5 } });
    });
    return () => media.revert();
  }, []);

  return (
    <section className="process section-shell" ref={section} aria-labelledby="process-title">
      <div className="process-heading">
        <div><p className="eyebrow"><span className="eyebrow-line" />{'SIMPLES, DESDE O IN\u00cdCIO'}</p><h2 id="process-title">{'Come\u00e7a com'}<br />{'uma conversa.'}</h2></div>
        <a className="text-link" href={whatsappLink()} target="_blank" rel="noopener noreferrer">{'Vamos dar o primeiro passo'}<ArrowUpRight size={19} aria-hidden="true" /></a>
      </div>
      <div className="process-track">
        <span className="process-line" aria-hidden="true"><span className="process-line-fill" /></span>
        <ol className="process-steps">
          {steps.map(step => <li key={step.number}><span className="process-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}
        </ol>
      </div>
    </section>
  );
}