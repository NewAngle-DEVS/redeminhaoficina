import { ArrowUpRight, MapPin, Plus } from 'lucide-react';
import { company, questions, whatsappLink } from '../content';
import LinkButton from './LinkButton';

export function Contact() {
  return (
    <section id="contato" className="contact" tabIndex={-1} aria-labelledby="contact-title">
      <div className="contact-inner section-shell">
        <div className="contact-copy">
          <p className="eyebrow"><span className="eyebrow-line" />{'O SEU PR\u00d3XIMO QUIL\u00d4METRO'}</p>
          <h2 id="contact-title">{'Pode chegar.'}<br />{'A gente '}<em>{'cuida.'}</em></h2>
          <p>{'Uma conversa, uma visita, um cuidado a mais com seu carro.'}</p>
          <LinkButton href={whatsappLink()}>{'Conversar no WhatsApp'}</LinkButton>
        </div>
        <div className="contact-details">
          <div className="contact-phone"><p className="contact-label">{'AGENDAMENTOS E D\u00daVIDAS'}</p><a href={`tel:${company.telephone}`}>19 3704-1213<ArrowUpRight size={29} strokeWidth={1.4} aria-hidden="true" /></a><p>{'WhatsApp e telefone'}</p></div>
          <div className="contact-address"><p className="contact-label"><MapPin size={15} aria-hidden="true" />{'ENCONTRE A MINHA OFICINA'}</p><address>{company.street}<br />{company.district} &middot; {company.city}<br />{company.postcode}</address><a className="text-link" href={company.maps} target="_blank" rel="noopener noreferrer">{'Abrir rota no Google Maps'}<ArrowUpRight size={18} aria-hidden="true" /></a></div>
          <div className="contact-hours"><h3>Horário de atendimento</h3><p><span>Segunda a quinta-feira</span><strong>7h30 às 17h30</strong></p><p><span>Sexta-feira</span><strong>7h30 às 16h30</strong></p><small>Combine sua visita pelo WhatsApp.</small></div>
        </div>
      </div>
    </section>
  );
}

export function Questions() {
  return (
    <section className="questions section-shell" aria-labelledby="questions-title">
      <div><p className="eyebrow"><span className="eyebrow-line" />{'BOM SABER'}</p><h2 id="questions-title">{'Antes de vir.'}</h2></div>
      <div className="question-list">
        {questions.map(item => <details className="question" key={item.question}><summary><span>{item.question}</span><Plus size={21} strokeWidth={1.4} aria-hidden="true" /></summary><div className="question-answer"><p>{item.answer}</p></div></details>)}
      </div>
    </section>
  );
}
