import React, { useState, useRef } from 'react';
import { Terminal as TerminalIcon, Music, Volume2, VolumeX, Copy, Check, Sparkles, Activity } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../components/common/SectionHeading';
import { TerminalWidget } from '../components/common/TerminalWidget';
import { Badge } from '../components/common/Badge';

export const LabPage: React.FC = () => {
  const [isPlayingSynth, setIsPlayingSynth] = useState(false);
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null);
  const [activeFrequency, setActiveFrequency] = useState<number>(220); // A3 default

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // Safe Web Audio Synthesizer toggle
  const toggleSynth = () => {
    if (isPlayingSynth) {
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.disconnect();
        oscRef.current = null;
      }
      setIsPlayingSynth(false);
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContextClass();
        }
        if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }

        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();

        // Synthwave soft triangle/sine mix
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(activeFrequency, audioCtxRef.current.currentTime);

        // Low volume to be safe and pleasant
        gain.gain.setValueAtTime(0.08, audioCtxRef.current.currentTime);

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start();
        oscRef.current = osc;
        gainRef.current = gain;
        setIsPlayingSynth(true);
      } catch (err) {
        console.error('AudioContext not supported or restricted', err);
      }
    }
  };

  const changeSynthFreq = (freq: number) => {
    setActiveFrequency(freq);
    if (oscRef.current && audioCtxRef.current) {
      oscRef.current.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);
    }
  };

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippetId(id);
    setTimeout(() => setCopiedSnippetId(null), 2000);
  };

  const triggerCyberConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38E8FF', '#9B7CFF', '#FF4FD8', '#00F5A0']
    });
  };

  const sampleSnippets = [
    {
      id: 'snippet-audio',
      title: 'Khởi tạo Web Audio Oscillator an toàn',
      lang: 'typescript',
      code: `const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const osc = audioCtx.createOscillator();
const gain = audioCtx.createGain();

osc.type = 'sawtooth';
osc.frequency.value = 440; // Note A4
gain.gain.value = 0.1; // Gentle volume

osc.connect(gain);
gain.connect(audioCtx.destination);
osc.start();`
    },
    {
      id: 'snippet-hook',
      title: 'Custom Hook kiểm tra Dark Mode',
      lang: 'typescript',
      code: `export function usePrefersDark() {
  const [isDark, setIsDark] = useState(() => 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isDark;
}`
    }
  ];

  return (
    <div className="space-y-12">
      <SectionHeading
        badge="Experimental"
        title="Gaming & Audio Lab"
        subtitle="Không gian thử nghiệm các ý tưởng công nghệ tương tác, Web Audio, terminal giả lập và các đoạn mã hữu ích."
      />

      {/* Grid of Experiments */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Terminal & Confetti Easter Egg */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                <TerminalIcon className="w-5 h-5 text-[var(--accent-cyan)]" />
                HUD Cyber Terminal
              </h3>
              <Badge variant="cyan">Interactive CLI</Badge>
            </div>
            <p className="text-xs text-[var(--text-secondary)]">
              Mô phỏng shell tương tác an toàn. Gõ <code className="text-[var(--accent-cyan)]">help</code> để bắt đầu.
            </p>
            <TerminalWidget />
          </div>

          {/* Easter Egg Trigger */}
          <div className="hud-panel p-6 rounded-xl flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--accent-magenta)]" />
                Cyberpunk Easter Egg
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">
                Kích hoạt hiệu ứng pháo hoa neon phủ lên giao diện.
              </p>
            </div>
            <button
              onClick={triggerCyberConfetti}
              type="button"
              className="px-4 py-2 rounded-lg font-mono text-xs font-bold bg-[var(--accent-magenta)]/20 text-[var(--accent-magenta)] border border-[var(--accent-magenta)]/40 hover:bg-[var(--accent-magenta)] hover:text-black transition-all shrink-0"
            >
              Phóng Neon Spark
            </button>
          </div>
        </div>

        {/* Right Column: Web Audio Synthesizer & Equalizer */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Web Audio Synth Sandbox */}
          <div className="hud-panel hud-panel-corner p-6 rounded-xl space-y-5 border-[var(--accent-cyan)]/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-bold text-[var(--accent-cyan)]">
                <Music className="w-5 h-5" />
                <span>Web Audio Synth Demo</span>
              </div>
              <Badge variant={isPlayingSynth ? 'green' : 'default'}>
                {isPlayingSynth ? 'Active 60fps' : 'Muted'}
              </Badge>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Mô phỏng bộ tạo sóng âm thanh hình tam giác (Triangle Wave) thời gian thực sử dụng Web Audio API gốc. Không phát tự động; mặc định tắt tiếng.
            </p>

            {/* Visualizer Equalizer Bar Animation */}
            <div className="h-16 bg-[#070b16] rounded-lg p-3 border border-[var(--border-cyber)] flex items-end justify-center gap-1.5 overflow-hidden">
              {[40, 70, 30, 90, 50, 85, 20, 60, 95, 45, 80, 35].map((val, idx) => (
                <div
                  key={idx}
                  className={`w-2.5 rounded-t-sm transition-all duration-150 ${
                    isPlayingSynth
                      ? 'bg-gradient-to-t from-[var(--accent-cyan)] to-[var(--accent-magenta)] animate-equalizer'
                      : 'bg-slate-700/40 h-2'
                  }`}
                  style={{
                    height: isPlayingSynth ? `${val}%` : '8px',
                    animationDelay: `${idx * 0.1}s`
                  }}
                />
              ))}
            </div>

            {/* Note pitch selector */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono text-[var(--text-muted)] block uppercase">
                Chọn nốt tần số: {activeFrequency} Hz
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { label: 'C3 (130Hz)', freq: 130.81 },
                  { label: 'E3 (164Hz)', freq: 164.81 },
                  { label: 'A3 (220Hz)', freq: 220.00 },
                  { label: 'C4 (261Hz)', freq: 261.63 },
                ].map(note => (
                  <button
                    key={note.freq}
                    onClick={() => changeSynthFreq(note.freq)}
                    type="button"
                    className={`py-1 rounded text-[10px] font-mono border transition-all ${
                      activeFrequency === note.freq
                        ? 'border-[var(--accent-cyan)] text-[var(--accent-cyan)] bg-[var(--accent-cyan-dim)] font-bold'
                        : 'border-[var(--border-subtle)] text-[var(--text-secondary)] bg-[var(--bg-secondary)]'
                    }`}
                  >
                    {note.label.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Audio Button */}
            <button
              onClick={toggleSynth}
              type="button"
              className={`w-full py-2.5 rounded-lg font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                isPlayingSynth
                  ? 'bg-rose-500 text-white hover:bg-rose-600'
                  : 'bg-[var(--accent-cyan)] text-black hover:bg-cyan-300 hover:shadow-neon-cyan'
              }`}
            >
              {isPlayingSynth ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>Dừng âm thanh Synth</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span>Kích hoạt âm thanh Synth</span>
                </>
              )}
            </button>
          </div>

          {/* System Status Display (Decorative) */}
          <div className="hud-panel p-5 rounded-xl space-y-3 font-mono text-xs">
            <div className="text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-2 font-semibold">
              <Activity className="w-4 h-4 text-emerald-400" />
              Runtime Telemetry
            </div>
            <div className="space-y-1.5 text-[var(--text-secondary)]">
              <div className="flex justify-between">
                <span>Renderer:</span>
                <span className="text-[var(--accent-cyan)]">Vite + React 18</span>
              </div>
              <div className="flex justify-between">
                <span>Hosting:</span>
                <span className="text-[var(--accent-violet)]">GitHub Pages (Static)</span>
              </div>
              <div className="flex justify-between">
                <span>Reduced Motion:</span>
                <span className="text-emerald-400">Supported (WCAG)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Playground Section */}
      <section className="space-y-6 pt-6">
        <SectionHeading
          badge="Snippets"
          title="Thư viện Code Snippets"
          subtitle="Các hàm tiện ích thường dùng được đúc kết từ quá trình lập trình thực tế, có thể sao chép nhanh."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleSnippets.map(snippet => (
            <div key={snippet.id} className="hud-panel rounded-xl overflow-hidden border border-[var(--border-subtle)]">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
                <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
                  {snippet.title}
                </span>
                <button
                  onClick={() => handleCopy(snippet.id, snippet.code)}
                  type="button"
                  className="px-2 py-1 rounded text-xs font-mono text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan-dim)] flex items-center gap-1 transition-colors"
                  aria-label="Sao chép đoạn mã"
                >
                  {copiedSnippetId === snippet.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Đã chép!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 bg-[#070b16] overflow-x-auto text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
                <code>{snippet.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
