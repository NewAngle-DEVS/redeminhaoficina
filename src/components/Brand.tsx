interface BrandProps {
  className?: string;
  symbolOnly?: boolean;
}

export function BrandSymbol({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="240 190 630 730" aria-hidden="true">
      <image href={`${import.meta.env.BASE_URL}images/simbolo-original.png`} width="1108" height="1108" />
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
