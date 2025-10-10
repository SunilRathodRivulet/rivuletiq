import { useEffect, useRef, useState } from 'react';

export default function AudioManager() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const lastScrollTimeRef = useRef<number>(0);
  const lastClickTimeRef = useRef<number>(0);
  const scrollDirectionRef = useRef<'up' | 'down'>('down');
  const lastScrollYRef = useRef<number>(0);
  const initTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize AudioContext after page loader completes (3.5s) and user interaction
  useEffect(() => {
    let isLoaderComplete = false;
    let hasInitialized = false;
    
    const initializeAudio = async () => {
      if (typeof window === 'undefined' || !window.AudioContext) {
        console.warn('AudioContext not supported in this browser');
        return;
      }

      if (audioContextRef.current || hasInitialized) {
        return; // Already initialized
      }

      hasInitialized = true;

      try {
        audioContextRef.current = new AudioContext();
        
        // Check if the context is suspended and resume it
        if (audioContextRef.current.state === 'suspended') {
          await audioContextRef.current.resume();
        }
        
        setIsInitialized(true);
        console.log('AudioContext initialized successfully');
      } catch (error) {
        console.warn('AudioContext initialization failed:', error);
        audioContextRef.current = null;
        hasInitialized = false;
        setIsInitialized(false);
      }
    };

    // Wait for page loader to complete (3.5 seconds)
    const loaderTimer = setTimeout(() => {
      isLoaderComplete = true;
    }, 3500);

    // Handle first user interaction after loader completes
    const handleUserInteraction = () => {
      // Only initialize if loader is complete and not already initialized
      if (isLoaderComplete && !hasInitialized) {
        // Immediately remove all event listeners to prevent multiple calls
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('mousedown', handleUserInteraction);
        
        // Then initialize audio
        initializeAudio();
      }
    };

    // Add listeners for user interactions (excluding scroll - not a valid gesture for AudioContext)
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction, { passive: true });
    document.addEventListener('mousedown', handleUserInteraction);

    return () => {
      clearTimeout(loaderTimer);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('mousedown', handleUserInteraction);
    };
  }, []);

  // Ensure AudioContext is ready and resumed
  const ensureAudioContext = async (): Promise<boolean> => {
    if (!audioContextRef.current) {
      console.warn('AudioContext not initialized');
      return false;
    }

    try {
      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume();
      }
      return audioContextRef.current.state === 'running';
    } catch (error) {
      console.warn('Failed to resume AudioContext:', error);
      return false;
    }
  };

  // Scroll Symphony - Ambient sound design
  const playScrollSound = async (direction: 'up' | 'down', intensity: number = 0.3, speed: number = 1) => {
    if (!isEnabled || !isInitialized) return;
    
    const isAudioReady = await ensureAudioContext();
    if (!isAudioReady || !audioContextRef.current) return;
    
    const now = Date.now();
    if (now - lastScrollTimeRef.current < 100) return; // Throttle sounds
    lastScrollTimeRef.current = now;

    const audioContext = audioContextRef.current;
    
    // Create ambient tone
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filterNode = audioContext.createBiquadFilter();
    
    // Connect nodes
    oscillator.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Configure sound based on direction and intensity
    const baseFreq = direction === 'up' ? 180 : 120;
    const frequency = baseFreq + (intensity * 80) + (speed * 20);
    
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'sine';
    
    // Add subtle filter sweep for organic feel
    filterNode.type = 'lowpass';
    filterNode.frequency.setValueAtTime(800 + (intensity * 400), audioContext.currentTime);
    filterNode.Q.setValueAtTime(1, audioContext.currentTime);
    
    // Create ambient, whisper-like effect
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(intensity * 0.08, audioContext.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.4);
    
    // Add subtle vibrato for organic feel
    const vibrato = audioContext.createOscillator();
    const vibratoGain = audioContext.createGain();
    vibrato.frequency.setValueAtTime(3 + (speed * 2), audioContext.currentTime);
    vibratoGain.gain.setValueAtTime(1.5, audioContext.currentTime);
    vibrato.connect(vibratoGain);
    vibratoGain.connect(oscillator.frequency);
    
    // Play the sound
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.4);
    vibrato.start(audioContext.currentTime);
    vibrato.stop(audioContext.currentTime + 0.4);
  };

  // Button click sound
  const playClickSound = async (buttonType: 'primary' | 'secondary' | 'ghost' = 'primary') => {
    if (!isEnabled || !isInitialized) return;
    
    const isAudioReady = await ensureAudioContext();
    if (!isAudioReady || !audioContextRef.current) return;
    
    const now = Date.now();
    if (now - lastClickTimeRef.current < 50) return; // Throttle sounds
    lastClickTimeRef.current = now;

    const audioContext = audioContextRef.current;
    
    // Create click sound based on button type
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Configure sound based on button type
    let frequency: number;
    let duration: number;
    
    switch (buttonType) {
      case 'primary':
        frequency = 800; // Higher pitch for primary buttons
        duration = 0.15;
        break;
      case 'secondary':
        frequency = 600; // Medium pitch for secondary buttons
        duration = 0.12;
        break;
      case 'ghost':
        frequency = 400; // Lower pitch for ghost buttons
        duration = 0.1;
        break;
      default:
        frequency = 700;
        duration = 0.13;
    }
    
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'sine';
    
    // Quick click envelope
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
    
    // Play the click sound
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  };

  // Website launch sound
  const playLaunchSound = async () => {
    if (!isInitialized) return;
    
    const isAudioReady = await ensureAudioContext();
    if (!isAudioReady || !audioContextRef.current) return;
    
    const audioContext = audioContextRef.current;
    
    // Create a majestic launch sound
    const oscillator1 = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filterNode = audioContext.createBiquadFilter();
    
    // Connect nodes
    oscillator1.connect(filterNode);
    oscillator2.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Configure frequencies for harmonic chord
    oscillator1.frequency.setValueAtTime(220, audioContext.currentTime); // A3
    oscillator2.frequency.setValueAtTime(330, audioContext.currentTime); // E4
    
    oscillator1.type = 'sine';
    oscillator2.type = 'sine';
    
    // Filter sweep for dramatic effect
    filterNode.type = 'lowpass';
    filterNode.frequency.setValueAtTime(400, audioContext.currentTime);
    filterNode.frequency.linearRampToValueAtTime(2000, audioContext.currentTime + 0.5);
    filterNode.Q.setValueAtTime(2, audioContext.currentTime);
    
    // Gain envelope for smooth launch
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1.5);
    
    // Play the launch sound
    oscillator1.start(audioContext.currentTime);
    oscillator2.start(audioContext.currentTime);
    oscillator1.stop(audioContext.currentTime + 1.5);
    oscillator2.stop(audioContext.currentTime + 1.5);
  };

  // Handle scroll events
  const handleScroll = () => {
    if (!isInitialized) return;
    
    const scrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    
    // Calculate scroll intensity and speed
    const scrollProgress = scrollY / (scrollHeight - clientHeight);
    const intensity = Math.min(scrollProgress * 1.5, 1);
    
    // Determine scroll direction
    const direction = scrollY > lastScrollYRef.current ? 'down' : 'up';
    scrollDirectionRef.current = direction;
    
    // Calculate scroll speed
    const scrollDelta = Math.abs(scrollY - lastScrollYRef.current);
    const speed = Math.min(scrollDelta / 10, 3); // Normalize speed
    
    lastScrollYRef.current = scrollY;
    
    // Play sound with direction, intensity, and speed
    playScrollSound(direction, intensity, speed);
  };

  // Add scroll event listener
  useEffect(() => {
    if (!isInitialized) return;
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInitialized]);

  // Add click listeners to all buttons
  useEffect(() => {
    if (!isInitialized) return;
    
    const handleButtonClick = (e: Event) => {
      const target = e.target as HTMLElement;
      
      // Check if clicked element is a button or contains a button
      const button = target.closest('button, [role="button"], .btn-primary, .btn-outline, .btn-secondary');
      
      if (button) {
        // Determine button type based on classes
        let buttonType: 'primary' | 'secondary' | 'ghost' = 'primary';
        
        if (button.classList.contains('btn-primary') || button.classList.contains('bg-vivid-orange')) {
          buttonType = 'primary';
        } else if (button.classList.contains('btn-outline') || button.classList.contains('btn-secondary')) {
          buttonType = 'secondary';
        } else if (button.classList.contains('btn-ghost') || button.classList.contains('hover:bg-white/10')) {
          buttonType = 'ghost';
        }
        
        playClickSound(buttonType);
      }
    };

    // Add event listener to document
    document.addEventListener('click', handleButtonClick, true);
    
    return () => {
      document.removeEventListener('click', handleButtonClick, true);
    };
  }, [isInitialized]);


  // Expose audio functions globally for other components
  useEffect(() => {
    if (!isInitialized) return;
    
    (window as any).playLaunchSound = playLaunchSound;
    (window as any).playScrollSound = playScrollSound;
    (window as any).playClickSound = playClickSound;
    
    return () => {
      delete (window as any).playLaunchSound;
      delete (window as any).playScrollSound;
      delete (window as any).playClickSound;
    };
  }, [isInitialized]);

  // Don't render anything visible - this is just for audio
  return null;
}
