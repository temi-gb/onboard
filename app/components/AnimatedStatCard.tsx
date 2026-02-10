'use client';

import { useEffect, useState } from 'react';

interface AnimatedStatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
  className?: string;
}

export default function AnimatedStatCard({
  value,
  suffix = '',
  prefix = '',
  label,
  delay = 0,
  className = '',
}: AnimatedStatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let timeoutId: NodeJS.Timeout;
    let startTime: number;

    const startAnimation = () => {
      startTime = Date.now();
      const duration = 2000; // 2 seconds
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(value * progress);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start immediately on mount, with optional delay
    if (delay > 0) {
      timeoutId = setTimeout(startAnimation, delay);
    } else {
      // Use requestAnimationFrame to start on next frame, ensuring component is mounted
      animationFrameId = requestAnimationFrame(startAnimation);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [value, delay]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <>
      <div className="text-2xl sm:text-3xl font-bold text-[#171717]">
        {prefix}
        {formatNumber(count)}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-[#171717] mt-1 opacity-80">
        {label}
      </div>
    </>
  );
}

