import { Link } from 'react-router-dom';
import PageHero from '../../components/shared/PageHero';
import Section from '../../components/shared/Section';
import CTASection from '../../components/shared/CTASection';
import { BookOpen, Brain, Award, Users, Clock, GraduationCap, Zap, Target, CheckCircle, MessageSquare, Calendar, Share2, Lightbulb, Trophy, Code, Palette, Mic, Users2 } from 'lucide-react';

export default function Learning() {
  const learningPoints = [
    {
      title: 'Dedicated Learning Time',
      description: 'Dedicated hours for learning each week',
      icon: Clock
    },
    {
      title: 'Course Access',
      description: 'Access to online courses and certifications',
      icon: GraduationCap
    },
    {
      title: 'Tool Experimentation',
      description: 'Encouragement to experiment with new tools',
      icon: Zap
    },
    {
      title: 'Mentorship Support',
      description: 'Mentorship that turns learning into progress',
      icon: Target
    }
  ];

  const aiUpskilling = [
    {
      title: 'AI Workshops',
      description: 'Practical workshops on prompt design and AI tools',
      icon: Brain
    },
    {
      title: 'AI Hackathons',
      description: 'AI hackathons for hands-on exploration',
      icon: Code
    },
    {
      title: 'Creative Challenges',
      description: 'Team challenges that blend creativity and automation',
      icon: Lightbulb
    },
    {
      title: 'Ethical AI Discussions',
      description: 'Open discussions on responsible and ethical AI use',
      icon: MessageSquare
    }
  ];

  const eosPoints = [
    {
      title: 'Departmental Scorecards',
      description: 'Departmental scorecards and goal-setting',
      icon: CheckCircle
    },
    {
      title: 'Quarterly Rocks',
      description: 'Quarterly Rocks for personal growth',
      icon: Target
    },
    {
      title: 'Process Mentorship',
      description: 'Mentorship on process and productivity',
      icon: Users2
    },
    {
      title: 'Leadership Transparency',
      description: 'Transparency across leadership and teams',
      icon: Share2
    }
  ];

  const certifications = [
    {
      title: 'Industry Certifications',
      description: 'Google, HubSpot, or Adobe certifications',
      icon: Trophy
    },
    {
      title: 'UX/UI Training',
      description: 'UX/UI & accessibility training',
      icon: Palette
    },
    {
      title: 'Technical Upgrades',
      description: 'Technical skill upgrades (Laravel, Vue, Shopify, SEO)',
      icon: Code
    },
    {
      title: 'Leadership Programs',
      description: 'Communication and leadership programs',
      icon: Mic
    }
  ];

  const mentorshipPoints = [
    {
      title: 'Peer Learning',
      description: 'Peer learning & micro-sessions',
      icon: Users
    },
    {
      title: 'Show-and-Tell Fridays',
      description: 'Show-and-tell Fridays',
      icon: Calendar
    },
    {
      title: 'Skill-Sharing Channels',
      description: 'Skill-sharing Slack channels',
      icon: MessageSquare
    },
    {
      title: 'Internal Showcases',
      description: 'Internal design & tech showcases',
      icon: Lightbulb
    }
  ];

  return (
    <>
      <PageHero
        headline="Keep learning. Keep flowing."
        subhead="Growth doesn't stop at delivery — it lives in discovery. At Rivulet IQ, learning is woven into how we work, build, and think."
        ctaPrimary={{ text: 'Join the Team', href: 'mailto:hr@rivuletiq.com' }}
      />

      <Section
        headline="Curiosity is our strongest skill."
        subheadline="Our Learning Philosophy"
        copy="We believe the best designers, developers, and leaders never stop learning. From AI tools to new frameworks and creative systems, we encourage everyone to explore — because growth isn't scheduled, it's continuous."
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {learningPoints.map((point, index) => {
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
        <p className="text-neutral-500 mt-12 max-w-2xl mx-auto text-center">
          When our people grow, the company grows — it's that simple.
        </p>
      </Section>

      <Section
        headline="Learning the language of tomorrow."
        subheadline="AI Upskilling"
        copy="As an AI-first company, we don't just use technology — we learn from it. Our teams explore how AI can enhance creativity, speed, and problem-solving in design, development, and operations."
        centered
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {aiUpskilling.map((item, index) => {
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
        <p className="text-neutral-500 mt-16 max-w-2xl mx-auto text-center">
          We learn together, experiment together, and share what works — so everyone moves forward, not just the tech.
        </p>
      </Section>

      <Section
        headline="Structure that supports creativity."
        subheadline="EOS Exposure"
        copy="Our teams are introduced to the Entrepreneurial Operating System (EOS) — a leadership framework that helps individuals and departments stay aligned. Through EOS, everyone learns accountability, clarity, and focus — skills that go beyond titles and timelines."
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {eosPoints.map((point, index) => {
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
        <p className="text-neutral-500 mt-12 max-w-2xl mx-auto text-center">
          EOS gives structure to our creativity — helping us grow with direction, not chaos.
        </p>
      </Section>

      <Section
        headline="Learn deeply. Grow confidently."
        subheadline="Certification & Skill Development"
        copy="We support team members who want to pursue certifications that expand their craft — from design and coding to project management and marketing. If a course adds value to your role or your curiosity, we'll help make it happen."
        centered
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
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
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-vivid-orange transition-colors">{cert.title}</h4>
                    <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">{cert.description}</p>
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
        <p className="text-neutral-500 mt-16 max-w-2xl mx-auto text-center">
          Learning here isn't just encouraged — it's celebrated.
        </p>
      </Section>

      <Section
        headline="Learn from experts. Teach what you master."
        subheadline="Mentorship & Sharing"
        copy="Knowledge grows when it's shared. We organize internal sessions where designers, developers, and PMs teach each other — building confidence, community, and collaboration."
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {mentorshipPoints.map((point, index) => {
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

      <CTASection
        headline="Grow here, in your own way."
        subhead="At Rivulet IQ, you'll never have to ask for permission to learn — just the curiosity to start."
        ctaPrimary={{ text: 'Send Your Resume', href: 'mailto:hr@rivuletiq.com' }}
      />
    </>
  );
}
