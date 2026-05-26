import React from 'react';

interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 200, height = 50 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 240 60" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo Farmacia Jiménez Rosales"
    >
      {/* Icon: Minimalist Medical Cross with leaf accent */}
      <rect x="10" y="15" width="30" height="30" rx="4" fill="var(--color-primary)" />
      <path d="M25 20V40M15 30H35" stroke="var(--color-white)" strokeWidth="4" strokeLinecap="round" />
      <path d="M35 15C38 10 45 10 45 20C45 25 38 30 35 30" fill="var(--color-accent)" opacity="0.8" />

      {/* Typography: Jimenez Rosales */}
      <text 
        x="55" 
        y="32" 
        fontFamily="var(--font-serif)" 
        fontSize="22" 
        fontWeight="bold" 
        fill="var(--color-primary)"
      >
        Jiménez Rosales
      </text>
      <text 
        x="55" 
        y="48" 
        fontFamily="var(--font-sans)" 
        fontSize="12" 
        letterSpacing="2" 
        fill="var(--color-text-light)"
        style={{ textTransform: 'uppercase' }}
      >
        Farmacia & Salud
      </text>
    </svg>
  );
};

export default Logo;
