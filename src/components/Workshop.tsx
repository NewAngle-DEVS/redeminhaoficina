import { ArrowUpRight } from 'lucide-react';
import { company } from '../content';
import { BrandSymbol } from './Brand';

const amenities = [
  { number: '01', title: 'Conecte-se.', description: 'Wi-Fi dispon\u00edvel para voc\u00ea.' },
  { number: '02', title: 'Fique \u00e0 vontade.', description: '\u00c1gua e bebidas enquanto espera.' },
  { number: '03', title: 'Sinta-se em casa.', description: 'Um ambiente confort\u00e1vel para receber voc\u00ea.' },
];

export default function Workshop() {
  return (
    <section id="oficina" className="workshop" tabIndex={-1} aria-labelledby="workshop-title">
      <BrandSymbol className="workshop-watermark" />
      <div className="workshop-inner section-shell">
        <div className="workshop-copy">
          <p className="eyebrow"><span className="eyebrow-line" />{'BEM-VINDO \u00c0 MINHA OFICINA'}</p>
          <h2 id="workshop-title">{'O cuidado vai'}<br />{'al\u00e9m do '}<em>{'cap\u00f4.'}</em></h2>
          <p>{'Seu carro recebe aten\u00e7\u00e3o. Voc\u00ea tamb\u00e9m. Um espa\u00e7o para esperar com conforto, aqui em Limeira.'}</p>
          <a className="text-link" href={company.instagram} target="_blank" rel="noopener noreferrer">{'Veja a oficina no Instagram'}<ArrowUpRight size={19} aria-hidden="true" /></a>
        </div>
        <figure className="workshop-mascot">
          <img src={`${import.meta.env.BASE_URL}images/mascote-oficial.jpeg`} alt="Mascote oficial da Minha Oficina, com uniforme azul e laranja." width="508" height="1280" loading="lazy" decoding="async" />
          <figcaption>É bom ter com quem contar.</figcaption>
        </figure>
        <ol className="amenities">
          {amenities.map(amenity => <li key={amenity.number}><span className="amenity-number">{amenity.number}</span><div><h3>{amenity.title}</h3><p>{amenity.description}</p></div></li>)}
        </ol>
      </div>
      <div className="workshop-road" aria-hidden="true"><span /><span /><span /></div>
    </section>
  );
}
