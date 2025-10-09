import { Heart, Lightbulb, Target, Zap, Sparkles, Palette, Code, Users } from 'lucide-react';
import Tilt3D from './Tilt3D';

export default function DesignPhilosophy() {
  const principles = [
    {
      icon: Heart,
      title: 'Human-Centered',
      description:
        'Every pixel, every interaction is designed with real people in mind. We create experiences that feel intuitive, accessible, and delightful.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Driven',
      description:
        'We stay ahead of the curve, exploring emerging technologies and design trends to deliver cutting-edge solutions that set you apart.',
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description:
        'Beautiful design is just the start. We optimize for conversions, engagement, and measurable business outcomes that matter to you.',
    },
    {
      icon: Zap,
      title: 'Speed & Quality',
      description:
        'We move fast without compromising on quality. Our streamlined process delivers premium results on time, every time.',
    },
  ];

  const designProcess = [
    {
      icon: Palette,
      title: 'Design Thinking',
      description: 'Research, ideation, and user-centered design that solves real problems.',
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Scalable, maintainable, and performant code built with best practices.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Transparent communication and partnership throughout the journey.',
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-white/[0.02]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vivid-orange/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-light text-vivid-orange uppercase tracking-wider">
            How We Work
          </span>
          <h2 className="mt-4 mb-6">
            Our Design <span className="text-vivid-orange">Philosophy</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light">
            Guided by principles that put people first, embrace innovation, and
            deliver measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Tilt3D key={index}>
                <div className="glass-panel p-8 h-full group hover:border-vivid-orange/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-vivid-orange/10 flex items-center justify-center group-hover:bg-vivid-orange/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-vivid-orange" />
                    </div>

                    <div>
                      <h3 className="text-2xl mb-3 group-hover:text-vivid-orange transition-colors">
                        {principle.title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            );
          })}
        </div>

        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-vivid-orange/10 via-transparent to-transparent rounded-3xl" />

          <Tilt3D intensity={5}>
            <div className="glass-panel p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute top-10 right-10 w-64 h-64 bg-vivid-orange/5 rounded-full blur-[100px]" />
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-vivid-orange/5 rounded-full blur-[100px]" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-vivid-orange/10 border border-vivid-orange/30 animate-glow-pulse">
                  <Sparkles className="w-10 h-10 text-vivid-orange" />
                </div>

                <h3 className="mb-6 text-3xl lg:text-4xl">
                  Design-First. <span className="text-vivid-orange">Always.</span>
                </h3>

                <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
                  We believe great design is the foundation of great products. It's
                  not about making things look pretty—it's about solving problems,
                  telling stories, and creating experiences that resonate. When
                  design leads, technology follows, and magic happens.
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {designProcess.map((process, index) => {
                    const Icon = process.icon;
                    return (
                      <div key={index} className="group">
                        <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-vivid-orange/10 border border-vivid-orange/30 group-hover:bg-vivid-orange/20 group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-6 h-6 text-vivid-orange" />
                        </div>
                        <h4 className="font-medium mb-2 text-lg group-hover:text-vivid-orange transition-colors">
                          {process.title}
                        </h4>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {process.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Tilt3D>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '100%', label: 'Design-Driven' },
            { number: '24/7', label: 'Support Available' },
            { number: '10+', label: 'Industries Served' },
            { number: '50+', label: 'Happy Clients' },
          ].map((stat, index) => (
            <Tilt3D key={index}>
              <div className="glass-panel p-6 text-center group hover:border-vivid-orange/30 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-vivid-orange mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <p className="text-neutral-400 text-sm">{stat.label}</p>
              </div>
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  );
}
