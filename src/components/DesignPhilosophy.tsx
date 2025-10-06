import { Heart, Lightbulb, Target, Zap } from 'lucide-react';

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

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Our Design <span className="text-vivid-orange">Philosophy</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light">
            Guided by principles that put people first, embrace innovation, and
            deliver measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="glass-panel p-8 group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-vivid-orange/10 flex items-center justify-center group-hover:bg-vivid-orange/20 transition-colors duration-300">
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
            );
          })}
        </div>

        <div className="glass-panel p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-vivid-orange/5 via-transparent to-transparent" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-vivid-orange/10 border border-vivid-orange/30">
              <span className="text-4xl">✨</span>
            </div>

            <h3 className="mb-4">
              Design-First. <span className="text-vivid-orange">Always.</span>
            </h3>

            <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
              We believe great design is the foundation of great products. It's
              not about making things look pretty—it's about solving problems,
              telling stories, and creating experiences that resonate. When
              design leads, technology follows, and magic happens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
