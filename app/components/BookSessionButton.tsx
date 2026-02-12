'use client';

import { useState } from 'react';
import CalendlyModal from './CalendlyModal';

interface BookSessionButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  variant?: 'default' | 'outline' | 'black';
}

export default function BookSessionButton({
  className = '',
  style,
  children = 'Book a session',
  variant = 'default',
}: BookSessionButtonProps) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const defaultStyles: React.CSSProperties = {
    ...(variant === 'default' && {
      backgroundColor: '#e6ff32',
      color: '#000',
      border: '0.5px solid #000',
      borderRadius: '50px',
    }),
    ...(variant === 'outline' && {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontSize: '14px',
      fontWeight: 450,
      padding: '8px 16px',
      borderRadius: '24px',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      transition: '0.2s',
      color: 'rgb(10, 18, 23)',
      backgroundColor: 'transparent',
    }),
    ...(variant === 'black' && {
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: '12px',
    }),
    ...style,
  };

  return (
    <>
      <button
        onClick={() => setIsCalendlyOpen(true)}
        className={className}
        style={defaultStyles}
      >
        {children}
      </button>
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
}

