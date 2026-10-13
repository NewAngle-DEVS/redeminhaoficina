import { HeartHandshake, MapPin, ShieldCheck } from 'lucide-react';
import { whatsappLink } from '../content';
import LinkButton from './LinkButton';

const principles = [
  { icon: ShieldCheck, title: 'Missão', text: 'Nosso compromisso é assegurar a completa satisfação do cliente, cuidando meticulosamente de cada detalhe para resolver seus problemas com máxima eficiência e segurança, reforçando assim a confiança em nossa excelência.' },
  { icon: MapPin, title: 'Visão', text: 'Almejamos ser a principal referência no setor automotivo em nossa cidade, região e em todo o território nacional, impulsionando o padrão de qualidade e serviço no segmento.' },
  { icon: HeartHandshake, title: 'Valores', text: 'Valorizamos profundamente a construção de relações pautadas na confiança e equilíbrio com nossos clientes, parceiros, fornecedores e toda a nossa equipe, visando uma colaboração mútua e duradoura.' },
];

export default function History() {
  return (
    <section id="historia" className="history section-shell" aria-labelledby="history-title" tabIndex={-1}>
      <div className="history-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> NOSSA HISTÓRIA</p>
        <h2 id="history-title">Um sonho de pai e filho.<br /><em>Uma história de confiança.</em></h2>
      </div>

      <p className="history-lead">Toda grande história começa com um sonho, e a nossa começou com a união de um pai e um filho.</p>

      <div className="history-body">
        <div className="history-story-column">
          <p>Em 2023, nasceu em Limeira a Minha Oficina, idealizada por Pedro Marochitte e Mateus Marochitte, com o propósito de construir muito mais do que uma oficina mecânica: um espaço familiar, moderno e preparado para oferecer soluções automotivas com tecnologia, conhecimento e confiança.</p>
          <p>Desde pequeno, Mateus sempre teve uma paixão especial por carros. Com o passar dos anos, essa paixão se transformou em um objetivo de vida, que o levou a se dedicar aos estudos até conquistar, com muito esforço e determinação, seu diploma em Engenharia. Essa trajetória fortaleceu ainda mais o propósito da oficina: unir a paixão pelo mundo automotivo ao conhecimento técnico e à busca constante por inovação.</p>
          <p>Logo no início dessa caminhada, conquistamos uma parceria fundamental para o crescimento da empresa. Com ela, vieram novas oportunidades, mais conhecimento e a confiança de novos clientes, contribuindo para a construção da história que seguimos escrevendo todos os dias.</p>
        </div>
        <div className="history-story-column">
          <p>Hoje, continuamos trabalhando para oferecer aos nossos clientes uma experiência que vai além do conserto de um veículo. Prezamos por um atendimento atencioso, transparência, organização, infraestrutura adequada e equipamentos próprios, buscando entregar qualidade e segurança em cada serviço realizado.</p>
          <p>Sabemos que o setor automotivo está em constante evolução. Por isso, seguimos estudando, nos aperfeiçoando e investindo em conhecimento e tecnologia, porque acreditamos que cuidar bem do seu veículo também significa estar sempre preparado para os desafios de amanhã.</p>
          <p>Mais do que cuidar de carros, queremos construir relações de confiança. Cada cliente que entra pela nossa porta passa a fazer parte da nossa história, e é essa confiança que nos motiva a evoluir e dar sempre o nosso melhor.</p>
        </div>
      </div>

      <div className="history-invite">
        <div>
          <p>A nossa trajetória está apenas começando, e será um prazer ter você fazendo parte dela.</p>
          <strong>Seja bem-vindo à Minha Oficina!</strong>
        </div>
        <div>
          <p>Agende seu horário e venha conhecer nosso trabalho. Será um prazer cuidar do seu veículo.</p>
          <LinkButton href={whatsappLink()}>Agendar pelo WhatsApp</LinkButton>
        </div>
      </div>

      <ol className="history-timeline">
        <li><span>2023</span><h3>Um sonho em família</h3><p>Pedro e Mateus Marochitte fundam a Minha Oficina em Limeira.</p></li>
        <li><span>CONHECIMENTO</span><h3>Paixão que virou profissão</h3><p>Mateus une sua formação em Engenharia ao cuidado automotivo.</p></li>
        <li><span>O NOSSO CAMINHO</span><h3>Sempre em evolução</h3><p>Tecnologia, estrutura e atendimento próximo para conquistar confiança.</p></li>
      </ol>

      <aside className="partner-card" aria-label="Parceria com a Localiza"><img className="partner-card-logo" src={`${import.meta.env.BASE_URL}images/localiza-logo.png`} alt="Localiza" width="400" height="200" loading="lazy" /><div className="partner-card-copy"><p className="partner-card-kicker">PARCERIA HÁ 3 ANOS</p><h3>Cuidado para cada viagem.</h3><p>Manutenção geral e revisões dos veículos da Localiza.</p></div></aside>
      <div className="principles" aria-label="Missão, visão e valores">{principles.map(({ icon: Icon, title, text }) => <article className="principle" key={title}><Icon size={34} strokeWidth={1.4} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
  );
}
