import { ArrowDown, ShieldCheck } from 'lucide-react';
import LinkButton from './LinkButton';
import { whatsappLink } from '../content';

export default function Hero() {
  return (
    <section id="inicio" className="welcome" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="welcome-inner section-shell">
        <div className="welcome-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> MINHA OFICINA · LIMEIRA, SP</p>
          <h1 id="hero-title">Seu carro.<br />Nossa dedicação.<br /><em>Uma relação de confiança.</em></h1>
          <p className="welcome-description">Da revisão à manutenção, cuidado em cada detalhe e uma equipe pronta para receber você.</p>
          <div className="welcome-actions"><LinkButton href={whatsappLink()} variant="gold">Agendar pelo WhatsApp</LinkButton><a href="#historia" className="text-link">Conheça nossa história <ArrowDown size={17} /></a></div>
          <div className="welcome-signature"><ShieldCheck size={21} strokeWidth={1.5} /><span>Eficiência, segurança e cuidado de verdade.</span></div>
        </div>
        <figure className="mascot-portrait">
          <div className="mascot-label"><span className="live-dot" /> PODE CHEGAR. A GENTE CUIDA.</div>
          <img src={`${import.meta.env.BASE_URL}images/mascote-oficial.jpeg`} alt="Mascote da Minha Oficina, com boné azul e macacão com o símbolo da marca." width="508" height="1280" fetchPriority="high" />
          <figcaption><span>É bom ter com quem contar.</span><strong>A sua nova mecânica.</strong></figcaption>
        </figure>
      </div>
      <div className="welcome-strip"><span>REVISÃO AUTOMOTIVA</span><i /><span>MANUTENÇÃO MECÂNICA</span><i /><span>CUIDADO PREVENTIVO</span></div>
    </section>
  );
}
