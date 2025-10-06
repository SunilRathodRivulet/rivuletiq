import PageHero from '../../components/shared/PageHero';
import Section from '../../components/shared/Section';
import CTASection from '../../components/shared/CTASection';
import { ShoppingCart, CreditCard, TrendingUp, Shield, Smartphone } from 'lucide-react';

export default function ECommerce() {
  const painPoints = [
    'Unintuitive user journeys that lose customers mid-flow',
    'Designs that fail to communicate trust',
    'Checkout friction, poor mobile optimization, or performance lags',
    'Overcomplicated management tools',
    'Lack of analytics and data-driven insights',
  ];

  const outcomes = [
    { icon: ShoppingCart, title: 'Seamless UX', description: 'Shopping flows built for clarity and confidence.' },
    { icon: TrendingUp, title: 'Conversion-Centered Design', description: 'Every visual element has intent.' },
    { icon: Smartphone, title: 'Mobile-First Performance', description: 'Fast, fluid experiences on any device.' },
    { icon: Shield, title: 'Scalable Architecture', description: 'Ready for growth, updates, and integrations.' },
    { icon: CreditCard, title: 'Secure & Reliable', description: 'Optimized checkouts, backups, and monitoring.' },
  ];

  const technologies = [
    { name: 'Shopify', description: 'Ideal for startups and growing brands seeking design flexibility and stability.' },
    { name: 'WooCommerce (WordPress)', description: 'Best for content-driven stores that need deep customization.' },
    { name: 'Laravel + Vue.js', description: 'Custom solutions for unique business models or multi-vendor setups.' },
    { name: 'Payment Gateways', description: 'Stripe, Razorpay, PayPal, and region-specific integrations.' },
  ];

  return (
    <>
      <PageHero
        headline="Commerce that feels effortless."
        subhead="We design and develop eCommerce experiences that make buying simple, memorable, and beautifully on-brand — blending creative storytelling with dependable technology."
        ctaPrimary={{ text: 'Start a Discovery Call', href: '/contact' }}
      />

      <Section headline="What holds most online stores back." subheadline="Pain Points">
        <div className="max-w-3xl">
          <p className="text-neutral-300 mb-6 text-lg">
            A good product isn't enough — your website needs to sell with ease, confidence, and consistency. We've seen businesses struggle with:
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
            We solve these challenges by designing with empathy and developing with precision — where every click feels natural and every action converts.
          </p>
        </div>
      </Section>

      <Section
        headline="Every store deserves a story."
        subheadline="Outcomes"
        copy="Your eCommerce platform is more than a catalog — it's a conversation with your customers. We help you create experiences that engage, guide, and inspire purchases that feel personal."
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

      <Section headline="Designed for creativity, built for confidence." subheadline="Technology We Use" centered>
        <p className="text-neutral-300 max-w-3xl mx-auto mb-12">
          We combine flexible platforms with custom integrations to create eCommerce systems that look refined and work flawlessly. Every build is tailored to your scale, strategy, and story.
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
        headline="Let's build your store, your way."
        subhead="Whether you're launching your first brand or scaling your tenth, we'll help you create an eCommerce experience people remember."
        ctaPrimary={{ text: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
