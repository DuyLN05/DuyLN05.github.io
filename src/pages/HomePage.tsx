import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Sparkles, FolderGit2, BookOpen, Send, Music, Terminal as TerminalIcon } from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { getAllPosts } from '../utils/markdown';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectCard } from '../components/projects/ProjectCard';
import { PostCard } from '../components/posts/PostCard';
import { TerminalWidget } from '../components/common/TerminalWidget';

interface HomePageProps {
  onToggleTheme: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onToggleTheme }) => {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 3);
  const coreSkills = skillsData.filter(s => s.level.includes('Core'));

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-4 sm:pt-8 pb-8">
        {/* Bong bóng nổi (trang trí) */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <span className="bubble" style={{ left: '6%', width: 14, height: 14, animationDelay: '0s' }} />
          <span className="bubble" style={{ left: '22%', width: 8, height: 8, animationDelay: '3s' }} />
          <span className="bubble" style={{ left: '48%', width: 18, height: 18, animationDelay: '6s', animationDuration: '15s' }} />
          <span className="bubble" style={{ left: '71%', width: 10, height: 10, animationDelay: '2s' }} />
          <span className="bubble" style={{ left: '90%', width: 16, height: 16, animationDelay: '8s', animationDuration: '14s' }} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[var(--accent-cyan-dim)] text-[var(--accent-cyan)] border border-[var(--border-cyber)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
              <span>Available for internships & collaborations</span>
            </div>

            {/* Main Title & Role */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-violet)] to-[var(--accent-green)]">{profileData.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-mono text-[var(--accent-cyan)]">
                {profileData.title}
              </p>
            </div>

            {/* Bio description */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
              {profileData.bio}
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/projects"
                className="px-5 py-3 rounded-lg font-mono text-xs sm:text-sm font-bold bg-[var(--accent-cyan)] text-[var(--on-accent)] hover:brightness-110 hover:shadow-neon-cyan transition-all flex items-center gap-2"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/posts"
                className="px-5 py-3 rounded-lg font-mono text-xs sm:text-sm font-semibold bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-cyber)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Posts</span>
              </Link>
              <Link
                to="/contact"
                className="px-4 py-3 rounded-lg font-mono text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </Link>
            </div>
          </div>

          {/* Hero Right Widget (Interactive Ocean Terminal) */}
          <div className="lg:col-span-5">
            <TerminalWidget onToggleTheme={onToggleTheme} />
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW & CORE VALUES */}
      <section className="hud-panel rounded-2xl p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              About Mindset
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Kỹ sư phần mềm tập trung vào giải quyết vấn đề và chất lượng mã nguồn
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {profileData.aboutShort}
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="text-xs font-mono text-[var(--accent-cyan)] hover:underline inline-flex items-center gap-1 font-semibold"
              >
                <span>Xem chi tiết lộ trình học tập & triết lý làm việc</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Highlights stat panel */}
          <div className="flex flex-col justify-center space-y-3 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase">Trọng tâm kỹ thuật</div>
            <div className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[var(--accent-cyan)]" />
              TypeScript & Modern React
            </div>
            <div className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-[var(--accent-violet)]" />
              Node.js & REST Architecture
            </div>
            <div className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Music className="w-4 h-4 text-[var(--accent-magenta)]" />
              Web Audio & Creative Coding
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECH STACK */}
      <section>
        <SectionHeading
          badge="Tech Stack"
          title="Công nghệ & Kỹ năng cốt lõi"
          subtitle="Danh mục các công nghệ mình sử dụng thường xuyên trong việc xây dựng sản phẩm và học tập thực tế."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {coreSkills.map(skill => (
            <div
              key={skill.name}
              className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-cyan)] hover:shadow-neon-cyan transition-all text-center"
            >
              <div className="font-mono text-sm font-bold text-[var(--text-primary)] mb-1">
                {skill.name}
              </div>
              <div className="text-[10px] font-mono text-[var(--accent-cyan)] uppercase tracking-wider">
                {skill.category}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PROJECTS */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <SectionHeading
            badge="Portfolio"
            title="Dự án nổi bật"
            subtitle="Các dự án tiêu biểu có mã nguồn thực tế và giải pháp kỹ thuật cụ thể."
          />
          <Link
            to="/projects"
            className="text-xs font-mono text-[var(--accent-cyan)] hover:underline inline-flex items-center gap-1 shrink-0 font-semibold mb-8"
          >
            <span>Tất cả dự án ({projectsData.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 5. LATEST POSTS FROM MARKDOWN */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <SectionHeading
            badge="Technical Blog"
            title="Bài viết kỹ thuật mới nhất"
            subtitle="Các ghi chép học tập, debug diary và kinh nghiệm tối ưu hóa frontend từ file Markdown."
          />
          <Link
            to="/posts"
            className="text-xs font-mono text-[var(--accent-cyan)] hover:underline inline-flex items-center gap-1 shrink-0 font-semibold mb-8"
          >
            <span>Đọc tất cả bài viết ({latestPosts.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* 6. MUSIC CORNER & CURRENT FOCUS */}
      <section className="hud-panel hud-panel-corner rounded-2xl p-6 sm:p-8 border-[var(--accent-violet-border)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-violet)] uppercase tracking-wider">
              <Music className="w-4 h-4 animate-bounce" />
              Music & Creative Hub
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              Giai điệu lập trình & Gaming Lab
            </h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-xl">
              Âm nhạc là chất xúc tác giúp mình duy trì sự tập trung cao độ khi debug và thiết kế hệ thống. Ghé thăm phòng thí nghiệm tương tác để trải nghiệm bộ mô phỏng synthwave!
            </p>
          </div>

          <Link
            to="/lab"
            className="px-5 py-3 rounded-lg font-mono text-xs sm:text-sm font-bold bg-[var(--accent-violet)] text-[var(--on-accent)] hover:brightness-110 hover:shadow-neon-violet transition-all shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Khám phá Lab</span>
          </Link>
        </div>
      </section>

      {/* 7. CONTACT CTA */}
      <section className="text-center py-12 px-4 rounded-2xl bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-secondary)] border border-[var(--border-cyber)]">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Bạn đang tìm kiếm một thực tập sinh hoặc đồng đội nhiệt huyết?
          </h2>
          <p className="text-sm text-[var(--text-secondary)]">
            Mình luôn sẵn sàng trao đổi về các cơ hội thực tập, dự án mã nguồn mở hoặc trao đổi kỹ thuật.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg font-mono text-xs sm:text-sm font-bold bg-[var(--accent-cyan)] text-[var(--on-accent)] hover:brightness-110 hover:shadow-neon-cyan transition-all"
            >
              Liên hệ ngay
            </Link>
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg font-mono text-xs sm:text-sm font-semibold bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-cyan)] transition-all"
            >
              Xem GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
