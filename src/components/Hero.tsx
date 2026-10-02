import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whatsappLink } from '../content';
import LinkButton from './LinkButton';
import MotorScene, { type MotorSceneHandle } from './MotorScene';

gsap.registerPlugin(ScrollTrigger);
const ramp = (value: number, start: number, end: number) => Math.min(1, Math.max(0, (value - start) / (end - start)));
const chapters = ['O conjunto', 'Cada detalhe', 'Seu próximo caminho'];

export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const scene = useRef<MotorSceneHandle>(null);
  const layers = useRef<(HTMLDivElement | null)[]>([]);
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      if (!section.current || !stage.current) return;
      section.current.classList.add('has-scroll-scene');
      const controller = { progress: 0 };
      let lastPhase = 0;
      gsap.to(controller, {
        progress: 1, ease: 'none',
        onUpdate() {
          const p = controller.progress;
          scene.current?.setProgress(p);
          const opacities = [1 - ramp(p, .17, .25), ramp(p, .26, .35) * (1 - ramp(p, .68, .75)), ramp(p, .76, .88)];
          layers.current.forEach((layer, index) => {
            if (!layer) return;
            layer.style.opacity = String(opacities[index]);
            layer.style.transform = `translate3d(0, ${(1 - opacities[index]) * 24}px, 0)`;
          });
          const nextPhase = p < .27 ? 0 : p < .79 ? 1 : 2;
          if (nextPhase !== lastPhase) { setPhase(nextPhase); lastPhase = nextPhase; }
          stage.current?.style.setProperty('--scene-progress', String(p));
        },
        scrollTrigger: { trigger: section.current, start: () => 'top top+=' + getComputedStyle(document.documentElement).getPropertyValue('--header-height'), end: 'bottom bottom', scrub: .65, invalidateOnRefresh: true },
      });
      return () => {
        section.current?.classList.remove('has-scroll-scene');
        layers.current.forEach(layer => { if (layer) { layer.style.removeProperty('opacity'); layer.style.removeProperty('transform'); } });
        scene.current?.setProgress(0); setPhase(0);
      };
    });
    return () => media.revert();
  }, []);
  const explore = () => {
    if (!section.current) return;
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { document.getElementById('cuidados')?.scrollIntoView(); return; }
    const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
    const start = section.current.offsetTop - headerHeight;
    window.scrollTo({ top: start + (section.current.offsetHeight - window.innerHeight + headerHeight) * .53, behavior: 'smooth' });
  };
  return (
    <section id="inicio" ref={section} className="hero" tabIndex={-1} aria-labelledby="hero-title">
      <div ref={stage} className="hero-stage" data-phase={phase}>
        <div className="hero-blueprint" aria-hidden="true"><span /><span /><span /></div>
        <div className="hero-topline" aria-hidden="true"><span>PRECISÃO EM CADA DETALHE</span><span>LIMEIRA, SP / BRASIL</span></div>
        <span className="engine-watermark" aria-hidden="true">ESSÊNCIA.</span>
        <MotorScene ref={scene} />
        <div className="hero-content">
          <div ref={el => { layers.current[0] = el; }} className="hero-layer hero-layer--intro" inert={phase !== 0}>
            <p className="eyebrow hero-eyebrow"><span className="live-dot" /> A SUA NOVA MECÂNICA, EM LIMEIRA.</p>
            <h1 id="hero-title" className="hero-title"><span>Cuidado que</span><span>vem de <em>dentro.</em></span></h1>
            <p className="hero-description">Seu carro tem um coração.<br />A gente cuida de cada detalhe dele.</p>
            <div className="hero-actions">
              <LinkButton href={whatsappLink()} variant="gold">Agendar uma conversa</LinkButton>
              <button className="text-link hero-secondary" onClick={explore}>Explore cada detalhe <ArrowRight size={17} /></button>
            </div>
          </div>
          <div ref={el => { layers.current[1] = el; }} className="hero-layer hero-layer--story" inert={phase !== 1}>
            <p className="eyebrow"><span className="eyebrow-line" /> POR DENTRO DO CUIDADO</p>
            <h2>O todo importa.<br /><em>Cada peça também.</em></h2>
            <p>Um motor é feito de conexões. Um bom cuidado começa entendendo cada uma delas.</p>
            <a className="text-link" href="#cuidados">Conheça nossos cuidados <ArrowUpRight size={18} /></a>
          </div>
          <div ref={el => { layers.current[2] = el; }} className="hero-layer hero-layer--outro" inert={phase !== 2}>
            <p className="eyebrow"><span className="eyebrow-line" /> PRONTO PARA O QUE VEM</p>
            <h2>Mais cuidado.<br /><em>Mais caminho.</em></h2>
            <p>Da revisão à manutenção, seu próximo quilômetro começa com uma boa conversa.</p>
            <LinkButton href={whatsappLink()} variant="gold">Vamos cuidar do seu carro</LinkButton>
          </div>
        </div>
        <div className="engine-annotation" aria-hidden="true"><span className="annotation-dot" /><div><span className="annotation-index">0{phase + 1} / ENGENHARIA DO CUIDADO</span><strong>{['Tudo começa por dentro.', 'Precisão. Peça por peça.', 'Conectados ao seu caminho.'][phase]}</strong></div></div>
        <div className="engine-spec" aria-hidden="true"><span>ESTUDO DE MOTOR</span><strong>04 <span>CILINDROS / EM LINHA</span></strong></div>
        <div className="hero-bottom">
          <button onClick={explore} className="hero-scroll"><span className="scroll-arrow"><ArrowDown size={17} strokeWidth={1.5} /></span><span>ROLE PARA DESCOBRIR</span></button>
          <div className="hero-chapters" aria-label="Etapas da experiência">{chapters.map((chapter, index) => <span key={chapter} className={phase === index ? 'is-active' : ''} aria-current={phase === index ? 'step' : undefined}><b>0{index + 1}</b><span>{chapter}</span></span>)}</div>
          <span className="hero-edition" aria-hidden="true">MINHA OFICINA®</span>
        </div>
        <div className="hero-progress" aria-hidden="true"><span /></div>
      </div>
    </section>
  );
}



