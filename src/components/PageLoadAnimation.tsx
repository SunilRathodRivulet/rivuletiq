import { useEffect, useState } from 'react';

export default function PageLoadAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'revealing' | 'complete'>('loading');
  const [glowIntensity, setGlowIntensity] = useState(0);

  // Use global launch sound function from AudioManager
  const playLaunchSound = async () => {
    if (typeof window !== 'undefined' && (window as any).playLaunchSound) {
      try {
        await (window as any).playLaunchSound();
      } catch (error) {
        console.warn('Launch sound failed:', error);
      }
    }
  };

  useEffect(() => {
    // Show loader immediately on mount
    setIsVisible(true);

    // Simulate loading progress with realistic curve
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Slower at start, faster in middle, slower at end
        const speed = prev < 30 ? 2 : prev < 80 ? 8 : 3;
        return prev + Math.random() * speed;
      });
    }, 80);

    // Glow intensity animation
    const glowInterval = setInterval(() => {
      setGlowIntensity(prev => (prev + 0.1) % (Math.PI * 2));
    }, 50);

    // Phase transitions
    const phaseTimer1 = setTimeout(() => {
      setPhase('revealing');
    }, 2000);

    const phaseTimer2 = setTimeout(() => {
      setPhase('complete');
    }, 2800);

    // Hide animation after 3.5 seconds
    const hideTimer = setTimeout(async () => {
      await playLaunchSound();
      setIsVisible(false);
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(glowInterval);
      clearTimeout(phaseTimer1);
      clearTimeout(phaseTimer2);
      clearTimeout(hideTimer);
    };
  }, []);

  // Always render the loader container to prevent white screen
  return (
    <div className={`enhanced-loader ${phase} ${!isVisible ? 'loader-hidden' : ''}`}>
      {/* Animated background with multiple layers */}
      <div className="loader-background">
        {/* Grid pattern */}
        <div className="loader-grid">
          {Array.from({ length: 80 }).map((_, i) => (
            <div key={i} className={`grid-dot grid-dot-${i + 1}`} />
          ))}
        </div>

        {/* Floating geometric shapes */}
        <div className="geometric-shapes">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`shape shape-${i + 1}`} />
          ))}
        </div>

        {/* Animated lines */}
        <div className="animated-lines">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={`line line-${i + 1}`} />
          ))}
        </div>
      </div>

      {/* Main content with enhanced effects */}
      <div className="loader-content">

        {/* Orange Field Waves Loader */}
        <div className="relative w-full h-48 flex items-center justify-center mt-8">
          {[0, 1, 2, 3, 4, 5].map((wave) => (
            <div
              key={wave}
              className="absolute rounded-full border-2 border-vivid-orange animate-wave"
              style={{
                width: `${80 + wave * 50 + progress * 2}px`,
                height: `${80 + wave * 50 + progress * 2}px`,
                animationDelay: `${wave * 0.2}s`,
                opacity: 0.6 - wave * 0.08,
              }}
            />
          ))}
          <div className="absolute glass-panel px-6 py-3 rounded-full">
            <span className="text-sm font-bold text-vivid-orange">{Math.round(Math.min(progress, 100))}%</span>
          </div>
        </div>

        <style>{`
          @keyframes wave {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 0.3; }
          }
          .animate-wave {
            animation: wave 3s ease-in-out infinite;
          }
        `}</style>
      </div>

      {/* Enhanced reveal animation */}
      <div className="loader-reveal">
        <div className="reveal-wave reveal-wave-1" />
        <div className="reveal-wave reveal-wave-2" />
        <div className="reveal-wave reveal-wave-3" />
      </div>

      {/* Smooth fade out */}
      <div className="loader-fade" />
    </div>
  );
}
