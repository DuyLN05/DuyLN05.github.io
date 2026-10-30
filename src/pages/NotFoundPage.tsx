import React from 'react';
import { Link } from 'react-router-dom';
import { LifeBuoy, Home, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full hud-panel hud-panel-corner p-8 rounded-2xl text-center space-y-6 border-[var(--border-cyber)]">
        <div className="w-16 h-16 rounded-2xl bg-[var(--accent-cyan-dim)] border border-[var(--border-cyber)] text-[var(--accent-cyan)] mx-auto flex items-center justify-center animate-float">
          <LifeBuoy className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent-magenta)] font-bold">
            LỖI 404 // LẠC HƯỚNG
          </div>
          <h1 className="text-3xl font-black text-[var(--text-primary)]">
            Con thuyền đã lạc hướng
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-mono">
            Không tìm thấy trang tại đường dẫn này. URL có thể đã bị thay đổi hoặc chưa tồn tại.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] font-mono text-[11px] text-[var(--accent-cyan)] text-left flex items-center gap-2">
          <Compass className="w-4 h-4 shrink-0" />
          <span>Đang dẫn bạn về bến: target = "/"</span>
        </div>

        <Link
          to="/"
          className="w-full py-3 rounded-lg font-mono text-xs font-bold bg-[var(--accent-cyan)] text-[var(--on-accent)] hover:brightness-110 hover:shadow-neon-cyan transition-all flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Quay về Trang Chủ</span>
        </Link>
      </div>
    </div>
  );
};
