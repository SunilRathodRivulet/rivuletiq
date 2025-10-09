import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 97, 0, ${particle.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.4 }}
      />

      <div className="absolute inset-0 bg-gradient-radial from-vivid-orange/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="mb-6 bg-gradient-to-b from-brand-white to-neutral-400 bg-clip-text text-transparent">
          Design-First.
          <br />
          AI-Smart.
          <br />
          <span className="text-vivid-orange">Human at Heart.</span>
        </h1>

        <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto font-light">
          We blend cutting-edge technology with thoughtful design to create
          digital experiences that inspire, engage, and deliver results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact" className="btn-primary group">
            Book a Discovery Call
            <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/what-we-create" className="btn-outline">Explore What We Create</Link>
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
