import PageHero from '../../components/shared/PageHero';
import Section from '../../components/shared/Section';
import CTASection from '../../components/shared/CTASection';
import { Zap, Target, Shield, TrendingUp, Smartphone } from 'lucide-react';

export default function Websites() {
  const painPoints = [
    'Designs that look good but don\'t convert',
    'Outdated builds that resist simple updates',
    'SEO and accessibility overlooked during design',
    'Slow load times and weak hosting foundations',
    'Inconsistent user experience across devices',
  ];

  const outcomes = [
    {
      icon: Zap,
      title: 'Fast & Flexible',
      description: 'Optimized for performance, responsiveness, and easy updates.',
    },
    {
      icon: Target,
      title: 'Conversion-Focused',
      description: 'Design that guides users toward action.',
    },
    {
      icon: Shield,
      title: 'Search & Accessibility Friendly',
      description: 'WCAG and SEO built in, not added later.',
    },
    {
      icon: TrendingUp,
      title: 'Future-Ready',
      description: 'Modular builds that can expand with new tools, AI, or integrations.',
    },
    {
      icon: Smartphone,
      title: 'Content-Ready',
      description: 'Editable frameworks that keep your marketing agile.',
    },
  ];

  const technologies = [
    {
      name: 'WordPress',
      description: 'Flexible, future-proof CMS with custom theme development and Gutenberg/ACF builds.',
    },
    {
      name: 'Webflow',
      description: 'Ideal for creative control and rapid deployment without heavy code overhead.',
    },
    {
      name: 'Laravel + Vue.js',
      description: 'When your site needs the muscle of a web app with the heart of a website.',
    },
    {
      name: 'Headless & Hybrid',
      description: 'API-driven builds using modern frameworks.',
    },
  ];

  const deliverables = [
    'Custom design in Figma or Webflow',
    'Development in WordPress, Webflow, or Laravel',
    'Mobile responsiveness across all breakpoints',
    'QA and accessibility testing',
    'SEO-ready structure',
    'Launch + post-launch support',
  ];

  return (
    <>
      <PageHero
        headline="Websites that think, speak, and sell."
        subhead="We design and build websites that look beautiful, load fast, and work hard — aligning design, technology, and purpose into a seamless digital presence."
        ctaPrimary={{ text: 'Start a Discovery Call', href: '/contact' }}
      />

      <Section headline="What most websites get wrong." subheadline="Pain Points">
        <div className="max-w-3xl">
          <p className="text-neutral-300 mb-6 text-lg">
            Your website should do more than exist — it should work. We've seen brands and agencies struggle with:
          </p>
          <ul className="space-y-3 mb-6">
            {painPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-vivid-orange flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-neutral-300">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-neutral-400">
            We fix all of that — with design that performs and code that lasts.
          </p>
        </div>
      </Section>

      <Section
        headline="A site that grows with you."
        subheadline="Outcomes"
        copy="Our websites are built for evolution — designed to support your brand as it expands, adapts, and scales."
        centered
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <div key={outcome.title} className="glass-panel p-6">
                <div className="w-12 h-12 rounded-lg bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-vivid-orange" />
                </div>
                <h4 className="text-lg font-medium mb-2">{outcome.title}</h4>
                <p className="text-neutral-400 text-sm font-light">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section headline="Design meets dependable engineering." subheadline="Technology We Use" centered>
        <p className="text-neutral-300 max-w-3xl mx-auto mb-12">
          Our builds are powered by platforms that balance creative freedom with performance and stability. We choose the right stack based on your goals — ensuring every site we deliver is fast, secure, and scalable.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech) => (
            <div key={tech.name} className="glass-panel p-8 text-left">
              <h4 className="text-xl font-medium mb-3 text-vivid-orange">{tech.name}</h4>
              <p className="text-neutral-400 font-light leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 text-sm mt-12 max-w-3xl mx-auto">
          We blend these technologies with modern workflows — Git-based versioning, staging servers, automated QA, and performance monitoring — so your site stays solid long after launch.
        </p>
      </Section>

      <Section headline="From first pixel to final publish." subheadline="What You Get" centered>
        <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
          We handle every layer — design, development, QA, launch, and post-launch support — through structured communication and measurable milestones.
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="glass-panel p-8">
            <ul className="space-y-3">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-vivid-orange flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTASection
        headline="Let's build a website that tells your story beautifully."
        subhead="Whether you're an agency scaling delivery or a founder building your brand — we'll make your website a quiet powerhouse."
        ctaPrimary={{ text: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
