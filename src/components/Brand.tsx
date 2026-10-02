interface BrandProps {
  className?: string;
  symbolOnly?: boolean;
}

export function BrandSymbol({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 66 72" fill="none" aria-hidden="true">
      <path d="M33 4 58 18v12l-7 4V22L33 12 14 23v26l6 4V30l7-4 8 13 8-13 7 4v15l-7 4V36l-8 13-8-13v28L7 53V19L33 4Z" fill="currentColor" />
      <path d="m58 37-7 4v11L32 63l-7-4v8l7 4 26-15V37Z" fill="currentColor" />
      <path d="m34 55 8-5 5 3-8 5-5-3Z" fill="#EAB147" />
    </svg>
  );
}

export default function Brand({ className = '', symbolOnly = false }: BrandProps) {
  return (
    <span className={`brand ${className}`}>
      <BrandSymbol className="brand-symbol" />
      {!symbolOnly && <span className="brand-wordmark"><strong>minha</strong><span>oficina</span></span>}
    </span>
  );
}