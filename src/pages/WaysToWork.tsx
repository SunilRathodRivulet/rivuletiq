import PageHero from '../components/shared/PageHero';
import Section from '../components/shared/Section';
import CTASection from '../components/shared/CTASection';
import { Handshake, FolderKanban, Users, Wrench, AlertCircle, UserCheck, Globe, FileText, Palette } from 'lucide-react';

export default function WaysToWork() {
  const engagementModels = [
    {
      icon: Handshake,
      title: 'Partner With Us',
      description: 'Your design and development team, behind the scenes.',
      details: 'We collaborate with global agencies and ambitious founders — adapting to your systems, tools, and timelines. Think of us as your extended design and tech team, quietly driving results while you focus on strategy and clients.',
      features: ['White-label partnerships for agencies', 'Direct project collaboration for founders', 'Seamless integration with your tools', 'Confidential and accountable execution'],
    },
    {
      icon: FolderKanban,
      title: 'Managed Projects',
      description: 'Defined goals. Clear timelines. End-to-end delivery.',
      details: 'Perfect for agencies or founders with structured scopes and outcomes in mind. We handle everything — discovery, design, development, QA, and launch — under one aligned workflow.',
      features: ['Fixed-cost or milestone-based pricing', 'Transparent timelines and reporting', 'Dedicated project manager and team', 'Post-launch support options'],
    },
    {
      icon: Users,
      title: 'Dedicated / Blended FTE',
      description: 'Your extended team — as flexible as you need it to be.',
      details: 'Get dedicated design or development talent working exclusively for your projects, aligned to your tools, time zone, and priorities. For agencies, this means predictable capacity. For founders, it means speed and control without hiring overhead.',
      features: ['Dedicated FTE: Full-time team member', 'Blended FTE: Shared with managed oversight', 'Cross-functional pods when required', 'Scalable capacity based on demand'],
    },
    {
      icon: Wrench,
      title: 'Ad-Hoc Smalls',
      description: 'Small tasks. Fast turnarounds. Same level of quality.',
      details: 'For updates, quick fixes, or single-page builds that don\'t need a full project cycle — our Ad-Hoc model keeps things moving smoothly. No unnecessary process. No compromise on standards.',
      features: ['Plugin updates or fixes', 'Minor design adjustments', 'Page speed optimization', 'QA retesting'],
    },
    {
      icon: AlertCircle,
      title: 'Rescue & Takeover',
      description: 'We step in when others step away.',
      details: 'Sometimes projects lose momentum, codebases break, or deadlines slip. We specialize in taking over mid-project builds, stabilizing issues, and relaunching with confidence.',
      features: ['Initial audit & handoff assessment', 'Fix plan & priority outline', 'Design/code repair & performance check', 'Relaunch with QA validation'],
    },
  ];

  return (
    <>
      <PageHero
        headline="Partnerships built on trust, clarity, and craft."
        subhead="Every client works differently. That's why we offer flexible engagement models — designed to fit your workflow, your goals, and your pace of growth."
        ctaPrimary={{ text: 'Start a Discovery Call', href: '/contact' }}
      />

      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {engagementModels.map((model, index) => {
            const Icon = model.icon;
            return (
              <div
                key={model.title}
                className={`${index % 2 === 0 ? 'bg-white/5' : ''} rounded-3xl p-8 md:p-12`}
              >
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="w-16 h-16 rounded-xl bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-vivid-orange" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{model.title}</h2>
                    <p className="text-xl text-vivid-orange font-light mb-6">
                      {model.description}
                    </p>
                    <p className="text-neutral-300 leading-relaxed">
                      {model.details}
                    </p>
                  </div>
                  <div className="glass-panel p-8">
                    <ul className="space-y-4">
                      {model.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-vivid-orange flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-neutral-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Section
        headline="Creative partners, not just project vendors."
        subheadline="Why Clients Choose Us"
        copy="Our approach is built around transparency, communication, and a shared commitment to quality. We make working together easy — across time zones, tools, and project sizes."
        centered
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
          {[
            {
              title: 'Dedicated Point of Contact',
              description: 'Single point of contact for seamless communication',
              icon: UserCheck
            },
            {
              title: 'US + India Team Structure',
              description: 'Blended team structure for global coverage',
              icon: Globe
            },
            {
              title: 'Clear Documentation',
              description: 'Comprehensive documentation & deliverables',
              icon: FileText
            },
            {
              title: 'Design-First Approach',
              description: 'Design-first methodology in every project',
              icon: Palette
            }
          ].map((item, index) => {
            const Icon = item.icon;
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
                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-vivid-orange transition-colors">{item.title}</h4>
                  <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">{item.description}</p>
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

      <CTASection
        headline="Let's build something together."
        subhead="Tell us your challenge, your idea, or your client's next project — and we'll help you shape the right way to start."
        ctaPrimary={{ text: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
