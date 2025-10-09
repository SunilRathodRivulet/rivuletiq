import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground particleCount={50} opacity={0.4} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="mb-6 bg-gradient-to-b from-brand-white to-neutral-400 bg-clip-text text-transparent">
          Design-First.
          <br />
          AI-Smart.
          <br />
          <span className="text-vivid-orange">Human at Heart.</span>
        </h1>

        <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto font-light">
          We create digital experiences that blend imagination, intelligence, and intent — helping agencies and founders build what's next.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact" className="btn-primary group">
            Book a Discovery Call
            <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/create" className="btn-outline">Explore What We Create</Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-vivid-orange rounded-full" />
        </div>
      </div>
    </section>
  );
}
