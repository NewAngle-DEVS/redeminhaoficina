import { useEffect } from 'react';
import Header from './components/Header';
import PageMotion from './components/PageMotion';
import Hero from './components/Hero';
import History from './components/History';
import Services from './components/Services';
import Workshop from './components/Workshop';
import Process from './components/Process';
import { Contact, Questions } from './components/Contact';
import Footer from './components/Footer';
import Brand from './components/Brand';
import LinkButton from './components/LinkButton';
import { whatsappLink } from './content';

function NotFound() {
  useEffect(() => {
    document.title = 'P\u00e1gina n\u00e3o encontrada | Minha Oficina';
    document.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex, follow');
  }, []);
  return (
    <main className="not-found section-shell">
      <a href={import.meta.env.BASE_URL} className="brand-link" aria-label={'Minha Oficina, p\u00e1gina inicial'}><Brand /></a>
      <p className="eyebrow">{'CAMINHO N\u00c3O ENCONTRADO / 404'}</p>
      <h1>{'Vamos voltar'}<br />{'para a rota?'}</h1>
      <p>{'Esta p\u00e1gina n\u00e3o est\u00e1 por aqui. A Minha Oficina continua a um clique de dist\u00e2ncia.'}</p>
      <div className="not-found-actions"><LinkButton href={import.meta.env.BASE_URL} external={false}>{'Voltar ao in\u00edcio'}</LinkButton><LinkButton href={whatsappLink()} variant="outline">{'Falar com a oficina'}</LinkButton></div>
    </main>
  );
}

export default function App() {
  const path = window.location.pathname;
  const base = import.meta.env.BASE_URL;
  if (path !== base && path !== base + 'index.html' && path !== base.replace(/\/$/, '')) return <NotFound />;

  return (
    <>
      <a href="#conteudo" className="skip-link">{'Pular para o conte\u00fado'}</a>
      <Header /><PageMotion />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <History />
        <Services />
        <Workshop />
        <Process />
        <Contact />
        <Questions />
      </main>
      <Footer />
    </>
  );
}


