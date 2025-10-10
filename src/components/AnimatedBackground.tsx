import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  particleCount?: number;
  opacity?: number;
  className?: string;
}

export default function AnimatedBackground({
  particleCount = 150,
  opacity = 0.6,
  className = ""
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    interface Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      opacity: number;
      hue: number;
    }

    const particles: Particle[] = [];
    const connectionDistance = 120;

    const mouse = {
      x: 0,
      y: 0,
      radius: 150,
    };

    const initializeParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          vz: (Math.random() - 0.5) * 2,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          hue: Math.random() * 60 + 170, // Cyan to blue range
        });
      }
    };

    initializeParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // 3D movement simulation
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.z < 0) particle.z = 1000;
        if (particle.z > 1000) particle.z = 0;

        // Apply perspective based on z-depth
        const scale = 1000 / (1000 + particle.z);
        const x2d = particle.x * scale + canvas.width * (1 - scale) / 2;
        const y2d = particle.y * scale + canvas.height * (1 - scale) / 2;
        const particleSize = particle.size * scale;
        const particleOpacity = particle.opacity * scale;

        // Mouse interaction - repel particles
        const dx = x2d - mouse.x;
        const dy = y2d - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          particle.vx += (dx / distance) * force * 0.5;
          particle.vy += (dy / distance) * force * 0.5;
        }

        // Draw connections to nearby particles
        particles.forEach((particle2, j) => {
          if (i >= j) return;

          const scale2 = 1000 / (1000 + particle2.z);
          const x2d2 = particle2.x * scale2 + canvas.width * (1 - scale2) / 2;
          const y2d2 = particle2.y * scale2 + canvas.height * (1 - scale2) / 2;

          const dx = x2d - x2d2;
          const dy = y2d - y2d2;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.3 * Math.min(scale, scale2);
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${particle.hue}, 100%, 60%, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(x2d, y2d);
            ctx.lineTo(x2d2, y2d2);
            ctx.stroke();
          }
        });

        // Draw particle with enhanced glow effect
        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, particleSize * 3);
        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${particleOpacity})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 60%, ${particleOpacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 50%, 0)`);

        ctx.beginPath();
        ctx.arc(x2d, y2d, particleSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(x2d, y2d, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 80%, ${particleOpacity})`;
        ctx.fill();

        // Dampen velocity
        particle.vx *= 0.99;
        particle.vy *= 0.99;
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    window.addEventListener('resize', () => {
      resizeCanvas();
      initializeParticles();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [particleCount]);

  return (
    <>
      {/* Animated particle background */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{ opacity }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse pointer-events-none" />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-glow-pulse pointer-events-none" 
        style={{ animationDelay: '1s' }} 
      />
    </>
  );
}