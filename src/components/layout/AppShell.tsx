import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface AppShellProps {
  children: ReactNode;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const AppShell: React.FC<AppShellProps> = ({ children, theme, onToggleTheme }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] ocean-bg transition-colors duration-200">
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {children}
      </main>
      {/* Sóng biển dẫn xuống footer */}
      <div aria-hidden="true" className="relative overflow-hidden -mb-px text-[var(--bg-secondary)]">
        <svg className="wave-divider wave-layer-slow" style={{ width: '200%' }} viewBox="0 0 2880 56" preserveAspectRatio="none">
          <path fill="currentColor" opacity="0.45" d="M0 28 C 240 56, 480 0, 720 28 S 1200 56, 1440 28 S 1920 0, 2160 28 S 2640 56, 2880 28 V56 H0 Z" />
        </svg>
        <svg className="wave-divider wave-layer absolute inset-x-0 bottom-0" style={{ width: '200%' }} viewBox="0 0 2880 56" preserveAspectRatio="none">
          <path fill="currentColor" d="M0 36 C 240 8, 480 56, 720 36 S 1200 8, 1440 36 S 1920 56, 2160 36 S 2640 8, 2880 36 V56 H0 Z" />
        </svg>
      </div>
      <Footer />
    </div>
  );
};
