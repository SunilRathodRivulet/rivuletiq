import { Building2, Rocket, ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function DualIntro() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <AnimatedBackground particleCount={35} opacity={0.3} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Two Worlds. One <span className="text-vivid-orange">Creative Core</span>.
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light">
            Whether you're an <strong>agency</strong> seeking a reliable design-to-code partner or a <strong>founder</strong> ready to bring your vision online — we adapt to your rhythm.
            <br /><br />
            Our work bridges strategy, design, and technology, so ideas move seamlessly from concept to creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-panel glass-panel-hover p-10 group cursor-pointer">
            <div className="w-16 h-16 mb-6 rounded-2xl bg-vivid-orange/10 flex items-center justify-center glow-orange">
              <Building2 className="w-8 h-8 text-vivid-orange" />
            </div>

            <h3 className="mb-4 group-hover:text-vivid-orange transition-colors">
              For Agencies
            </h3>

            <p className="text-neutral-400 mb-6 leading-relaxed">
              Partner with us to deliver world-class digital experiences for
              your clients. We become your extended design and development team,
              handling everything from strategy to launch.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'White-label partnerships',
                'Scalable team capacity',
                'Premium quality delivery',
                'Transparent collaboration',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-vivid-orange" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-2 text-vivid-orange font-medium group-hover:gap-4 transition-all">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="glass-panel glass-panel-hover p-10 group cursor-pointer">
            <div className="w-16 h-16 mb-6 rounded-2xl bg-vivid-orange/10 flex items-center justify-center glow-orange">
              <Rocket className="w-8 h-8 text-vivid-orange" />
            </div>

            <h3 className="mb-4 group-hover:text-vivid-orange transition-colors">
              For Founders & Startups
            </h3>

            <p className="text-neutral-400 mb-6 leading-relaxed">
              From MVP to market leader, we help startups and scale-ups build
              products that users love. Fast, flexible, and focused on growth.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Rapid MVP development',
                'Product strategy & design',
                'Scalable architecture',
                'Growth-focused solutions',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-vivid-orange" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-2 text-vivid-orange font-medium group-hover:gap-4 transition-all">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
