import { ArrowRight, Calendar, Mail, MessageSquare, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Tilt3D from './Tilt3D';
import AnimatedBackground from './AnimatedBackground';

export default function FinalCTA() {
  const benefits = [
    { icon: MessageSquare, text: 'Free 30-minute discovery call' },
    { icon: Sparkles, text: 'Custom project roadmap' },
    { icon: Calendar, text: 'Flexible engagement models' },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <AnimatedBackground particleCount={45} opacity={0.35} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="text-sm font-light text-vivid-orange uppercase tracking-wider">
              Let's Connect
            </span>
            <h2 className="mt-4 mb-6">
              Let's build what's <span className="text-vivid-orange">next</span>.
            </h2>
            <p className="text-xl text-neutral-400 mb-8 font-light leading-relaxed">
              Your next website, your next product, your next leap — starts with one conversation.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-vivid-orange/10 border border-vivid-orange/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-vivid-orange" />
                    </div>
                    <span className="text-neutral-300">{benefit.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link to="/contact" className="btn-primary group">
                Book a Discovery Call
                <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="mailto:contact@rivuletiq.com" className="btn-outline group">
                <Mail className="inline-block mr-2 w-5 h-5" />
                Email Us
              </a>
            </div>

            <p className="text-sm text-neutral-500 font-light">
              No pressure. No obligation. Just a friendly conversation about your
              goals and how we can help you succeed.
            </p>
          </div>

          <div className="lg:pl-8">
            <Tilt3D intensity={8}>
              <div className="glass-panel p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-vivid-orange/10 via-transparent to-transparent" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-vivid-orange/10 border border-vivid-orange/30">
                    <Calendar className="w-8 h-8 text-vivid-orange" />
                  </div>

                  <h3 className="text-2xl font-medium mb-4">What to Expect</h3>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-vivid-orange/20 border border-vivid-orange/40 flex items-center justify-center flex-shrink-0 text-vivid-orange font-medium text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Discovery</h4>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          We dive deep into your goals, challenges, and vision for the project.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-vivid-orange/20 border border-vivid-orange/40 flex items-center justify-center flex-shrink-0 text-vivid-orange font-medium text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Strategy</h4>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          We outline a tailored approach, timeline, and deliverables.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-vivid-orange/20 border border-vivid-orange/40 flex items-center justify-center flex-shrink-0 text-vivid-orange font-medium text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Execution</h4>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          Our team brings your vision to life with precision and care.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-vivid-orange/20 border border-vivid-orange/40 flex items-center justify-center flex-shrink-0 text-vivid-orange font-medium text-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Launch & Support</h4>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          We ensure a smooth launch and provide ongoing support.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-400">Typical response time</span>
                      <span className="text-vivid-orange font-medium">Within 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt3D>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Tilt3D>
            <div className="glass-panel p-6 text-center">
              <div className="text-4xl font-bold text-vivid-orange mb-2">100+</div>
              <p className="text-neutral-400 text-sm">Projects Delivered</p>
            </div>
          </Tilt3D>
          <Tilt3D>
            <div className="glass-panel p-6 text-center">
              <div className="text-4xl font-bold text-vivid-orange mb-2">98%</div>
              <p className="text-neutral-400 text-sm">Client Satisfaction</p>
            </div>
          </Tilt3D>
          <Tilt3D>
            <div className="glass-panel p-6 text-center">
              <div className="text-4xl font-bold text-vivid-orange mb-2">5+</div>
              <p className="text-neutral-400 text-sm">Years Experience</p>
            </div>
          </Tilt3D>
        </div>
      </div>
    </section>
  );
}
