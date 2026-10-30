import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      type="button"
      className="p-2 rounded-lg border border-[var(--border-cyber)] bg-[var(--bg-secondary)] hover:border-[var(--accent-cyan)] hover:shadow-neon-cyan transition-all text-[var(--accent-cyan)] flex items-center justify-center focus:outline-none"
      aria-label={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 animate-spin-slow" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
};
