import PageHero from '../../components/shared/PageHero';
import Section from '../../components/shared/Section';
import CTASection from '../../components/shared/CTASection';
import { MessageSquare, Search, Workflow, BarChart, Target, Shield, Palette, Plug } from 'lucide-react';

export default function AISolutions() {
  const services = [
    {
      icon: MessageSquare,
      title: 'AI Chatbots',
      description: 'Conversational interfaces that enhance customer support and lead generation — built with custom logic and tone aligned to your brand.',
    },
    {
      icon: Search,
      title: 'AI Search',
      description: 'Smarter search experiences that understand context and intent — delivering results users actually mean, not just what they type.',
    },
    {
      icon: Workflow,
      title: 'Automations',
      description: 'Streamlined workflows that remove repetitive tasks — from content tagging to data processing — letting your teams focus on what matters.',
    },
    {
      icon: BarChart,
      title: 'Data Insights Dashboards',
      description: 'Simple, visual layers over complex information — turning analytics into decisions.',
    },
  ];

  const technologies = [
    { name: 'OpenAI & GPT APIs', description: 'Conversational intelligence and content generation.', icon: MessageSquare },
    { name: 'Google Vertex AI / Dialogflow', description: 'Natural language processing and automation.', icon: Workflow },
    { name: 'LangChain & Pinecone', description: 'Vector search and contextual memory for smarter retrieval.', icon: Search },
    { name: 'ElasticSearch / Algolia', description: 'Search and relevance optimization.', icon: BarChart },
    { name: 'Custom Integrations', description: 'Connecting AI with CMS, CRMs, and analytics pipelines.', icon: Plug },
  ];

  return (
    <>
      <PageHero
        headline="Where design meets intelligence."
        subhead="We build AI-powered tools that make digital experiences smarter — from chatbots and intelligent search to custom automations that save time and elevate customer engagement."
        ctaPrimary={{ text: 'Start a Discovery Call', href: '/contact' }}
      />

      <Section
        headline="Human-first, AI-powered."
        subheadline="The Vision"
        copy="We believe AI should amplify creativity — not replace it. Our AI solutions are designed to complement your people, simplify your processes, and create experiences that feel intuitive, not artificial."
        centered
      />

      <Section headline="From conversations to connections." subheadline="What We Build" centered className="bg-white/5">
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
          {services.map((service, index) => {
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
        headline="Designed with responsibility, crafted with context."
        subheadline="How We Approach AI"
        copy="We don't chase trends — we design with intention. Every AI solution starts with a clear problem, a human use case, and a design framework that ensures transparency, privacy, and usability."
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            {
              title: 'Clear User Goals',
              description: 'Clear user goals before model selection',
              icon: Target
            },
            {
              title: 'Ethical Data Usage',
              description: 'Ethical data usage and privacy compliance',
              icon: Shield
            },
            {
              title: 'Design-Led Approach',
              description: 'Design-led approach to conversational UX',
              icon: Palette
            },
            {
              title: 'System Integration',
              description: 'Integration with existing systems (APIs, CRMs, CMS)',
              icon: Plug
            }
          ].map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="group relative">
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
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-vivid-orange transition-colors">{point.title}</h4>
                    <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">{point.description}</p>
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

      <Section headline="Intelligence meets infrastructure." subheadline="Technology We Use" centered className="bg-white/5">
        <p className="text-neutral-300 max-w-3xl mx-auto mb-16">
          Our AI stack integrates open frameworks, APIs, and cloud systems — built to scale across real-world use cases.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={tech.name} className="group relative">
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
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-vivid-orange transition-colors">{tech.name}</h4>
                    <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">{tech.description}</p>
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
        <p className="text-neutral-500 text-sm mt-16 max-w-3xl mx-auto text-center">
          We don't build "black boxes." We build transparent, adaptable AI layers that integrate into your existing ecosystem.
        </p>
      </Section>

      <CTASection
        headline="Let's make your systems smarter."
        subhead="We'll help you imagine, design, and deploy AI-powered experiences that stay true to your brand and your users."
        ctaPrimary={{ text: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
