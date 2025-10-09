import PageHero from '../components/shared/PageHero';
import Section from '../components/shared/Section';
import CTASection from '../components/shared/CTASection';
import { Search, PenTool, Code, CheckCircle, Rocket, Shield, GitBranch, Server, Database, BarChart3, Lock, Zap, Clock, ShieldCheck, Palette, Calendar, GitCommit, Monitor, MessageSquare } from 'lucide-react';

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
    { 
      name: 'Figma', 
      description: 'Design collaboration & prototypes',
      icon: Palette,
      category: 'Design'
    },
    { 
      name: 'ClickUp / Asana', 
      description: 'Project tracking & task management',
      icon: Calendar,
      category: 'Project Management'
    },
    { 
      name: 'GitHub / Bitbucket', 
      description: 'Version control & deployment',
      icon: GitCommit,
      category: 'Development'
    },
    { 
      name: 'BrowserStack', 
      description: 'QA & cross-browser testing',
      icon: Monitor,
      category: 'Testing'
    },
    { 
      name: 'Slack / Meet / Zoom', 
      description: 'Seamless communication',
      icon: MessageSquare,
      category: 'Communication'
    },
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
        <div className="relative mt-16">
          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Main Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-vivid-orange via-vivid-orange/60 to-vivid-orange/30 rounded-full timeline-line"></div>
            
            {/* Timeline Nodes */}
            <div className="space-y-24">
              {workflow.map((step, index) => {
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
        
        <p className="text-neutral-500 text-sm mt-16 max-w-3xl mx-auto text-center">
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

      <Section headline="Tools that bring teams together." subheadline="Tools We Use" centered className="bg-white/5">
        <p className="text-neutral-300 max-w-3xl mx-auto mb-16">
          We work within modern systems that make collaboration clear, traceable, and efficient — whether we're working with your internal team or as your external partner.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={tool.name} className="group relative">
                <div className="glass-panel p-8 h-full relative overflow-hidden hover:scale-105 transition-all duration-300">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-vivid-orange/5 to-vivid-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-vivid-orange/10 text-vivid-orange border border-vivid-orange/20 font-medium">
                      {tool.category}
                    </span>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-vivid-orange/20 border border-vivid-orange/30 flex items-center justify-center group-hover:bg-vivid-orange/30 group-hover:border-vivid-orange/50 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-vivid-orange" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-vivid-orange transition-colors">
                      {tool.name}
                    </h4>
                    <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">
                      {tool.description}
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
        
        {/* Additional Tools Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-white">
            Plus a comprehensive toolkit
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL',
              'AWS', 'Vercel', 'Docker', 'Jest', 'Cypress', 'Storybook'
            ].map((tech, index) => (
              <div key={index} className="glass-panel p-4 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-vivid-orange/20 transition-colors">
                  <span className="text-vivid-orange font-bold text-sm">{tech.charAt(0)}</span>
                </div>
                <span className="text-neutral-300 text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-neutral-500 text-sm mt-16 max-w-3xl mx-auto text-center">
          Every tool we choose is built around one goal — to keep teams aligned and projects transparent.
        </p>
      </Section>

      <Section
        headline="We build for the long run."
        subheadline="Security & Performance"
        copy="Every website, app, or system we deliver is hardened for stability. We follow best practices for hosting, backups, data handling, and code security to ensure your project stays reliable long after launch."
        centered
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
          {[
            {
              icon: GitBranch,
              title: 'Version-Controlled Deployments',
              description: 'Automated CI/CD pipelines with rollback capabilities'
            },
            {
              icon: ShieldCheck,
              title: 'Secure Hosting',
              description: 'SSL certificates, firewalls, and security monitoring'
            },
            {
              icon: Database,
              title: 'Daily Backups',
              description: 'Automated backups with 30-day retention policy'
            },
            {
              icon: BarChart3,
              title: 'Performance Monitoring',
              description: 'Real-time analytics and uptime reporting'
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
                    <div className="w-16 h-16 rounded-2xl bg-vivid-orange/20 border border-vivid-orange/30 flex items-center justify-center mb-4 group-hover:bg-vivid-orange/30 group-hover:border-vivid-orange/50 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-vivid-orange" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-vivid-orange transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vivid-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            {
              icon: Lock,
              title: 'Data Encryption',
              description: 'End-to-end encryption for sensitive data'
            },
            {
              icon: Zap,
              title: 'CDN Integration',
              description: 'Global content delivery for faster loading'
            },
            {
              icon: Clock,
              title: '24/7 Monitoring',
              description: 'Proactive monitoring and alert systems'
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="glass-panel p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-vivid-orange/10 border border-vivid-orange/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-vivid-orange/20 transition-colors">
                  <Icon className="w-6 h-6 text-vivid-orange" />
                </div>
                <h5 className="text-lg font-semibold mb-2 text-white">{feature.title}</h5>
                <p className="text-neutral-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
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
