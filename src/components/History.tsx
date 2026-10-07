import { HeartHandshake, MapPin, ShieldCheck } from 'lucide-react';
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
      <aside className="partner-card" aria-label="Parceria com a Localiza"><div><p className="eyebrow"><span className="eyebrow-line" /> PARCERIA DE CONFIANÇA</p><h3>Há 3 anos, parceira da <em>Localiza.</em></h3><p>Atendemos veículos da Localiza com manutenção geral e revisões, levando o mesmo cuidado em cada detalhe do serviço.</p></div><span className="partner-card-mark" aria-hidden="true">03<span>ANOS</span></span></aside>
      <div className="principles" aria-label="Missão, visão e valores">{principles.map(({ icon: Icon, title, text }) => <article className="principle" key={title}><Icon size={34} strokeWidth={1.4} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
  );
}
