import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Terminal, Menu, X, Cpu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/posts', label: 'Posts' },
    { to: '/lab', label: 'Lab' },
    { to: '/contact', label: 'Contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-cyber)] bg-[var(--bg-surface-glass)] backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Monogram */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 font-mono text-base sm:text-lg font-bold tracking-wider text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-colors group"
          >
            <div className="w-8 h-8 rounded border border-[var(--accent-cyan)] flex items-center justify-center bg-cyan-950/30 text-[var(--accent-cyan)] shadow-[0_0_10px_rgba(56,232,255,0.3)] group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4" />
            </div>
            <span>
              DUY<span className="text-[var(--accent-cyan)]">.DEV</span>
            </span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--accent-cyan-dim)] text-[var(--accent-cyan)] border border-[var(--border-cyber)] hidden sm:inline-block">
              v2.0
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-[var(--accent-cyan)] bg-[var(--accent-cyan-dim)] border border-[var(--border-cyber)] shadow-[0_0_12px_rgba(56,232,255,0.2)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions: Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg border border-[var(--border-cyber)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-cyber)] bg-[var(--bg-surface)] px-4 pt-3 pb-5 space-y-2 animate-fadeIn shadow-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] px-3 mb-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
            Navigation HUD
          </div>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded text-base font-medium transition-all ${
                  isActive
                    ? 'text-[var(--accent-cyan)] bg-[var(--accent-cyan-dim)] border-l-4 border-[var(--accent-cyan)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};
