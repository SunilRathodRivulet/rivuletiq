import PageHero from '../../components/shared/PageHero';
import Section from '../../components/shared/Section';
import CTASection from '../../components/shared/CTASection';
import { Eye, Users, Shield, Gauge, Search as SearchIcon, Brain } from 'lucide-react';

export default function Audits() {
  const audits = [
    {
      icon: Brain,
      title: 'AI Visibility Audit',
      description: 'See how AI interprets your brand.',
      details: 'We test how ChatGPT, Google AI, and Perplexity present your business — identifying gaps, misinformation, and opportunities to strengthen your brand\'s AI visibility and accuracy.',
      deliverables: 'Visibility map, content alignment report, AI optimization plan.',
    },
    {
      icon: Users,
      title: 'ADA / Accessibility Audit (WCAG 2.1 AA)',
      description: 'Design that includes everyone.',
      details: 'We evaluate your site against WCAG 2.1 AA guidelines, documenting issues and providing examples with a clear, step-by-step remediation plan.',
      deliverables: 'Accessibility report, compliance checklist, visual issue examples.',
    },
    {
      icon: Shield,
      title: 'WordPress Security Audit',
      description: 'Find risks before they find you.',
      details: 'We review your WordPress themes, plugins, and configurations to identify vulnerabilities and create a prioritized hardening plan — keeping your site stable and secure.',
      deliverables: 'Security scorecard, plugin/theme risk list, hardening roadmap.',
    },
    {
      icon: Eye,
      title: 'Website QA Audit',
      description: 'Fix what users notice first.',
      details: 'We simulate real user interactions across devices and browsers to catch broken links, design inconsistencies, and usability issues that harm conversions.',
      deliverables: 'QA report with screenshots, device/browser matrix, fix priority list.',
    },
    {
      icon: Gauge,
      title: 'Site Speed Audit',
      description: 'Because every second counts.',
      details: 'We measure page performance using Core Web Vitals — identifying slow scripts, heavy assets, and render blockers with a prioritized speed improvement plan.',
      deliverables: 'Speed audit report, asset analysis, optimization roadmap.',
    },
    {
      icon: SearchIcon,
      title: 'Technical SEO Audit',
      description: 'The foundation of discoverability.',
      details: 'We examine crawlability, indexation, Core Web Vitals, and metadata to uncover ranking blockers and boost search visibility.',
      deliverables: 'Technical SEO report, ranking factors summary, fix prioritization sheet.',
    },
  ];

  return (
    <>
      <PageHero
        headline="Clarity begins with a closer look."
        subhead="Our audits reveal what's working, what's missing, and where your website can perform better — in design, speed, accessibility, security, and search. Because growth starts with understanding."
        ctaPrimary={{ text: 'Start a Discovery Call', href: '/contact' }}
      />

      <Section
        headline="We don't guess — we measure."
        subheadline="The Purpose"
        copy="Every great digital experience stands on three pillars: design, performance, and reliability. Our audits uncover the friction in those foundations — so you can make confident decisions based on facts, not assumptions."
        centered
      >
        <p className="text-neutral-400 mt-6 max-w-2xl mx-auto">
          Each report comes with actionable insights, visual examples, and clear next steps — so improvement feels achievable, not overwhelming.
        </p>
      </Section>

      <Section headline="Six lenses to see your website clearly." subheadline="Our Six Core Audits" centered>
        <p className="text-neutral-300 max-w-3xl mx-auto mb-12">
          Choose one or combine several — our audits can stand alone or work together for a complete health check.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audits.map((audit) => {
            const Icon = audit.icon;
            return (
              <div key={audit.title} className="glass-panel p-8 text-left">
                <div className="w-14 h-14 rounded-xl bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-vivid-orange" />
                </div>
                <h3 className="text-xl font-medium mb-2">{audit.title}</h3>
                <p className="text-neutral-400 font-light text-sm mb-4">{audit.description}</p>
                <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                  {audit.details}
                </p>
                <p className="text-neutral-500 text-xs">
                  <span className="text-vivid-orange font-medium">Deliverables:</span> {audit.deliverables}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        headline="Insight with intention."
        subheadline="Why Our Audits Are Different"
        copy="Our audits are more than diagnostic documents — they're design-aware, developer-friendly, and written for real implementation. Each report blends creative and technical perspective, ensuring every fix not only improves performance but enhances experience."
        centered
        className="bg-white/5"
      />

      <Section headline="Clarity, confidence, and a clear plan forward." subheadline="What You Get" centered>
        <div className="max-w-2xl mx-auto">
          <div className="glass-panel p-8">
            <ul className="space-y-3">
              {[
                'Audit report with visuals & explanations',
                'Prioritized issue list (high → low impact)',
                'Step-by-step implementation guidance',
                'Optional post-audit consulting & retest',
              ].map((item) => (
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
        headline="Let's uncover your website's full potential."
        subhead="Start with one audit — or let's build a complete clarity plan together."
        ctaPrimary={{ text: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
