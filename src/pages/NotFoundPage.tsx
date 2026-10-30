import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, Terminal } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full hud-panel hud-panel-corner p-8 rounded-2xl text-center space-y-6 border-red-500/40">
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 mx-auto flex items-center justify-center animate-pulse">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
            HTTP_ERROR_404 // NOT_FOUND
          </div>
          <h1 className="text-3xl font-black text-[var(--text-primary)]">
            Tọa độ không xác định
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-mono">
            Hệ thống không tìm thấy tài nguyên tại đường dẫn này. URL có thể đã bị thay đổi hoặc chưa được khởi tạo.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] font-mono text-[11px] text-[var(--accent-cyan)] text-left flex items-center gap-2">
          <Terminal className="w-4 h-4 shrink-0" />
          <span>RESTORING_COORDINATES: target = "/"</span>
        </div>

        <Link
          to="/"
          className="w-full py-3 rounded-lg font-mono text-xs font-bold bg-[var(--accent-cyan)] text-black hover:bg-cyan-300 hover:shadow-neon-cyan transition-all flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Quay về Trang Chủ</span>
        </Link>
      </div>
    </div>
  );
};
