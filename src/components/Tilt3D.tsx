import { ReactNode, useRef, MouseEvent, useEffect, useState } from 'react';

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export default function Tilt3D({ children, className = '', intensity = 15 }: Tilt3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || isMobile) return;
    cardRef.current.style.setProperty('--rotate-x', '0deg');
    cardRef.current.style.setProperty('--rotate-y', '0deg');
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--rotate-x': '0deg',
        '--rotate-y': '0deg',
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
