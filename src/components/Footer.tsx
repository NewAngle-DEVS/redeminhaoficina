import { ArrowUpRight } from 'lucide-react';
import { company } from '../content';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-shell">
        <div><a href="#inicio" className="brand-link" aria-label={'Minha Oficina, voltar ao in\u00edcio'}><Brand /></a><p>{'A sua nova mec\u00e2nica.'}</p></div>
        <a className="footer-instagram" href={company.instagram} target="_blank" rel="noopener noreferrer"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" /></svg><span>{company.instagramHandle}</span><ArrowUpRight size={18} aria-hidden="true" /></a>
        <a className="footer-top text-link" href="#inicio">{'De volta ao topo'}<ArrowUpRight size={18} aria-hidden="true" /></a>
      </div>
      <div className="footer-bottom section-shell"><p>&copy; {new Date().getFullYear()} Minha Oficina &middot; Limeira, SP</p><p>Confiança em cada detalhe.</p></div>
    </footer>
  );
}
