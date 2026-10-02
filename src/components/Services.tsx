import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services, whatsappLink, workshopImage } from '../content';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const [active, setActive] = useState<number | null>(0);
  const [photoFailed, setPhotoFailed] = useState(false);
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const image = section.current?.querySelector('.service-photo img');
      if (image) gsap.fromTo(image, { scale: 1.07 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: image, start: 'top bottom', end: 'bottom top', scrub: 0.7 } });
    });
    return () => media.revert();
  }, []);

  return (
    <section id="cuidados" ref={section} className="services section-shell" tabIndex={-1} aria-labelledby="services-title">
      <div className="section-heading services-heading">
        <p className="eyebrow"><span className="eyebrow-line" />{'OS NOSSOS CUIDADOS'}</p>
        <h2 id="services-title">{'O cuidado certo.'}<br /><span className="muted-heading">{'No momento certo.'}</span></h2>
        <p className="section-intro">{'Da revis\u00e3o de rotina \u00e0 aten\u00e7\u00e3o que seu carro est\u00e1 pedindo. Vamos conversar?'}</p>
      </div>
      <div className="services-composition">
        <div className="service-list">
          {services.map((service, index) => (
            <article className={`service-row ${active === index ? 'is-open' : ''}`} key={service.number}>
              <h3>
                <button className="service-toggle" aria-expanded={active === index} aria-controls={`service-description-${index}`} id={`service-heading-${index}`} onClick={() => setActive(active === index ? null : index)}>
                  <span className="service-number">{service.number}</span><span className="service-name">{service.title}</span><Plus size={23} strokeWidth={1.3} aria-hidden="true" />
                </button>
              </h3>
              <div className="service-description" id={`service-description-${index}`} role="region" aria-labelledby={`service-heading-${index}`} inert={active !== index}>
                <div className="service-description-inner">
                  <p>{service.description}</p>
                  <a className="text-link" href={whatsappLink(service.message)} target="_blank" rel="noopener noreferrer">{service.action}<ArrowUpRight size={18} aria-hidden="true" /></a>
                </div>
              </div>
            </article>
          ))}
          <p className="service-note">{'N\u00e3o sabe por onde come\u00e7ar? Conte pra gente o que voc\u00ea percebeu no seu carro.'}</p>
        </div>
        <figure className="service-photo">
          <div className="service-photo-frame">
            <img src={photoFailed ? `${import.meta.env.BASE_URL}images/motor-study.png` : workshopImage.url} width={1200} height={627} alt={photoFailed ? 'Estudo visual ilustrativo de um motor de quatro cilindros.' : workshopImage.alt} loading="lazy" decoding="async" onError={photoFailed ? undefined : () => setPhotoFailed(true)} />
            <span className="photo-corner" aria-hidden="true" />
          </div>
          <figcaption><span>{'Aten\u00e7\u00e3o aos detalhes.'}</span>{photoFailed ? <span>{'Estudo visual ilustrativo'}</span> : <a href={workshopImage.credit} target="_blank" rel="noopener noreferrer">{'Imagem ilustrativa / cottonbro studio'}</a>}</figcaption>
        </figure>
      </div>
    </section>
  );
}
