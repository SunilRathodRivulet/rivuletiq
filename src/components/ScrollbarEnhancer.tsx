import { useEffect, useState } from 'react';

export default function ScrollbarEnhancer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollY = window.scrollY;
    let isScrollingActive = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / maxScroll) * 100;

      // Update scroll progress
      setScrollProgress(Math.min(progress, 100));

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      lastScrollY = currentScrollY;

      // Add scrolling state with debouncing
      if (!isScrollingActive) {
        isScrollingActive = true;
        setIsScrolling(true);
        // Don't add body class to prevent header blinking
      }

      // Clear existing timeout
      clearTimeout(scrollTimeout);
      
      // Set timeout to remove scrolling class
      scrollTimeout = setTimeout(() => {
        isScrollingActive = false;
        setIsScrolling(false);
        setScrollDirection(null);
      }, 200);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Add wheel event for smoother scroll detection
    window.addEventListener('wheel', handleScroll, { passive: true });

    // Add touch events for mobile
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress-indicator"
        style={{
          width: `${scrollProgress}%`,
          transform: scrollDirection === 'up' ? 'scaleY(-1)' : 'scaleY(1)',
        }}
      />
      
      {/* Scroll Direction Indicator */}
      {isScrolling && scrollDirection && (
        <div className={`scroll-direction-indicator ${scrollDirection}`}>
          <div className="scroll-arrow">
            {scrollDirection === 'up' ? '↑' : '↓'}
          </div>
        </div>
      )}
    </>
  );
}
