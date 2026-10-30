import React, { useState } from 'react';
import { Github, Linkedin, Copy, Check, Send, Download, MessageSquare, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    // Static site friendly: open user's default email client with pre-filled content
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      `[Portfolio Contact] ${subject || 'Trao đổi công việc từ ' + name}`
    )}&body=${encodeURIComponent(
      `Xin chào Duy,\n\nTên tôi là: ${name}\nEmail phản hồi: ${email}\n\nNội dung trao đổi:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <SectionHeading
        badge="Direct Link"
        title="Liên hệ & Kết nối Hợp tác"
        subtitle="Luôn hoan nghênh các lời mời thực tập, trao đổi kỹ thuật hoặc thảo luận về các dự án công nghệ mới."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Info Card */}
        <div className="md:col-span-5 space-y-6">
          <div className="hud-panel hud-panel-corner p-6 rounded-xl space-y-6">
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[var(--accent-cyan)]" />
                Thông tin liên lạc trực tiếp
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Email là phương thức liên hệ phản hồi nhanh nhất.
              </p>
            </div>

            {/* Email Box */}
            <div className="p-3.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Địa chỉ Email chính thức
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${profileData.email}`}
                  className="font-mono text-xs sm:text-sm text-[var(--accent-cyan)] font-bold hover:underline truncate"
                >
                  {profileData.email}
                </a>
                <button
                  onClick={copyEmail}
                  type="button"
                  className="p-1.5 rounded hover:bg-[var(--accent-cyan-dim)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors shrink-0"
                  title="Sao chép email"
                  aria-label="Sao chép địa chỉ email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-[11px] font-mono text-emerald-400 animate-fadeIn">
                  ✓ Đã chép email vào clipboard!
                </p>
              )}
            </div>

            {/* Social channels */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Mạng xã hội nghề nghiệp
              </span>
              <div className="space-y-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent-cyan)] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)]" />
                    <span className="text-xs font-mono font-medium text-[var(--text-primary)]">
                      GitHub Profile
                    </span>
                  </div>
                  <Badge variant="cyan">Mã nguồn</Badge>
                </a>

                {profileData.linkedin && (
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent-cyan)] transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)]" />
                      <span className="text-xs font-mono font-medium text-[var(--text-primary)]">
                        LinkedIn Profile
                      </span>
                    </div>
                    <Badge variant="violet">Kết nối</Badge>
                  </a>
                )}
              </div>
            </div>

            {/* CV Download CTA */}
            <div className="pt-2">
              <a
                href={profileData.cvUrl || '#'}
                download
                className="w-full py-2.5 rounded-lg font-mono text-xs font-bold bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-cyber)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] hover:shadow-neon-cyan transition-all flex items-center justify-center gap-2"
                onClick={() => {
                  fetch(profileData.cvUrl || '')
                    .then(res => {
                      if (!res.ok) alert('File CV đang được cập nhật phiên bản mới nhất! Bạn có thể liên hệ trực tiếp qua email: ' + profileData.email);
                    })
                    .catch(() => alert('File CV đang được cập nhật phiên bản mới nhất! Bạn có thể liên hệ trực tiếp qua email: ' + profileData.email));
                }}
              >
                <Download className="w-4 h-4" />
                <span>Tải CV định dạng PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 hud-panel p-6 sm:p-8 rounded-xl space-y-6">
          <div>
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[var(--accent-violet)]" />
              Gửi tin nhắn nhanh
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Biểu mẫu sẽ tạo thư gửi trực tiếp qua ứng dụng email của bạn (không qua máy chủ trung gian).
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[var(--text-muted)] block">
                  Họ & Tên <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nguyễn Văn A"
                  className="w-full px-3 py-2 rounded-lg text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cyan)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[var(--text-muted)] block">
                  Địa chỉ Email <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full px-3 py-2 rounded-lg text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cyan)]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[var(--text-muted)] block">
                Tiêu đề trao đổi
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Cơ hội thực tập / Thảo luận dự án..."
                className="w-full px-3 py-2 rounded-lg text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cyan)]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[var(--text-muted)] block">
                Nội dung tin nhắn <span className="text-rose-400">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Chia sẻ thông tin về dự án hoặc lời nhắn của bạn..."
                className="w-full px-3 py-2 rounded-lg text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cyan)] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-mono text-xs font-bold bg-[var(--accent-cyan)] text-black hover:bg-cyan-300 hover:shadow-neon-cyan transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Gửi thư qua Email Client</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
