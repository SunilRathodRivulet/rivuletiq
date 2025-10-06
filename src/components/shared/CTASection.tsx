import { Link } from 'react-router-dom';

interface CTASectionProps {
  headline: string;
  subhead?: string;
  ctaPrimary?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
}

export default function CTASection({ headline, subhead, ctaPrimary, ctaSecondary }: CTASectionProps) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6">{headline}</h2>
        {subhead && (
          <p className="text-xl text-neutral-300 font-light mb-10">
            {subhead}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {ctaPrimary && (
            <Link to={ctaPrimary.href} className="btn-primary">
              {ctaPrimary.text}
            </Link>
          )}
          {ctaSecondary && (
            <Link to={ctaSecondary.href} className="btn-outline">
              {ctaSecondary.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
