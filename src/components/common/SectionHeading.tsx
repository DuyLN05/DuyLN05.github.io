import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'left'
}) => {
  return (
    <div className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider mb-3 bg-[var(--accent-cyan-dim)] text-[var(--accent-cyan)] border border-[var(--border-cyber)] ${align === 'center' ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-ping" />
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      <div className={`mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-violet)] ${align === 'center' ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
