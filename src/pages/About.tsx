import PageHero from '../components/shared/PageHero';
import Section from '../components/shared/Section';
import CTASection from '../components/shared/CTASection';
import { Heart, Eye, MessageCircle, Shield, Award, Lightbulb, BookOpen, Users, Calendar, TrendingUp, Clock, Home, DollarSign, Plane, Laptop } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Award, title: 'Quality', description: 'Because good enough isn\'t our language.' },
    { icon: Eye, title: 'Transparency', description: 'Clarity builds trust — and trust builds great work.' },
    { icon: MessageCircle, title: 'Communication', description: 'Listening is our first step toward creativity.' },
    { icon: Shield, title: 'Accountability', description: 'We take ownership of outcomes, not just output.' },
    { icon: Heart, title: 'Humility', description: 'Confidence with kindness.' },
    { icon: Lightbulb, title: 'Curiosity', description: 'Always learning, always improving.' },
  ];

  return (
    <>
      <PageHero
        headline="We are creators who listen. Builders who care."
        subhead="Rivulet IQ is a design-first, AI-smart web studio built around a simple idea — when people are free to think, create, and grow, great things flow naturally."
        ctaPrimary={{ text: 'Start a Discovery Call', href: '/contact' }}
        ctaSecondary={{ text: 'Join Our Team', href: '/careers/open-roles' }}
      />

      <Section
        headline="Design at our core. Intelligence in our flow."
        subheadline="Who We Are"
        copy="We're a collective of designers, developers, and thinkers who believe that creativity and technology are not opposites — they're partners. Our work lives at that intersection — where good design meets dependable engineering, and ideas evolve into experiences people love to use."
        centered
      >
        <p className="text-neutral-400 mt-6 max-w-2xl mx-auto">
          Headquartered in India, we collaborate globally — with agencies and founders who share our love for detail, structure, and story.
        </p>
      </Section>

      <Section
        headline="Freedom creates excellence."
        subheadline="Our Philosophy"
        copy="At Rivulet, we don't manage creativity — we nurture it. Our teams work with autonomy and trust, encouraged to experiment, learn, and push ideas further. It's how innovation happens — not by pressure, but by purpose."
        className="bg-white/5"
      >
        <p className="text-neutral-400 mt-6 max-w-2xl">
          We believe the best results come when people feel ownership — of their ideas, their craft, and their growth.
        </p>
      </Section>

      <Section headline="What we live by, every day." subheadline="Our Values" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="glass-panel p-8">
                <div className="w-14 h-14 rounded-xl bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-vivid-orange" />
                </div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
        <p className="text-neutral-500 mt-12 max-w-2xl mx-auto">
          These values shape every conversation, project, and relationship we build.
        </p>
      </Section>

      <Section
        headline="A platform to grow. The freedom to thrive."
        subheadline="Our Culture"
        copy="We've built Rivulet around one promise — you will grow here. Not just in skills, but in perspective. Our culture encourages learning, experimenting with new tools, and sharing knowledge freely."
        centered
        className="bg-white/5"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
          {[
            {
              icon: BookOpen,
              title: 'Dedicated Learning Time',
              description: 'Weekly learning sessions and skill development programs',
              category: 'Growth'
            },
            {
              icon: TrendingUp,
              title: 'AI & Design Workshops',
              description: 'Hands-on workshops on latest tools and techniques',
              category: 'Innovation'
            },
            {
              icon: Calendar,
              title: 'Festivals & Celebrations',
              description: 'Regular team events and cultural celebrations',
              category: 'Community'
            },
            {
              icon: Users,
              title: 'Mentorship & Growth',
              description: 'One-on-one mentorship and career development',
              category: 'Support'
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group relative">
                <div className="glass-panel p-8 h-full relative overflow-hidden hover:scale-105 transition-all duration-300">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-vivid-orange/5 to-vivid-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-vivid-orange/10 text-vivid-orange border border-vivid-orange/20 font-medium">
                      {item.category}
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
                      {item.title}
                    </h4>
                    <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">
                      {item.description}
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
        
        {/* Additional Culture Benefits */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-white">
            Plus these everyday benefits
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Flexible Hours', icon: Clock, category: 'Work-Life' },
              { name: 'Remote Work', icon: Home, category: 'Flexibility' },
              { name: 'Health Insurance', icon: Heart, category: 'Wellness' },
              { name: 'Learning Budget', icon: DollarSign, category: 'Growth' },
              { name: 'Team Retreats', icon: Plane, category: 'Team Building' },
              { name: 'Tech Allowance', icon: Laptop, category: 'Equipment' }
            ].map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.name} className="glass-panel p-4 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-vivid-orange/20 transition-colors">
                    <Icon className="w-6 h-6 text-vivid-orange" />
                  </div>
                  <span className="text-neutral-300 text-sm font-medium">{benefit.name}</span>
                  <div className="mt-1">
                    <span className="text-vivid-orange/60 text-xs">{benefit.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <p className="text-neutral-500 mt-16 max-w-2xl mx-auto text-center">
          We're not chasing trends — we're building people who define them.
        </p>
      </Section>

      <Section
        headline="Global vision. Indian roots."
        subheadline="Our Blend"
        copy="We work with clients around the world, but our strength comes from our base in India — a studio that combines international quality with the warmth, work ethic, and creativity of our people."
        centered
      />

      <CTASection
        headline="Let's create something meaningful — together."
        subhead="Whether you're a founder, a creative partner, or someone who loves to build — we'd love to connect."
        ctaPrimary={{ text: 'Book a Discovery Call', href: '/contact' }}
        ctaSecondary={{ text: 'Join Our Team', href: '/careers/open-roles' }}
      />
    </>
  );
}
