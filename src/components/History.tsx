import { ArrowUpRight, HeartHandshake, MapPin, ShieldCheck } from 'lucide-react';
import { whatsappLink } from '../content';
const principles = [
  { icon: ShieldCheck, title: 'Missão', text: 'Nosso compromisso é assegurar a completa satisfação do cliente, cuidando meticulosamente de cada detalhe para resolver seus problemas com máxima eficiência e segurança, reforçando assim a confiança em nossa excelência.' },
  { icon: MapPin, title: 'Visão', text: 'Almejamos ser a principal referência no setor automotivo em nossa cidade, região e em todo o território nacional, impulsionando o padrão de qualidade e serviço no segmento.' },
  { icon: HeartHandshake, title: 'Valores', text: 'Valorizamos profundamente a construção de relações pautadas na confiança e equilíbrio com nossos clientes, parceiros, fornecedores e toda a nossa equipe, visando uma colaboração mútua e duradoura.' },
];
export default function History() {
  return (
    <section id="historia" className="history section-shell" aria-labelledby="history-title" tabIndex={-1}>
      <div className="history-heading"><p className="eyebrow"><span className="eyebrow-line" /> NOSSA HISTÓRIA</p><h2 id="history-title">Começamos com um plano.<br /><em>Crescemos com confiança.</em></h2></div>
      <div className="history-body"><p>A Minha Oficina começou sua trajetória em Limeira em 2023, depois de muito estudo e planejamento. No início, um dos sócios assumiu a mecânica. Com o crescimento, chegou um jovem auxiliar, formando uma equipe alinhada ao nosso jeito de cuidar.</p><p>No primeiro ano, ampliamos a equipe e o espaço e investimos em ferramentas e equipamentos. Cada passo fortaleceu o que nos move desde o começo: uma oficina organizada, relações duradouras e atenção às pessoas e aos seus carros.</p></div>
      <ol className="history-timeline"><li><span>2023</span><h3>O começo de tudo</h3><p>Planejamento que virou oficina, aqui em Limeira.</p></li><li><span>2024</span><h3>Espaço para crescer</h3><p>Mais estrutura, novas parcerias e uma equipe em expansão.</p></li><li><span>NOSSO CAMINHO</span><h3>O cuidado continua</h3><p>Confiança construída em cada conversa e em cada serviço.</p></li></ol>
      <aside className="partner-card" aria-label="Parceria com a Localiza"><img className="partner-card-logo" src={`${import.meta.env.BASE_URL}images/localiza-logo.png`} alt="Localiza" width="400" height="200" loading="lazy" /><div className="partner-card-copy"><p className="partner-card-kicker">PARCERIA HÁ 3 ANOS</p><h3>Cuidado para cada viagem.</h3><p>Manutenção geral e revisões dos veículos da Localiza.</p></div><a className="partner-card-link" href={whatsappLink('Olá, Minha Oficina! Gostaria de conversar sobre manutenção ou revisão do meu carro.')} target="_blank" rel="noopener noreferrer">Enviar no WhatsApp <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" /></a></aside>
      <div className="principles" aria-label="Missão, visão e valores">{principles.map(({ icon: Icon, title, text }) => <article className="principle" key={title}><Icon size={34} strokeWidth={1.4} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
  );
}
