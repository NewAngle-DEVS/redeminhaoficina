import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { company, navigation, whatsappLink } from '../content';
import Brand from './Brand';
import LinkButton from './LinkButton';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [closing, setClosing] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousOverflow = useRef('');
  const menuOpen = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const desktop = window.matchMedia('(min-width: 901px)');
    const closeOnDesktop = () => {
      if (desktop.matches && menuOpen.current) {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        dialog.current?.close();
        document.body.style.overflow = previousOverflow.current;
        menuOpen.current = false;
        setClosing(false);
      }
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      window.removeEventListener('scroll', onScroll);
      desktop.removeEventListener('change', closeOnDesktop);
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (menuOpen.current) document.body.style.overflow = previousOverflow.current;
    };
  }, []);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (menuOpen.current) return;
    setClosing(false);
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuOpen.current = true;
    dialog.current?.showModal();
  };

  const closeMenu = (hash?: string) => {
    setClosing(true);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    closeTimer.current = setTimeout(() => {
      dialog.current?.close();
      document.body.style.overflow = previousOverflow.current;
      menuOpen.current = false;
      setClosing(false);
      if (hash) {
        window.location.hash = hash;
        document.querySelector<HTMLElement>(hash)?.focus({ preventScroll: true });
      } else trigger.current?.focus({ preventScroll: true });
    }, reduced ? 0 : 200);
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#inicio" className="brand-link" aria-label={'Minha Oficina, voltar ao in\u00edcio'}><Brand /></a>
        <nav className="desktop-navigation" aria-label={'Navega\u00e7\u00e3o principal'}>
          {navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <LinkButton href={whatsappLink()} className="header-contact">{'Vamos conversar'}<span className="sr-only">{' pelo WhatsApp'}</span></LinkButton>
        <button ref={trigger} className="menu-trigger" onClick={openMenu} aria-label="Abrir menu" aria-haspopup="dialog" aria-controls="mobile-menu"><Menu size={25} strokeWidth={1.5} /></button>
      </header>

      <dialog id="mobile-menu" ref={dialog} className={`mobile-menu ${closing ? 'is-closing' : ''}`} aria-label={'Menu de navega\u00e7\u00e3o'} onCancel={event => { event.preventDefault(); closeMenu(); }}>
        <div className="mobile-menu-header">
          <Brand />
          <button className="menu-close" onClick={() => closeMenu()} aria-label="Fechar menu" autoFocus><X size={27} strokeWidth={1.5} /></button>
        </div>
        <nav className="mobile-menu-links" aria-label={'Navega\u00e7\u00e3o mobile'}>
          {[{ label: 'In\u00edcio', href: '#inicio' }, ...navigation].map((item, index) => (
            <a key={item.href} href={item.href} style={{ '--menu-index': index } as CSSProperties} onClick={event => { event.preventDefault(); closeMenu(item.href); }}>
              <span className="mobile-menu-index">0{index + 1}</span><span>{item.label}</span><ArrowUpRight size={25} strokeWidth={1.4} />
            </a>
          ))}
        </nav>
        <div className="mobile-menu-contact">
          <p>{'A sua nova mec\u00e2nica. Em Limeira.'}</p>
          <LinkButton href={whatsappLink()} variant="gold">{'Falar pelo WhatsApp'}</LinkButton>
          <a className="mobile-menu-phone" href={`tel:${company.telephone}`}>{company.phone}</a>
        </div>
      </dialog>
    </>
  );
}