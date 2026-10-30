import React from 'react';
import { Download, GraduationCap, Code, CheckCircle, Terminal, Heart } from 'lucide-react';
import { profileData } from '../data/profile';
import { skillsData } from '../data/skills';
import { timelineData } from '../data/timeline';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';

export const AboutPage: React.FC = () => {
  const categories = [
    { key: 'frontend', label: 'Frontend Architecture' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'database', label: 'Databases' },
    { key: 'tools', label: 'DevOps & Tooling' },
    { key: 'concepts', label: 'Computer Science Fundamentals' },
  ] as const;

  return (
    <div className="space-y-16">
      {/* 1. Header & Bio */}
      <section className="space-y-6">
        <SectionHeading
          badge="Profile"
          title="Về bản thân & Định hướng nghề nghiệp"
          subtitle="Hành trình theo đuổi ngành kỹ thuật phần mềm, các giá trị làm việc và mục tiêu phát triển."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            <p>
              Xin chào! Mình là <strong className="text-[var(--text-primary)]">{profileData.name}</strong>, sinh viên chuyên ngành Công nghệ Thông tin với định hướng phát triển trở thành một <strong>Full-stack Web Developer</strong>.
            </p>
            <p>
              Đối với mình, lập trình không chỉ là việc ghép nối các đoạn mã mà là nghệ thuật giải quyết vấn đề thực tế. Mình đặc biệt hứng thú với việc tối ưu hóa hiệu năng tải trang, xây dựng giao diện người dùng trực quan, responsive và thiết kế hệ thống backend có tổ chức, dễ bảo trì.
            </p>
            <p>
              Bên cạnh thời gian code, mình yêu thích chơi game chiến thuật, khám phá các dải sóng Synthwave và tìm hiểu cách áp dụng Web Audio API vào các trải nghiệm web sáng tạo.
            </p>
          </div>

          <div className="lg:col-span-4 hud-panel hud-panel-corner p-6 rounded-xl space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--accent-cyan)] font-semibold flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Quick Specs
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)]">Vai trò:</span>
                <span className="text-[var(--text-primary)] text-right">Full-stack Dev</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)]">Khu vực:</span>
                <span className="text-[var(--text-primary)] text-right">{profileData.location}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)]">Trạng thái:</span>
                <span className="text-[var(--accent-green)] text-right">Sẵn sàng thực tập</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--text-muted)]">Đam mê:</span>
                <span className="text-[var(--accent-violet)] text-right">Web & Web Audio</span>
              </div>
            </div>

            <a
              href={profileData.cvUrl || '#'}
              download
              className="w-full mt-4 px-4 py-2.5 rounded-lg font-mono text-xs font-bold bg-[var(--accent-cyan)] text-[var(--on-accent)] hover:brightness-110 hover:shadow-neon-cyan transition-all flex items-center justify-center gap-2"
              onClick={() => {
                // If CV file doesn't exist yet, show clean alert
                fetch(profileData.cvUrl || '')
                  .then(res => {
                    if (!res.ok) alert('File CV đang được cập nhật phiên bản mới nhất! Bạn có thể liên hệ trực tiếp qua email: ' + profileData.email);
                  })
                  .catch(() => alert('File CV đang được cập nhật phiên bản mới nhất! Bạn có thể liên hệ trực tiếp qua email: ' + profileData.email));
              }}
            >
              <Download className="w-4 h-4" />
              <span>Tải CV cá nhân (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Core Work Values */}
      <section className="space-y-6">
        <SectionHeading
          badge="Philosophy"
          title="Giá trị khi làm việc"
          subtitle="Những nguyên tắc cốt lõi mình luôn tuân thủ trong quá trình học tập và làm việc nhóm."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-cyber)] space-y-2">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-dim)] text-[var(--accent-cyan)] flex items-center justify-center mb-3">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[var(--text-primary)]">Giải quyết bài toán thật</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Tập trung vào giá trị mang lại cho người dùng cuối thay vì sa đà vào những công nghệ hào nhoáng không cần thiết.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-cyber)] space-y-2">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-violet-dim)] text-[var(--accent-violet)] flex items-center justify-center mb-3">
              <Code className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[var(--text-primary)]">Mã nguồn sạch & Chuẩn mực</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Viết code có cấu trúc, type-safe với TypeScript, comment khi cần thiết và đặt tên biến có ngữ nghĩa rõ ràng.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-cyber)] space-y-2">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-green-dim)] text-[var(--accent-green)] flex items-center justify-center mb-3">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[var(--text-primary)]">Học hỏi không ngừng</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Chủ động nghiên cứu tài liệu chính thức (Official Docs), đọc RFC và thực hành viết blog kỹ thuật để đào sâu kiến thức.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-cyber)] space-y-2">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-magenta-dim)] text-[var(--accent-magenta)] flex items-center justify-center mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-[var(--text-primary)]">Trách nhiệm & Hợp tác</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Tôn trọng deadline, giao tiếp cởi mở trong Git workflow (Pull Requests, code review) và sẵn sàng hỗ trợ đồng đội.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Skills Matrix */}
      <section className="space-y-6">
        <SectionHeading
          badge="Capabilities"
          title="Bản đồ kỹ năng công nghệ"
          subtitle="Phân nhóm chi tiết theo từng lĩnh vực. Đánh giá trung thực dựa trên mức độ sử dụng thực tế trong dự án."
        />

        <div className="space-y-8">
          {categories.map(cat => {
            const list = skillsData.filter(s => s.category === cat.key);
            if (list.length === 0) return null;
            return (
              <div key={cat.key} className="hud-panel rounded-xl p-6">
                <h4 className="text-sm font-mono uppercase tracking-wider text-[var(--accent-cyan)] font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded bg-[var(--accent-cyan)]" />
                  {cat.label}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {list.map(skill => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-bold text-[var(--text-primary)]">
                          {skill.name}
                        </span>
                        <Badge
                          variant={
                            skill.level.includes('Core')
                              ? 'cyan'
                              : skill.level.includes('Familiar')
                              ? 'violet'
                              : 'default'
                          }
                        >
                          {skill.level}
                        </Badge>
                      </div>
                      {skill.tags && (
                        <div className="flex flex-wrap gap-1">
                          {skill.tags.map(t => (
                            <span key={t} className="text-[10px] font-mono text-[var(--text-muted)]">
                              #{t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Learning Journey Timeline */}
      <section className="space-y-6">
        <SectionHeading
          badge="Milestones"
          title="Hành trình học tập & Cột mốc"
          subtitle="Quá trình tích lũy kiến thức qua từng năm tại trường đại học và dự án tự nghiên cứu."
        />

        <div className="relative border-l-2 border-[var(--border-cyber)] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {timelineData.map(item => (
            <div key={item.id} className="relative group">
              {/* Timeline node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-cyan)] group-hover:bg-[var(--accent-cyan)] group-hover:shadow-neon-cyan transition-all" />

              <div className="hud-panel p-5 rounded-xl space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[var(--accent-cyan)]">
                    {item.period}
                  </span>
                  <Badge variant="violet">{item.institution}</Badge>
                </div>
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map(t => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
