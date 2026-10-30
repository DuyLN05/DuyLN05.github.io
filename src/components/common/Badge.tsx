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
    violet: 'bg-[var(--accent-violet-dim)] text-[var(--accent-violet)] border-[var(--accent-violet-border)]',
    magenta: 'bg-[var(--accent-magenta-dim)] text-[var(--accent-magenta)] border-[var(--accent-magenta-border)]',
    green: 'bg-[var(--accent-green-dim)] text-[var(--accent-green)] border-[var(--accent-green-border)]',
    default: 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
