import PageHero from '../../components/shared/PageHero';
import Section from '../../components/shared/Section';
import CTASection from '../../components/shared/CTASection';
import { MessageSquare, Search, Workflow, BarChart } from 'lucide-react';

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
    { name: 'OpenAI & GPT APIs', description: 'Conversational intelligence and content generation.' },
    { name: 'Google Vertex AI / Dialogflow', description: 'Natural language processing and automation.' },
    { name: 'LangChain & Pinecone', description: 'Vector search and contextual memory for smarter retrieval.' },
    { name: 'ElasticSearch / Algolia', description: 'Search and relevance optimization.' },
    { name: 'Custom Integrations', description: 'Connecting AI with CMS, CRMs, and analytics pipelines.' },
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

      <Section headline="From conversations to connections." subheadline="What We Build" centered>
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {services.map((service) => {
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
        headline="Designed with responsibility, crafted with context."
        subheadline="How We Approach AI"
        copy="We don't chase trends — we design with intention. Every AI solution starts with a clear problem, a human use case, and a design framework that ensures transparency, privacy, and usability."
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            'Clear user goals before model selection',
            'Ethical data usage and privacy compliance',
            'Design-led approach to conversational UX',
            'Integration with existing systems (APIs, CRMs, CMS)',
          ].map((point) => (
            <div key={point} className="glass-panel p-6">
              <svg className="w-6 h-6 text-vivid-orange mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-neutral-300 text-sm">{point}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section headline="Intelligence meets infrastructure." subheadline="Technology We Use" centered>
        <p className="text-neutral-300 max-w-3xl mx-auto mb-12">
          Our AI stack integrates open frameworks, APIs, and cloud systems — built to scale across real-world use cases.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div key={tech.name} className="glass-panel p-6">
              <h4 className="text-lg font-medium mb-2 text-vivid-orange">{tech.name}</h4>
              <p className="text-neutral-400 text-sm font-light">{tech.description}</p>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 text-sm mt-12 max-w-3xl mx-auto">
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
