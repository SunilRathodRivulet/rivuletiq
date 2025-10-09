import { useEffect, useState } from 'react';
import { TrendingUp, Award, Users, Zap } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function ProofBar() {
  const stats = [
    {
      icon: TrendingUp,
      value: 300,
      suffix: '+',
      label: 'successful website builds',
      color: 'text-vivid-orange',
    },
    {
      icon: Award,
      value: 40,
      suffix: '+',
      label: 'design-first brands empowered',
      color: 'text-vivid-orange',
    },
    {
      icon: Users,
      value: 85,
      suffix: '+',
      label: 'creative minds across design, code, and strategy',
      color: 'text-vivid-orange',
    },
    {
      icon: Zap,
      value: 10,
      suffix: '+',
      label: 'global agency partnerships',
      color: 'text-vivid-orange',
    },
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-6">
            Numbers that <span className="text-vivid-orange">speak for us</span>.
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Behind every number, there's a story of collaboration, curiosity, and craft.
          </p>
        </div>
        <div className="glass-panel p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group cursor-default"
                  style={{
                    animation: `float 6s ease-in-out ${index * 0.3}s infinite`,
                  }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-2xl bg-vivid-orange/10 transition-all duration-300 group-hover:bg-vivid-orange/20">
                    <Icon className={`w-7 h-7 ${stat.color}`} />
                  </div>

                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-brand-white to-neutral-400 bg-clip-text text-transparent">
                    <Counter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2500}
                    />
                  </div>

                  <div className="text-sm md:text-base text-neutral-400 font-light">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
