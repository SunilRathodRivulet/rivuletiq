import { ReactNode } from 'react';

interface SectionProps {
  headline?: string;
  subheadline?: string;
  copy?: string;
  children?: ReactNode;
  className?: string;
  centered?: boolean;
}

export default function Section({ headline, subheadline, copy, children, className = '', centered = false }: SectionProps) {
  return (
    <section className={`py-20 px-6 ${className}`}>
      <div className={`max-w-7xl mx-auto ${centered ? 'text-center' : ''}`}>
        {subheadline && (
          <p className="text-vivid-orange text-sm font-medium tracking-wider uppercase mb-4">
            {subheadline}
          </p>
        )}
        {headline && (
          <h2 className={`mb-6 ${centered ? 'mx-auto max-w-4xl' : 'max-w-3xl'}`}>
            {headline}
          </h2>
        )}
        {copy && (
          <p className={`text-neutral-300 text-lg leading-relaxed mb-12 ${centered ? 'mx-auto max-w-3xl' : 'max-w-2xl'}`}>
            {copy}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
