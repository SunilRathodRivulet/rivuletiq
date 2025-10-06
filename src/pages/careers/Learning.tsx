import { Link } from 'react-router-dom';
import PageHero from '../../components/shared/PageHero';
import Section from '../../components/shared/Section';
import CTASection from '../../components/shared/CTASection';
import { BookOpen, Brain, Award, Users } from 'lucide-react';

export default function Learning() {
  const learningPoints = [
    'Dedicated hours for learning each week',
    'Access to online courses and certifications',
    'Encouragement to experiment with new tools',
    'Mentorship that turns learning into progress',
  ];

  const aiUpskilling = [
    'Practical workshops on prompt design and AI tools',
    'AI hackathons for hands-on exploration',
    'Team challenges that blend creativity and automation',
    'Open discussions on responsible and ethical AI use',
  ];

  const eosPoints = [
    'Departmental scorecards and goal-setting',
    'Quarterly Rocks for personal growth',
    'Mentorship on process and productivity',
    'Transparency across leadership and teams',
  ];

  const certifications = [
    'Google, HubSpot, or Adobe certifications',
    'UX/UI & accessibility training',
    'Technical skill upgrades (Laravel, Vue, Shopify, SEO)',
    'Communication and leadership programs',
  ];

  const mentorshipPoints = [
    'Peer learning & micro-sessions',
    'Show-and-tell Fridays',
    'Skill-sharing Slack channels',
    'Internal design & tech showcases',
  ];

  return (
    <>
      <PageHero
        headline="Keep learning. Keep flowing."
        subhead="Growth doesn't stop at delivery — it lives in discovery. At Rivulet IQ, learning is woven into how we work, build, and think."
        ctaPrimary={{ text: 'Join the Team', href: '/careers/open-roles' }}
      />

      <Section
        headline="Curiosity is our strongest skill."
        subheadline="Our Learning Philosophy"
        copy="We believe the best designers, developers, and leaders never stop learning. From AI tools to new frameworks and creative systems, we encourage everyone to explore — because growth isn't scheduled, it's continuous."
      >
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl">
          {learningPoints.map((point) => (
            <div key={point} className="glass-panel p-6">
              <BookOpen className="w-6 h-6 text-vivid-orange mb-3" />
              <p className="text-neutral-300">{point}</p>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 mt-8 max-w-2xl">
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
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {aiUpskilling.map((item) => (
            <div key={item} className="glass-panel p-6">
              <Brain className="w-6 h-6 text-vivid-orange mb-3" />
              <p className="text-neutral-300">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 mt-12 max-w-2xl mx-auto">
          We learn together, experiment together, and share what works — so everyone moves forward, not just the tech.
        </p>
      </Section>

      <Section
        headline="Structure that supports creativity."
        subheadline="EOS Exposure"
        copy="Our teams are introduced to the Entrepreneurial Operating System (EOS) — a leadership framework that helps individuals and departments stay aligned. Through EOS, everyone learns accountability, clarity, and focus — skills that go beyond titles and timelines."
      >
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl">
          {eosPoints.map((point) => (
            <div key={point} className="glass-panel p-6">
              <svg className="w-6 h-6 text-vivid-orange mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-neutral-300">{point}</p>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 mt-8 max-w-2xl">
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
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert} className="glass-panel p-6">
              <Award className="w-6 h-6 text-vivid-orange mb-3" />
              <p className="text-neutral-300">{cert}</p>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 mt-12 max-w-2xl mx-auto">
          Learning here isn't just encouraged — it's celebrated.
        </p>
      </Section>

      <Section
        headline="Learn from experts. Teach what you master."
        subheadline="Mentorship & Sharing"
        copy="Knowledge grows when it's shared. We organize internal sessions where designers, developers, and PMs teach each other — building confidence, community, and collaboration."
      >
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl">
          {mentorshipPoints.map((point) => (
            <div key={point} className="glass-panel p-6">
              <Users className="w-6 h-6 text-vivid-orange mb-3" />
              <p className="text-neutral-300">{point}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        headline="Grow here, in your own way."
        subhead="At Rivulet IQ, you'll never have to ask for permission to learn — just the curiosity to start."
        ctaPrimary={{ text: 'Explore Open Roles', href: '/careers/open-roles' }}
      />
    </>
  );
}
