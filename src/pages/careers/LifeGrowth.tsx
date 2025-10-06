import { Link } from 'react-router-dom';
import PageHero from '../../components/shared/PageHero';
import Section from '../../components/shared/Section';
import CTASection from '../../components/shared/CTASection';
import { Users, Calendar, TrendingUp, Heart } from 'lucide-react';

export default function LifeGrowth() {
  const culturePoints = [
    'Open communication and honest collaboration',
    'Leadership that listens',
    'Freedom to explore new ideas and tools',
    'No hierarchy in creativity — good ideas win',
  ];

  const celebrations = [
    'Team events and festivals',
    'Ganesh Chaturthi decorations',
    'Navratri celebrations',
    'Creative hackathons',
    'Design showcases',
    'Birthday celebrations',
  ];

  const growthAreas = [
    'Cross-department learning',
    'Internal workshops & AI sessions',
    'Exposure to international projects',
    'Mentorship from senior team leads',
  ];

  return (
    <>
      <PageHero
        headline="A workplace that feels alive."
        subhead="We believe creativity grows where curiosity, connection, and care coexist. Rivulet IQ is more than a studio — it's a place where people learn, celebrate, and build together."
        ctaPrimary={{ text: 'Join the Team', href: '/careers/open-roles' }}
      />

      <Section
        headline="We take work seriously — just not ourselves."
        subheadline="Our Culture"
        copy="We're a team of thinkers and creators who love what we do. But beyond the screens and sprints, you'll find conversations, laughter, and a shared belief that work should feel meaningful."
      >
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl">
          {culturePoints.map((point) => (
            <div key={point} className="glass-panel p-6">
              <svg className="w-6 h-6 text-vivid-orange mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-neutral-300">{point}</p>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 mt-8 max-w-2xl">
          We celebrate individuality as much as teamwork. Everyone adds their own spark to our story.
        </p>
      </Section>

      <Section
        headline="Work hard. Celebrate harder."
        subheadline="What We Celebrate"
        copy="We find joy in the small things — from festival decorations and team lunches to creative hackathons and design showcases. Every celebration is a reminder that growth doesn't have to be serious to be significant."
        centered
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {celebrations.map((item) => (
            <div key={item} className="glass-panel p-6">
              <Calendar className="w-6 h-6 text-vivid-orange mb-3" />
              <p className="text-neutral-300 text-sm">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 mt-12 max-w-2xl mx-auto">
          Our workspace is full of energy, music, art, and ideas — it's where work and life blend naturally.
        </p>
      </Section>

      <Section
        headline="Your role is where you start, not where you stop."
        subheadline="Growth Beyond Roles"
        copy="We encourage everyone to explore beyond their job title — to design, learn AI, experiment with tools, or lead an initiative. If you're curious, we'll create a space for it."
      >
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl">
          {growthAreas.map((area) => (
            <div key={area} className="glass-panel p-6">
              <TrendingUp className="w-6 h-6 text-vivid-orange mb-3" />
              <p className="text-neutral-300">{area}</p>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 mt-8 max-w-2xl">
          Growth here is not a race — it's a journey you shape at your own pace.
        </p>
      </Section>

      <Section
        headline="Faces behind the flow."
        subheadline="Our People"
        copy="Every member of our team brings a different rhythm — designers with empathy, developers with imagination, and managers who make it all come together."
        centered
        className="bg-white/5"
      >
        <div className="flex items-center justify-center gap-3 mt-6">
          <Users className="w-6 h-6 text-vivid-orange" />
          <p className="text-neutral-300">
            85+ creative minds across design, code, and strategy
          </p>
        </div>
        <p className="text-neutral-400 mt-4">
          We're proud of our people — not just for what they do, but for who they are.
        </p>
      </Section>

      <CTASection
        headline="Find your rhythm with us."
        subhead="If you're looking for a place that values creativity, freedom, and growth — Rivulet IQ is waiting for you."
        ctaPrimary={{ text: 'Explore Open Roles', href: '/careers/open-roles' }}
      />
    </>
  );
}
