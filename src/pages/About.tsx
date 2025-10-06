import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import Section from '../components/shared/Section';
import CTASection from '../components/shared/CTASection';
import { Heart, Eye, MessageCircle, Shield, Award, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Award, title: 'Quality', description: 'Because good enough isn\'t our language.' },
    { icon: Eye, title: 'Transparency', description: 'Clarity builds trust — and trust builds great work.' },
    { icon: MessageCircle, title: 'Communication', description: 'Listening is our first step toward creativity.' },
    { icon: Shield, title: 'Accountability', description: 'We take ownership of outcomes, not just output.' },
    { icon: Heart, title: 'Humility', description: 'Confidence with kindness.' },
    { icon: Lightbulb, title: 'Curiosity', description: 'Always learning, always improving.' },
  ];

  return (
    <>
      <PageHero
        headline="We are creators who listen. Builders who care."
        subhead="Rivulet IQ is a design-first, AI-smart web studio built around a simple idea — when people are free to think, create, and grow, great things flow naturally."
        ctaPrimary={{ text: 'Start a Discovery Call', href: '/contact' }}
        ctaSecondary={{ text: 'Join Our Team', href: '/careers/open-roles' }}
      />

      <Section
        headline="Design at our core. Intelligence in our flow."
        subheadline="Who We Are"
        copy="We're a collective of designers, developers, and thinkers who believe that creativity and technology are not opposites — they're partners. Our work lives at that intersection — where good design meets dependable engineering, and ideas evolve into experiences people love to use."
        centered
      >
        <p className="text-neutral-400 mt-6 max-w-2xl mx-auto">
          Headquartered in India, we collaborate globally — with agencies and founders who share our love for detail, structure, and story.
        </p>
      </Section>

      <Section
        headline="Freedom creates excellence."
        subheadline="Our Philosophy"
        copy="At Rivulet, we don't manage creativity — we nurture it. Our teams work with autonomy and trust, encouraged to experiment, learn, and push ideas further. It's how innovation happens — not by pressure, but by purpose."
        className="bg-white/5"
      >
        <p className="text-neutral-400 mt-6 max-w-2xl">
          We believe the best results come when people feel ownership — of their ideas, their craft, and their growth.
        </p>
      </Section>

      <Section headline="What we live by, every day." subheadline="Our Values" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="glass-panel p-8">
                <div className="w-14 h-14 rounded-xl bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-vivid-orange" />
                </div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
        <p className="text-neutral-500 mt-12 max-w-2xl mx-auto">
          These values shape every conversation, project, and relationship we build.
        </p>
      </Section>

      <Section
        headline="A platform to grow. The freedom to thrive."
        subheadline="Our Culture"
        copy="We've built Rivulet around one promise — you will grow here. Not just in skills, but in perspective. Our culture encourages learning, experimenting with new tools, and sharing knowledge freely."
        centered
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
          {[
            'Dedicated time for learning',
            'AI and design workshops',
            'Festivals and celebrations',
            'Mentorship and growth',
          ].map((item) => (
            <div key={item} className="glass-panel p-6">
              <svg className="w-6 h-6 text-vivid-orange mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-neutral-300 text-sm">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 mt-12 max-w-2xl mx-auto">
          We're not chasing trends — we're building people who define them.
        </p>
      </Section>

      <Section
        headline="Global vision. Indian roots."
        subheadline="Our Blend"
        copy="We work with clients around the world, but our strength comes from our base in India — a studio that combines international quality with the warmth, work ethic, and creativity of our people."
        centered
      />

      <CTASection
        headline="Let's create something meaningful — together."
        subhead="Whether you're a founder, a creative partner, or someone who loves to build — we'd love to connect."
        ctaPrimary={{ text: 'Book a Discovery Call', href: '/contact' }}
        ctaSecondary={{ text: 'Join Our Team', href: '/careers/open-roles' }}
      />
    </>
  );
}
