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
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] cyber-grid selection:bg-[var(--accent-cyan)] selection:text-black transition-colors duration-200">
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};
