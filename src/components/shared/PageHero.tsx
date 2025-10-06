import { Link } from 'react-router-dom';

interface PageHeroProps {
  headline: string;
  subhead: string;
  ctaPrimary?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
}

export default function PageHero({ headline, subhead, ctaPrimary, ctaSecondary }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="mb-6 bg-gradient-to-r from-brand-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          {headline}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 font-light mb-10 max-w-3xl mx-auto">
          {subhead}
        </p>
        {(ctaPrimary || ctaSecondary) && (
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
        )}
      </div>
    </section>
  );
}
