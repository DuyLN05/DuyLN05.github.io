import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { profileData } from '../../data/profile';
import { projectsData } from '../../data/projects';
import { skillsData } from '../../data/skills';

interface TerminalWidgetProps {
  onToggleTheme?: () => void;
}

export const TerminalWidget: React.FC<TerminalWidgetProps> = ({ onToggleTheme }) => {
  const [history, setHistory] = useState<Array<{ command: string; output: string | React.ReactNode }>>([
    {
      command: 'status',
      output: `System initialized. Welcome to ${profileData.name}'s Cyberpunk HUD Terminal v2.0.\nType 'help' to view available system commands.`
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <div><span className="text-[var(--accent-cyan)] font-bold">help</span> - Hiển thị danh sách lệnh</div>
            <div><span className="text-[var(--accent-cyan)] font-bold">about</span> - Thông tin nhà phát triển</div>
            <div><span className="text-[var(--accent-cyan)] font-bold">skills</span> - Danh sách kỹ năng công nghệ</div>
            <div><span className="text-[var(--accent-cyan)] font-bold">projects</span> - Danh sách dự án nổi bật</div>
            <div><span className="text-[var(--accent-cyan)] font-bold">contact</span> - Thông tin liên hệ</div>
            <div><span className="text-[var(--accent-cyan)] font-bold">theme</span> - Chuyển đổi Dark / Light mode</div>
            <div><span className="text-[var(--accent-cyan)] font-bold">music</span> - Giai điệu đang nghe</div>
            <div><span className="text-[var(--accent-cyan)] font-bold">clear</span> - Xóa màn hình terminal</div>
          </div>
        );
        break;
      case 'about':
        output = `${profileData.name} - ${profileData.title}\n${profileData.bio}\nLocation: ${profileData.location}`;
        break;
      case 'skills':
        output = skillsData.slice(0, 8).map(s => `• ${s.name} (${s.level})`).join('\n');
        break;
      case 'projects':
        output = projectsData.map(p => `• [${p.category}] ${p.title} - Status: ${p.status}`).join('\n');
        break;
      case 'contact':
        output = `Email: ${profileData.email}\nGitHub: ${profileData.github}\nLinkedIn: ${profileData.linkedin || 'N/A'}`;
        break;
      case 'theme':
        if (onToggleTheme) {
          onToggleTheme();
          output = 'Giao diện đã được chuyển đổi thành công.';
        } else {
          output = 'Không thể điều khiển theme từ widget này.';
        }
        break;
      case 'music':
        output = `🎵 Now Playing: ${profileData.favoriteTrack?.title} by ${profileData.favoriteTrack?.artist} (${profileData.favoriteTrack?.note})`;
        break;
      case 'matrix':
        output = 'Wake up, Neo... The Matrix has you. Follow the white rabbit. 🐰';
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        output = `Lệnh không hợp lệ: "${cmd}". Gõ 'help' để xem danh sách lệnh an toàn.`;
        break;
    }

    setHistory(prev => [...prev, { command: inputVal, output }]);
    setInputVal('');
  };

  return (
    <div className="rounded-xl border border-[var(--border-cyber)] bg-[#070b16] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0c1324] border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-2 text-[var(--accent-cyan)]">
          <TerminalIcon className="w-4 h-4" />
          <span className="font-semibold text-xs tracking-wider">CYBER_CLI_v2.0</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 max-h-64 sm:max-h-72 overflow-y-auto space-y-3 text-[var(--text-primary)]">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <span className="text-[var(--accent-cyan)]">duy@cyber-system:~$</span>
              <span className="text-[var(--text-primary)] font-bold">{item.command}</span>
            </div>
            <div className="text-emerald-400 whitespace-pre-wrap pl-4 border-l border-emerald-500/30">
              {item.output}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleCommand} className="flex items-center px-4 py-2 bg-[#0a0f1e] border-t border-[var(--border-subtle)]">
        <span className="text-[var(--accent-cyan)] mr-2 select-none">duy@cyber-system:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Nhập 'help', 'about', 'projects'..."
          className="flex-1 bg-transparent text-[var(--text-primary)] focus:outline-none text-xs sm:text-sm"
          autoComplete="off"
          spellCheck="false"
        />
        <button
          type="submit"
          className="ml-2 text-xs text-[var(--accent-cyan)] hover:text-white px-2 py-1 rounded bg-[var(--accent-cyan-dim)] border border-[var(--border-cyber)]"
        >
          Send
        </button>
      </form>
    </div>
  );
};
