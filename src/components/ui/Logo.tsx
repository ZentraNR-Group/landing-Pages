import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 40, className = '' }: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-primary)" />
          <stop offset="100%" stopColor="var(--color-secondary)" />
        </linearGradient>
        <linearGradient id="logoGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="100%" stopColor="var(--color-primary)" />
        </linearGradient>
      </defs>

      <g transform="translate(4, 5)">
        <rect x="22" y="0" width="12" height="12" rx="3" fill="url(#logoGradLight)" />
        <rect x="0" y="5" width="20" height="20" rx="4" fill="url(#logoGradDark)" />
        <rect x="12" y="16" width="20" height="20" rx="4" fill="url(#logoGradDark)" />
        <g
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 10 12 L 10 18 L 22 18 L 22 24" opacity="0.8" />
          <circle cx="10" cy="10" r="2.5" />
          <circle cx="22" cy="26" r="2.5" />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
