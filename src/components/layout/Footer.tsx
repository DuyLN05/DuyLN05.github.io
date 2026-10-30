import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart, Anchor, Music } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[var(--border-cyber)] bg-[var(--bg-secondary)] mt-auto transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 font-mono text-lg font-bold text-[var(--text-primary)]">
              <Anchor className="w-5 h-5 text-[var(--accent-cyan)]" />
              <span>{profileData.name}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-[var(--accent-green-dim)] text-[var(--accent-green)] border border-[var(--accent-green-border)] font-sans">
                Active
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] max-w-sm leading-relaxed">
              {profileData.title}. Xây dựng giải pháp web hiệu năng cao với niềm đam mê công nghệ, gaming và âm nhạc.
            </p>
            {profileData.favoriteTrack && (
              <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                <Music className="w-3.5 h-3.5 text-[var(--accent-violet)] animate-pulse" />
                <span>Đang nghe: {profileData.favoriteTrack.title} - {profileData.favoriteTrack.artist}</span>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--accent-cyan)] font-semibold">
              Khám phá
            </h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <Link to="/about" className="hover:text-[var(--accent-cyan)] transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[var(--accent-cyan)] transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/posts" className="hover:text-[var(--accent-cyan)] transition-colors">
                  Technical Posts
                </Link>
              </li>
              <li>
                <Link to="/lab" className="hover:text-[var(--accent-cyan)] transition-colors">
                  Gaming Lab & Audio
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--accent-cyan)] font-semibold">
              Kết nối
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg border border-[var(--border-cyber)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:shadow-neon-cyan transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              {profileData.linkedin && (
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg border border-[var(--border-cyber)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:shadow-neon-cyan transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Send Email"
                className="p-2 rounded-lg border border-[var(--border-cyber)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:shadow-neon-cyan transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              Đang sẵn sàng cho thực tập & dự án hợp tác.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)] font-mono">
          <p>© {new Date().getFullYear()} Lê Nhật Duy (DuyLN05). All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with <Heart className="w-3.5 h-3.5 text-[var(--accent-magenta)] inline" /> & React + Vite on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
};
