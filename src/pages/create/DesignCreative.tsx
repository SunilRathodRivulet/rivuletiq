import PageHero from '../../components/shared/PageHero';
import Section from '../../components/shared/Section';
import CTASection from '../../components/shared/CTASection';
import { Layers, Palette, Sparkles } from 'lucide-react';

export default function DesignCreative() {
  const designServices = [
    {
      icon: Layers,
      title: 'UI/UX Design',
      description: 'Interfaces that feel human, built on insight and simplicity.',
    },
    {
      icon: Palette,
      title: 'Brand & Visual Identity',
      description: 'Systems that shape perception and create recognition.',
    },
    {
      icon: Sparkles,
      title: 'Motion & Interaction',
      description: 'Movement that guides, delights, and brings life to the story.',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Discover',
      description: 'Understanding users, goals, and brand story.',
    },
    {
      number: '02',
      title: 'Define',
      description: 'Setting visual tone, flow, and core design direction.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Crafting layouts, prototypes, and responsive experiences in Figma.',
    },
    {
      number: '04',
      title: 'Deliver',
      description: 'Handing off production-ready assets to developers — pixel-perfect, tested, and scalable.',
    },
  ];

  const deliverables = [
    'Figma prototypes & component libraries',
    'Responsive layouts & design systems',
    'Brand style guides',
    'Interactive prototypes for developer handoff',
    'Collaborative review cycles',
  ];

  return (
    <>
      <PageHero
        headline="Design that moves — people, brands, and possibilities."
        subhead="We craft digital identities that look beautiful, feel intuitive, and work effortlessly. Every line, color, and interaction tells a story — one that's yours, reimagined through clarity and creativity."
        ctaPrimary={{ text: 'Start a Discovery Call', href: '/contact' }}
      />

      <Section
        headline="Less noise. More meaning."
        subheadline="Our Design Philosophy"
        copy="Design is not what we add — it's what we remove until only intention remains. Our process is quiet yet bold, combining user empathy, brand understanding, and creative discipline. We believe every pixel should serve a purpose, every screen should feel like an experience."
        centered
      />

      <Section headline="A visual language for every need." subheadline="What We Design" centered>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {designServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="glass-panel p-8">
                <div className="w-14 h-14 rounded-xl bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-vivid-orange" />
                </div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        headline="Structure behind every spark."
        subheadline="Our Process"
        copy="Creativity thrives with clarity. Our design process moves through rhythm — discover, define, design, and deliver — each phase ensuring alignment and purpose."
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {process.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-vivid-orange/20 text-6xl font-black mb-4">
                {step.number}
              </div>
              <h4 className="text-xl font-medium mb-3">{step.title}</h4>
              <p className="text-neutral-400 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 text-sm mt-12 max-w-2xl mx-auto text-center">
          AI assists us in research and iteration — but the vision always remains human.
        </p>
      </Section>

      <Section headline="Design that's easy to build on." subheadline="What You Get" centered>
        <div className="max-w-2xl mx-auto mt-8">
          <div className="glass-panel p-8">
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Our deliverables are crafted to integrate seamlessly into development — structured files, reusable components, and thoughtful documentation.
            </p>
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
        headline="Let's design something that feels like you."
        subhead="Every great product starts with an idea — we'll help you shape it beautifully."
        ctaPrimary={{ text: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
