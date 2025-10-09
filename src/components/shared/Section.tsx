import { ReactNode } from 'react';
import AnimatedBackground from '../AnimatedBackground';

interface SectionProps {
  headline?: string;
  subheadline?: string;
  copy?: string;
  children?: ReactNode;
  className?: string;
  centered?: boolean;
}

export default function Section({ headline, subheadline, copy, children, className = '', centered = false }: SectionProps) {
  const hasDarkBackground = className.includes('bg-white/5') || className.includes('bg-black');
  
  return (
    <section className={`py-20 px-6 relative overflow-hidden ${className}`}>
      {hasDarkBackground && <AnimatedBackground particleCount={20} opacity={0.2} />}
      <div className={`relative z-10 max-w-7xl mx-auto ${centered ? 'text-center' : ''}`}>
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
