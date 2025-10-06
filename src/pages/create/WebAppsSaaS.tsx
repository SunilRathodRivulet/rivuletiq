import PageHero from '../../components/shared/PageHero';
import Section from '../../components/shared/Section';
import CTASection from '../../components/shared/CTASection';
import { Code, Database, Boxes, Shield, Workflow } from 'lucide-react';

export default function WebAppsSaaS() {
  const painPoints = [
    'Legacy systems that can\'t scale',
    'Inflexible off-the-shelf solutions',
    'Poorly structured databases and user flows',
    'Clunky admin panels and inconsistent UX',
    'Missed opportunities for automation or integration',
  ];

  const outcomes = [
    { icon: Boxes, title: 'Intuitive UX/UI', description: 'Easy to use, even easier to love.' },
    { icon: Code, title: 'Scalable Architecture', description: 'Laravel + Vue.js for modular, API-ready builds.' },
    { icon: Workflow, title: 'Smart Integrations', description: 'Connect with CRMs, payment gateways, or analytics tools.' },
    { icon: Shield, title: 'Secure & Stable', description: 'Built with testing, version control, and performance monitoring.' },
    { icon: Database, title: 'AI-Ready Foundations', description: 'Structure designed to plug in intelligence when needed.' },
  ];

  const technologies = [
    { name: 'Laravel', description: 'Secure, scalable PHP framework for robust backend architecture.' },
    { name: 'Vue.js', description: 'Reactive front-end framework for modern, fluid user interfaces.' },
    { name: 'Node.js & Express', description: 'For API layers and data-heavy applications.' },
    { name: 'MySQL / PostgreSQL', description: 'Stable, structured database systems.' },
    { name: 'REST / GraphQL APIs', description: 'Seamless communication between modules and systems.' },
  ];

  return (
    <>
      <PageHero
        headline="Web apps that scale your ideas."
        subhead="We design and build custom web applications and SaaS products that simplify complexity, deliver performance, and grow with your business."
        ctaPrimary={{ text: 'Start a Discovery Call', href: '/contact' }}
      />

      <Section headline="When systems hold you back." subheadline="Pain Points">
        <div className="max-w-3xl">
          <p className="text-neutral-300 mb-6 text-lg">
            Outdated tools. Disconnected data. Interfaces that frustrate more than they function. We help agencies and founders move past these common barriers:
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
            Our goal — to turn complexity into clarity through purposeful design and strong code foundations.
          </p>
        </div>
      </Section>

      <Section
        headline="Built for growth, designed for clarity."
        subheadline="Outcomes"
        copy="Your app should evolve as your vision does. We create systems that perform beautifully, integrate easily, and grow with your business model."
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
                <p className="text-neutral-400 text-sm font-light">{outcome.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section headline="A modern stack for modern products." subheadline="Technology We Use" centered>
        <p className="text-neutral-300 max-w-3xl mx-auto mb-12">
          We build on frameworks that balance flexibility and reliability — engineered to support growth, integrations, and clean handoffs between design and development.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div key={tech.name} className="glass-panel p-6">
              <h4 className="text-lg font-medium mb-2 text-vivid-orange">{tech.name}</h4>
              <p className="text-neutral-400 text-sm font-light">{tech.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        headline="Let's build your next platform."
        subhead="Whether you're shaping a SaaS product or automating a workflow — we'll help you bring clarity to complexity."
        ctaPrimary={{ text: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
