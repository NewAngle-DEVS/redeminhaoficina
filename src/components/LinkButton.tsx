import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'gold' | 'navy' | 'outline';
  className?: string;
  external?: boolean;
}

export default function LinkButton({ href, children, variant = 'navy', className = '', external = true }: LinkButtonProps) {
  return (
    <a className={`button button--${variant} ${className}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
      <span>{children}</span>
      <ArrowUpRight size={20} strokeWidth={1.7} aria-hidden="true" />
    </a>
  );
}