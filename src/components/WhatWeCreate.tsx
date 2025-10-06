import {
  Palette,
  Globe,
  Cpu,
  ShoppingCart,
  Brain,
  Search,
  ArrowRight,
} from 'lucide-react';

export default function WhatWeCreate() {
  const services = [
    {
      icon: Palette,
      title: 'Design & Creative',
      description:
        'Brand identity, UX/UI design, and visual systems that capture attention and drive engagement.',
      tags: ['Branding', 'UI/UX', 'Design Systems'],
    },
    {
      icon: Globe,
      title: 'Websites',
      description:
        'High-performance websites that blend stunning design with seamless functionality.',
      tags: ['Corporate Sites', 'Landing Pages', 'Portfolios'],
    },
    {
      icon: Cpu,
      title: 'Web Apps & SaaS',
      description:
        'Scalable, secure applications built to grow with your business and delight your users.',
      tags: ['Dashboards', 'Platforms', 'Internal Tools'],
    },
    {
      icon: ShoppingCart,
      title: 'eCommerce',
      description:
        'Conversion-optimized stores that turn browsers into buyers and buyers into loyal customers.',
      tags: ['Shopify', 'WooCommerce', 'Custom Solutions'],
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description:
        'Intelligent automation and AI-powered features that give you a competitive edge.',
      tags: ['Chatbots', 'ML Models', 'Automation'],
    },
    {
      icon: Search,
      title: 'Audits & Reviews',
      description:
        'Deep-dive analysis to uncover opportunities and optimize your digital presence.',
      tags: ['UX Audits', 'Performance', 'SEO'],
    },
  ];

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            What We <span className="text-vivid-orange">Create</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light">
            End-to-end digital solutions crafted with precision, powered by
            innovation, and designed to make an impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-panel glass-panel-hover p-8 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-vivid-orange/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:bg-vivid-orange/10 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-vivid-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-vivid-orange" />
                  </div>

                  <h3 className="text-2xl mb-3 group-hover:text-vivid-orange transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-vivid-orange font-medium group-hover:gap-4 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
