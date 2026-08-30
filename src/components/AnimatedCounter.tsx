import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number; // in seconds
  delay?: number; // in seconds
  prefix?: string;
  suffix?: string;
  trigger?: boolean;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration = 1.2,
  delay = 0,
  prefix = '',
  suffix = '%',
  trigger = true,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const prevTargetRef = useRef(target);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;
    let timeoutId: number;

    const startAnimation = () => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        
        // Smooth easeOutCubic curve
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.round(easeOut * target);

        setCount(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    };

    if (delay > 0) {
      timeoutId = window.setTimeout(startAnimation, delay * 1000);
    } else {
      startAnimation();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, delay, trigger]);

  return (
    <span className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};
