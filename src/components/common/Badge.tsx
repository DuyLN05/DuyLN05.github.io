import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'violet' | 'magenta' | 'green' | 'default';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  className = ''
}) => {
  const variantStyles = {
    cyan: 'bg-[var(--accent-cyan-dim)] text-[var(--accent-cyan)] border-[var(--border-cyber)]',
    violet: 'bg-[var(--accent-violet-dim)] text-[var(--accent-violet)] border-[var(--accent-violet)]/30',
    magenta: 'bg-[var(--accent-magenta)]/10 text-[var(--accent-magenta)] border-[var(--accent-magenta)]/30',
    green: 'bg-[var(--accent-green)]/10 text-[var(--accent-green)] border-[var(--accent-green)]/30',
    default: 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
