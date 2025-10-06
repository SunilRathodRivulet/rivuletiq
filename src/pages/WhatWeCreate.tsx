import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import Section from '../components/shared/Section';
import CTASection from '../components/shared/CTASection';
import { Palette, Globe, Laptop, ShoppingCart, Brain, Search } from 'lucide-react';

export default function WhatWeCreatePage() {
  const services = [
    {
      icon: Palette,
      title: 'Design & Creative',
      description: 'Where form finds purpose — UI/UX, branding, and motion crafted to tell stories and spark emotion.',
      href: '/create/design',
    },
    {
      icon: Globe,
      title: 'Websites',
      description: 'Marketing and product websites built for clarity, performance, and effortless content flow.',
      href: '/create/websites',
    },
    {
      icon: Laptop,
      title: 'Web Apps & SaaS',
      description: 'Custom applications designed for scale, usability, and modern frameworks like Laravel and Vue.js.',
      href: '/create/web-apps-saas',
    },
    {
      icon: ShoppingCart,
      title: 'eCommerce',
      description: 'Seamless, secure, and scalable stores built on platforms like Shopify and WooCommerce.',
      href: '/create/ecommerce',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Chatbots, AI search, and intelligent automations — designed to make user journeys smarter.',
      href: '/create/ai-solutions',
    },
    {
      icon: Search,
      title: 'Audits & Reviews',
      description: 'Actionable insights through structured design, UX, SEO, and performance audits.',
      href: '/create/audits',
    },
  ];

  return (
    <>
      <PageHero
        headline="Where imagination meets intention."
        subhead="We create with purpose — blending design thinking, technology, and quiet intelligence to craft digital experiences that connect, perform, and endure."
        ctaPrimary={{ text: 'Explore Our Capabilities', href: '/contact' }}
      />

      <Section
        headline="Design-first. Future-ready."
        copy="Every creation begins with design — not just how it looks, but how it works. Our process turns ideas into thoughtful digital experiences powered by clean code, purposeful motion, and adaptable technology."
        centered
      />

      <Section headline="Our canvas spans across disciplines." subheadline="The Six Ways We Create" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.href}
                className="glass-panel glass-panel-hover p-8 group"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-vivid-orange/10 border border-vivid-orange/20 flex items-center justify-center group-hover:bg-vivid-orange/20 transition-colors">
                    <Icon className="w-7 h-7 text-vivid-orange" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="text-vivid-orange text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section
        headline="Simple structure. Honest collaboration."
        subheadline="How We Work"
        copy="We believe in transparent processes, defined timelines, and measurable outcomes. Every engagement begins with understanding your vision — then shaping a path that fits your goals, team, and tools."
        centered
      >
        <div className="flex justify-center mt-8">
          <Link to="/deliver" className="btn-outline">
            See How We Deliver
          </Link>
        </div>
      </Section>

      <Section
        headline="Built to last — in design, in code, in collaboration."
        subheadline="Our Promise"
        copy="We don't just deliver projects; we craft digital systems that age gracefully. Design that evolves, code that scales, and relationships that grow stronger with time."
        centered
        className="bg-white/5"
      />

      <CTASection
        headline="Let's start creating."
        subhead="Every great build begins with a conversation."
        ctaPrimary={{ text: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
