import PageHero from '../../components/shared/PageHero';
import Section from '../../components/shared/Section';
import CTASection from '../../components/shared/CTASection';
import { Layers, Palette, Sparkles, Search, Target, Code, CheckCircle } from 'lucide-react';

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
      icon: Search
    },
    {
      number: '02',
      title: 'Define',
      description: 'Setting visual tone, flow, and core design direction.',
      icon: Target
    },
    {
      number: '03',
      title: 'Design',
      description: 'Crafting layouts, prototypes, and responsive experiences in Figma.',
      icon: Palette
    },
    {
      number: '04',
      title: 'Deliver',
      description: 'Handing off production-ready assets to developers — pixel-perfect, tested, and scalable.',
      icon: CheckCircle
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

      <Section headline="A visual language for every need." subheadline="What We Design" centered className="bg-white/5">
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {designServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group relative">
                <div className="glass-panel p-8 h-full relative overflow-hidden hover:scale-105 transition-all duration-300">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-vivid-orange/5 to-vivid-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-vivid-orange/20 border border-vivid-orange/30 flex items-center justify-center group-hover:bg-vivid-orange/30 group-hover:border-vivid-orange/50 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-vivid-orange" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-vivid-orange transition-colors">{service.title}</h3>
                    <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vivid-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-vivid-orange group-hover:w-full transition-all duration-500"></div>
                </div>
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
        <div className="relative mt-16">
          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Main Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-vivid-orange via-vivid-orange/60 to-vivid-orange/30 rounded-full timeline-line"></div>
            
            {/* Timeline Nodes */}
            <div className="space-y-24">
              {process.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={step.number} className="relative" style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                      <div className="w-16 h-16 rounded-full bg-vivid-orange/20 border-4 border-vivid-orange/40 flex items-center justify-center backdrop-blur-sm timeline-node">
                        <Icon className="w-8 h-8 text-vivid-orange" />
                      </div>
                      {/* Node Glow Effect */}
                      <div className="absolute inset-0 w-16 h-16 rounded-full bg-vivid-orange/10 animate-pulse"></div>
                    </div>
                    
                    {/* Content Card */}
                    <div className={`flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
                      <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className={`glass-panel p-8 relative group hover:scale-105 transition-all duration-300 ${isEven ? 'timeline-card-left' : 'timeline-card-right'}`} style={{ animationDelay: `${index * 0.3}s` }}>
                          {/* Step Number Badge */}
                          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-vivid-orange flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {step.number}
                          </div>
                          
                          {/* Connection Line to Node */}
                          <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-vivid-orange/30 ${isEven ? '-right-8' : '-left-8'}`}></div>
                          
                          <h4 className="text-2xl font-bold mb-4 text-vivid-orange group-hover:text-vivid-orange/80 transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-neutral-300 leading-relaxed text-lg">
                            {step.description}
                          </p>
                          
                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-vivid-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <p className="text-neutral-500 text-sm mt-16 max-w-2xl mx-auto text-center">
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
