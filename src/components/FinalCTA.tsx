import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-vivid-orange/10 via-transparent to-transparent" />

      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-vivid-orange/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-vivid-orange/10 rounded-full blur-[100px] animate-float-delayed" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-panel p-12 md:p-16">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-vivid-orange/10 border border-vivid-orange/30 animate-glow-pulse">
            <Calendar className="w-10 h-10 text-vivid-orange" />
          </div>

          <h2 className="mb-6">
            Ready to Build Something{' '}
            <span className="text-vivid-orange">Amazing?</span>
          </h2>

          <p className="text-xl text-neutral-400 mb-10 font-light leading-relaxed">
            Let's talk about your project. Book a free discovery call and we'll
            explore how we can help bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="btn-primary group">
              Book a Discovery Call
              <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="btn-outline">View Our Work</button>
          </div>

          <p className="text-sm text-neutral-500 font-light">
            No pressure. No obligation. Just a friendly conversation about your
            goals.
          </p>
        </div>
      </div>
    </section>
  );
}
