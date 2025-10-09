import { Link } from 'react-router-dom';
import PageHero from '../../components/shared/PageHero';
import Section from '../../components/shared/Section';
import CTASection from '../../components/shared/CTASection';
import ResumeUpload from '../../components/ResumeUpload';
import { Users, Calendar, TrendingUp, Heart, MessageSquare, Users2, Lightbulb, Award, PartyPopper, Sparkles, BookOpen, Target, Zap } from 'lucide-react';

export default function LifeGrowth() {
  const culturePoints = [
    {
      title: 'Open Communication',
      description: 'Open communication and honest collaboration',
      icon: MessageSquare
    },
    {
      title: 'Leadership that Listens',
      description: 'Leadership that listens',
      icon: Users2
    },
    {
      title: 'Freedom to Explore',
      description: 'Freedom to explore new ideas and tools',
      icon: Lightbulb
    },
    {
      title: 'No Hierarchy in Creativity',
      description: 'No hierarchy in creativity — good ideas win',
      icon: Award
    }
  ];

  const celebrations = [
    {
      title: 'Team Events & Festivals',
      description: 'Team events and festivals',
      icon: PartyPopper
    },
    {
      title: 'Ganesh Chaturthi',
      description: 'Ganesh Chaturthi decorations',
      icon: Sparkles
    },
    {
      title: 'Navratri Celebrations',
      description: 'Navratri celebrations',
      icon: Calendar
    },
    {
      title: 'Creative Hackathons',
      description: 'Creative hackathons',
      icon: Zap
    },
    {
      title: 'Design Showcases',
      description: 'Design showcases',
      icon: Heart
    },
    {
      title: 'Birthday Celebrations',
      description: 'Birthday celebrations',
      icon: Users
    }
  ];

  const growthAreas = [
    {
      title: 'Cross-Department Learning',
      description: 'Cross-department learning',
      icon: BookOpen
    },
    {
      title: 'Internal Workshops',
      description: 'Internal workshops & AI sessions',
      icon: Target
    },
    {
      title: 'International Projects',
      description: 'Exposure to international projects',
      icon: TrendingUp
    },
    {
      title: 'Senior Mentorship',
      description: 'Mentorship from senior team leads',
      icon: Users2
    }
  ];

  return (
    <>
      <PageHero
        headline="A workplace that feels alive."
        subhead="We believe creativity grows where curiosity, connection, and care coexist. Rivulet IQ is more than a studio — it's a place where people learn, celebrate, and build together."
        ctaPrimary={{ text: 'Join the Team', href: 'mailto:hr@rivuletiq.com' }}
      />

      <Section
        headline="We take work seriously — just not ourselves."
        subheadline="Our Culture"
        copy="We're a team of thinkers and creators who love what we do. But beyond the screens and sprints, you'll find conversations, laughter, and a shared belief that work should feel meaningful."
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {culturePoints.map((point, index) => {
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
          We celebrate individuality as much as teamwork. Everyone adds their own spark to our story.
        </p>
      </Section>

      <Section
        headline="Work hard. Celebrate harder."
        subheadline="What We Celebrate"
        copy="We find joy in the small things — from festival decorations and team lunches to creative hackathons and design showcases. Every celebration is a reminder that growth doesn't have to be serious to be significant."
        centered
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {celebrations.map((item, index) => {
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
          Our workspace is full of energy, music, art, and ideas — it's where work and life blend naturally.
        </p>
      </Section>

      <Section
        headline="Your role is where you start, not where you stop."
        subheadline="Growth Beyond Roles"
        copy="We encourage everyone to explore beyond their job title — to design, learn AI, experiment with tools, or lead an initiative. If you're curious, we'll create a space for it."
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {growthAreas.map((area, index) => {
            const Icon = area.icon;
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
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-vivid-orange transition-colors">{area.title}</h4>
                    <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">{area.description}</p>
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
          Growth here is not a race — it's a journey you shape at your own pace.
        </p>
      </Section>

      <Section
        headline="Faces behind the flow."
        subheadline="Our People"
        copy="Every member of our team brings a different rhythm — designers with empathy, developers with imagination, and managers who make it all come together."
        centered
        className="bg-white/5"
      >
        <div className="flex items-center justify-center gap-3 mt-6">
          <Users className="w-6 h-6 text-vivid-orange" />
          <p className="text-neutral-300">
            85+ creative minds across design, code, and strategy
          </p>
        </div>
        <p className="text-neutral-400 mt-4">
          We're proud of our people — not just for what they do, but for who they are.
        </p>
      </Section>

      {/* Resume Upload Section */}
      <Section
        headline="Ready to join our team?"
        subheadline="Send Your Resume"
        copy="Upload your resume and we'll help you send it directly to our HR team. We're always looking for talented individuals to join our creative journey."
        centered
        className="bg-white/5"
      >
        <div className="max-w-2xl mx-auto">
          <ResumeUpload />
        </div>
      </Section>

      <CTASection
        headline="Find your rhythm with us."
        subhead="If you're looking for a place that values creativity, freedom, and growth — Rivulet IQ is waiting for you."
        ctaPrimary={{ text: 'Explore Open Roles', href: '/careers/open-roles' }}
      />
    </>
  );
}
