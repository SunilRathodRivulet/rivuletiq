import { ArrowRight, ExternalLink } from 'lucide-react';

export default function FeaturedCase() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-vivid-orange/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-light text-vivid-orange uppercase tracking-wider">
            Featured Work
          </span>
          <h2 className="mt-4 mb-6">
            Recent <span className="text-vivid-orange">Success Story</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass-panel p-10">
              <div className="mb-6">
                <span className="text-sm font-light text-vivid-orange uppercase tracking-wider">
                  SaaS Platform
                </span>
                <h3 className="mt-2 mb-4">AI-Powered Analytics Dashboard</h3>
                <p className="text-neutral-400 leading-relaxed">
                  A next-generation analytics platform that helps teams make
                  data-driven decisions faster with AI-powered insights and
                  real-time collaboration features.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-white/10">
                <div>
                  <div className="text-3xl font-bold text-vivid-orange mb-1">
                    3x
                  </div>
                  <div className="text-sm text-neutral-400 font-light">
                    User Growth
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-vivid-orange mb-1">
                    45%
                  </div>
                  <div className="text-sm text-neutral-400 font-light">
                    Time Saved
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-vivid-orange mb-1">
                    $2M
                  </div>
                  <div className="text-sm text-neutral-400 font-light">
                    Series A
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg mb-4 font-medium">Key Features</h4>
                <ul className="space-y-3">
                  {[
                    'Real-time data visualization',
                    'AI-powered predictive analytics',
                    'Collaborative team workspaces',
                    'Custom integrations & API',
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-neutral-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-vivid-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Node.js', 'PostgreSQL', 'OpenAI', 'AWS'].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-vivid-orange/10 text-vivid-orange border border-vivid-orange/30"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex gap-4">
                <button className="btn-primary group">
                  View Case Study
                  <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="btn-outline group">
                  <ExternalLink className="inline-block mr-2 w-5 h-5" />
                  Visit Site
                </button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="glass-panel p-4 glow-orange animate-float">
                <div className="aspect-video bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-vivid-orange/20 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-vivid-orange/20 flex items-center justify-center border border-vivid-orange/30">
                        <div className="w-0 h-0 border-l-[15px] border-l-vivid-orange border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                      </div>
                      <p className="text-sm text-neutral-400 font-light">
                        Project Preview
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 right-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-vivid-orange/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-vivid-orange/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
