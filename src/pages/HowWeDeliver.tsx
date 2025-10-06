import PageHero from '../components/shared/PageHero';
import Section from '../components/shared/Section';
import CTASection from '../components/shared/CTASection';
import { Search, PenTool, Code, CheckCircle, Rocket, Shield } from 'lucide-react';

export default function HowWeDeliver() {
  const workflow = [
    {
      icon: Search,
      number: '01',
      title: 'Discover',
      description: 'We listen, learn, and define. Understanding your audience, goals, and challenges.',
    },
    {
      icon: PenTool,
      number: '02',
      title: 'Design',
      description: 'Translating insight into interfaces that inspire and convert.',
    },
    {
      icon: Code,
      number: '03',
      title: 'Develop',
      description: 'Clean, scalable code built to reflect design intent and deliver performance.',
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'QA & Review',
      description: 'Rigorous testing across devices, browsers, and accessibility checkpoints.',
    },
    {
      icon: Rocket,
      number: '05',
      title: 'Launch & Support',
      description: 'Seamless deployment, post-launch validation, and ongoing optimization.',
    },
  ];

  const qualityChecks = [
    'Multi-device & multi-browser testing',
    'WCAG accessibility validation',
    'Speed & Core Web Vitals optimization',
    'Structured feedback loops',
    'Post-launch observation window',
  ];

  const tools = [
    { name: 'Figma', description: 'Design collaboration & prototypes' },
    { name: 'ClickUp / Asana', description: 'Project tracking & task management' },
    { name: 'GitHub / Bitbucket', description: 'Version control & deployment' },
    { name: 'BrowserStack', description: 'QA & cross-browser testing' },
    { name: 'Slack / Meet / Zoom', description: 'Seamless communication' },
  ];

  return (
    <>
      <PageHero
        headline="A creative process with engineering discipline."
        subhead="From discovery to launch, every project flows through a defined rhythm — blending design, technology, and quality to deliver results that last."
        ctaPrimary={{ text: 'Start a Discovery Call', href: '/contact' }}
      />

      <Section
        headline="From idea to execution — structured, not stiff."
        subheadline="Our Workflow"
        copy="We believe process gives creativity its wings. Every project moves through a simple, transparent framework that ensures clarity at every stage."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {workflow.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <div className="glass-panel p-6 h-full">
                  <div className="w-12 h-12 rounded-lg bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-vivid-orange" />
                  </div>
                  <div className="text-vivid-orange/40 text-4xl font-black mb-2">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-medium mb-2">{step.title}</h4>
                  <p className="text-neutral-400 text-sm font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-neutral-500 text-sm mt-12 max-w-3xl mx-auto text-center">
          Each phase overlaps gently with the next — so the handoff between design and code feels effortless, not abrupt.
        </p>
      </Section>

      <Section
        headline="Quality isn't a stage. It's a mindset."
        subheadline="Quality Promise"
        copy="We embed QA at every layer — not as an afterthought, but as a way of working. From pixel checks to accessibility reviews and performance benchmarks, our process protects the integrity of every deliverable."
        centered
        className="bg-white/5"
      >
        <div className="max-w-2xl mx-auto mt-8">
          <div className="glass-panel p-8">
            <ul className="space-y-3">
              {qualityChecks.map((check) => (
                <li key={check} className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-vivid-orange flex-shrink-0 mt-1" />
                  <span className="text-neutral-300">{check}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section headline="Tools that bring teams together." subheadline="Tools We Use" centered>
        <p className="text-neutral-300 max-w-3xl mx-auto mb-12">
          We work within modern systems that make collaboration clear, traceable, and efficient — whether we're working with your internal team or as your external partner.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tools.map((tool) => (
            <div key={tool.name} className="glass-panel p-6">
              <h4 className="text-lg font-medium mb-2">{tool.name}</h4>
              <p className="text-neutral-400 text-sm font-light">{tool.description}</p>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 text-sm mt-12 max-w-3xl mx-auto">
          Every tool we choose is built around one goal — to keep teams aligned and projects transparent.
        </p>
      </Section>

      <Section
        headline="We build for the long run."
        subheadline="Security & Performance"
        copy="Every website, app, or system we deliver is hardened for stability. We follow best practices for hosting, backups, data handling, and code security to ensure your project stays reliable long after launch."
        centered
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            'Version-controlled deployments',
            'Secure hosting configurations',
            'Daily backups & uptime monitoring',
            'Performance reporting',
          ].map((item) => (
            <div key={item} className="glass-panel p-6">
              <svg className="w-6 h-6 text-vivid-orange mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-neutral-300 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        headline="Let's create something extraordinary — one step at a time."
        subhead="Our process is proven. The next project we perfect could be yours."
        ctaPrimary={{ text: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
