import PageHero from '../../components/shared/PageHero';
import Section from '../../components/shared/Section';
import CTASection from '../../components/shared/CTASection';
import { Briefcase, MapPin, Home, Palette, Globe, BookOpen } from 'lucide-react';

export default function OpenRoles() {
  const roles = [
    {
      category: 'Creative & Marketing',
      positions: [
        { title: 'Content Writer', location: 'Ahmedabad', description: 'Craft stories that educate, inspire, and connect.' },
        { title: 'Content Lead', location: 'Ahmedabad', description: 'Guide voice and strategy across multiple brands.' },
        { title: 'Sales Copywriter', location: 'Ahmedabad / Remote', description: 'Write with clarity, persuasion, and purpose.' },
        { title: 'Social Media Strategist', location: 'Ahmedabad', description: 'Turn ideas into campaigns that spark engagement.' },
        { title: 'Marketing – Team Lead', location: 'Ahmedabad', description: 'Lead, mentor, and shape creative marketing direction.' },
        { title: 'Creative Director', location: 'Ahmedabad', description: 'Oversee concept, craft, and consistency across design and communication.' },
      ],
    },
    {
      category: 'Strategy & Client Roles',
      positions: [
        { title: 'Client Account Manager', location: 'Ahmedabad / Remote', description: 'Be the bridge between vision and execution.' },
        { title: 'AI & Automation Strategist', location: 'Ahmedabad', description: 'Explore, design, and implement automation that simplifies creative workflows.' },
      ],
    },
    {
      category: 'Project Management & Operations',
      positions: [
        { title: 'Internal & Operations Project Manager', location: 'Ahmedabad', description: 'Keep teams aligned, projects clear, and operations seamless.' },
        { title: 'Project Manager', location: 'Ahmedabad', description: 'Drive timelines, communication, and quality for client-facing projects.' },
      ],
    },
    {
      category: 'Technical & SEO Roles',
      positions: [
        { title: 'SEO Specialist', location: 'Ahmedabad', description: 'Blend strategy and analysis to improve visibility and performance.' },
        { title: 'WordPress Frontend Developer', location: 'Ahmedabad', description: 'Transform designs into high-performing, responsive websites.' },
      ],
    },
  ];

  return (
    <>
      <PageHero
        headline="Join a team that values freedom as much as skill."
        subhead="We're building a culture where creativity meets curiosity — where every idea matters, and every person grows. If you love what you do and believe in doing it beautifully, you'll feel at home here."
        ctaPrimary={{ text: 'Apply Now', href: 'mailto:hr@rivuletiq.com' }}
      />

      <Section
        headline="A place built for thinkers, creators, and doers."
        subheadline="What It's Like to Work Here"
        copy="We believe the best work happens when people feel trusted. At Rivulet IQ, you'll find freedom to experiment, space to learn, and a team that celebrates both progress and personality."
        centered
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
          {[
            {
              title: 'Flexible Work Environment',
              description: 'Work from anywhere with flexible hours',
              icon: Home
            },
            {
              title: 'Design-Led Culture',
              description: 'Design-first approach in everything we do',
              icon: Palette
            },
            {
              title: 'Global Exposure',
              description: 'Work with international clients and teams',
              icon: Globe
            },
            {
              title: 'Focus on Learning',
              description: 'Continuous learning and skill development',
              icon: BookOpen
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

      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Current Openings</h2>
          <p className="text-neutral-400 text-center mb-12">
            All roles are based in <span className="text-vivid-orange">Ahmedabad</span>, unless mentioned otherwise.
          </p>

          <div className="space-y-12">
            {roles.map((category) => (
              <div key={category.category}>
                <h3 className="text-2xl font-medium mb-6 text-vivid-orange">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.positions.map((position) => (
                    <div key={position.title} className="glass-panel glass-panel-hover p-8 group">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-medium mb-2 group-hover:text-vivid-orange transition-colors">
                            {position.title}
                          </h4>
                          <div className="flex items-center gap-2 text-neutral-400 text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>{position.location}</span>
                          </div>
                        </div>
                        <Briefcase className="w-6 h-6 text-vivid-orange/50 flex-shrink-0" />
                      </div>
                      <p className="text-neutral-400 font-light leading-relaxed mb-6">
                        {position.description}
                      </p>
                      <a
                        href="mailto:hr@rivuletiq.com"
                        className="text-vivid-orange text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all"
                      >
                        Apply Now
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section
        headline="Let's start a conversation."
        subheadline="How to Apply"
        copy="We don't hire resumes — we hire people with perspective. If one of these roles feels like a fit, share your portfolio or CV and tell us why Rivulet feels right for you."
        centered
        className="bg-white/5"
      >
        <a href="mailto:hr@rivuletiq.com" className="btn-primary inline-block mt-6">
          Send Your Resume
        </a>
      </Section>

      <CTASection
        headline="Your next chapter starts here."
        subhead="Bring your curiosity, kindness, and craft — we'll provide the platform for you to thrive."
        ctaPrimary={{ text: 'Apply Now', href: 'mailto:hr@rivuletiq.com' }}
      />
    </>
  );
}
