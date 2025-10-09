import { useEffect, useState } from 'react';

export default function PageLoadAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'revealing' | 'complete'>('loading');
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [showInteractionPrompt, setShowInteractionPrompt] = useState(false);

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

    // Handle user interaction to hide prompt
    const handleUserInteraction = () => {
      setShowInteractionPrompt(false);
    };

    // Add click listener to hide prompt
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('keydown', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });

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

    // Show interaction prompt after 2 seconds if no user interaction
    const promptTimer = setTimeout(() => {
      setShowInteractionPrompt(true);
    }, 2000);

    // Hide animation after 3.5 seconds
    const hideTimer = setTimeout(async () => {
      await playLaunchSound();
      setIsVisible(false);
    }, 3500);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      clearInterval(progressInterval);
      clearInterval(glowInterval);
      clearTimeout(phaseTimer1);
      clearTimeout(phaseTimer2);
      clearTimeout(promptTimer);
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
        {/* Enhanced logo with multiple layers */}
        <div className="loader-logo">
          <div className="logo-outer-ring" />
          <div className="logo-square">
            <div className="logo-inner-square">
              <span className="logo-letter">R</span>
            </div>
            <div className="logo-glow" style={{ 
              boxShadow: `0 0 ${20 + Math.sin(glowIntensity) * 10}px rgba(255, 97, 0, ${0.3 + Math.sin(glowIntensity) * 0.2})` 
            }} />
          </div>
        </div>

        {/* Enhanced typography with animations */}
        <div className="loader-text">
          <h1 className="brand-name">
            <span className="letter" style={{ animationDelay: '0s' }}>R</span>
            <span className="letter" style={{ animationDelay: '0.1s' }}>i</span>
            <span className="letter" style={{ animationDelay: '0.2s' }}>v</span>
            <span className="letter" style={{ animationDelay: '0.3s' }}>u</span>
            <span className="letter" style={{ animationDelay: '0.4s' }}>l</span>
            <span className="letter" style={{ animationDelay: '0.5s' }}>e</span>
            <span className="letter" style={{ animationDelay: '0.6s' }}>t</span>
            <span className="letter" style={{ animationDelay: '0.7s' }}>I</span>
            <span className="letter" style={{ animationDelay: '0.8s' }}>Q</span>
          </h1>
          <p className="brand-tagline">Design-First. AI-Smart. Human at Heart</p>
          
        </div>

        {/* Enhanced progress indicator */}
        <div className="loader-progress">
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
            <div className="progress-glow" style={{ width: `${Math.min(progress, 100)}%` }} />
          </div>
          <div className="progress-text">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Enhanced loading indicator */}
        <div className="loading-indicator">
          <div className="loading-dot" />
          <div className="loading-dot" />
          <div className="loading-dot" />
          <div className="loading-pulse" />
        </div>

        {/* User interaction prompt */}
        {showInteractionPrompt && (
          <div className="interaction-prompt">
            <p className="prompt-text">Click anywhere to enable audio</p>
            <div className="prompt-pulse" />
          </div>
        )}
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
