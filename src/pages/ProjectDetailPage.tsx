import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, CheckCircle2, AlertTriangle, Lightbulb, UserCheck, Layers } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Badge } from '../components/common/Badge';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="text-center py-20 hud-panel rounded-xl max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">404 - Dự án không tồn tại</h2>
        <p className="text-sm text-[var(--text-secondary)] mb-6">
          Không tìm thấy dự án với mã định danh "{slug}".
        </p>
        <Link
          to="/projects"
          className="px-4 py-2 rounded-lg font-mono text-xs font-bold bg-[var(--accent-cyan)] text-[var(--on-accent)] inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại danh sách dự án</span>
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-10 max-w-4xl mx-auto">
      {/* Back navigation */}
      <div>
        <Link
          to="/projects"
          className="text-xs font-mono text-[var(--accent-cyan)] hover:underline inline-flex items-center gap-1.5 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Trở về danh sách dự án</span>
        </Link>
      </div>

      {/* Header Info */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="cyan">{project.category}</Badge>
          <Badge variant={project.status === 'Completed' ? 'green' : 'violet'}>
            Status: {project.status}
          </Badge>
          <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            Năm thực hiện: {project.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)]">
          {project.title}
        </h1>
        <p className="text-lg font-mono text-[var(--accent-cyan)]">
          {project.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-lg font-mono text-xs font-bold bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-cyber)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] hover:shadow-neon-cyan transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-lg font-mono text-xs font-bold bg-[var(--accent-cyan)] text-[var(--on-accent)] hover:brightness-110 hover:shadow-neon-cyan transition-all flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Xem Live Demo</span>
            </a>
          )}
        </div>
      </header>

      {/* Tech Stack Matrix */}
      <section className="hud-panel p-5 rounded-xl space-y-3">
        <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent-cyan)] font-semibold flex items-center gap-2">
          <Layers className="w-4 h-4" />
          Tech Stack Sử Dụng
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded text-xs font-mono bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Detailed Story Sections */}
      <div className="space-y-8 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
        
        {/* 1. Problem & Solution */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold text-[var(--text-primary)]">
            1. Vấn đề & Giải pháp kiến trúc
          </h3>
          <p>{project.description}</p>
        </section>

        {/* 2. Personal Contribution */}
        <section className="space-y-3 p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
          <h3 className="text-lg font-bold text-[var(--accent-cyan)] flex items-center gap-2">
            <UserCheck className="w-5 h-5" />
            2. Vai trò cá nhân & Đóng góp chính
          </h3>
          <p className="font-mono text-sm text-[var(--text-primary)] font-semibold">
            {project.role}
          </p>
          <p className="text-sm">
            Trực tiếp thiết kế cấu trúc thư mục, triển khai các luồng xử lý dữ liệu trọng yếu, viết unit/integration checks và tối ưu hóa trải nghiệm tương tác của người dùng.
          </p>
        </section>

        {/* 3. Key Features */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[var(--accent-green)]" />
            3. Các tính năng nổi bật
          </h3>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-2 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Technical Challenge */}
        <section className="space-y-3 p-5 rounded-xl bg-[var(--accent-sand-dim)] border border-[var(--accent-sand-border)]">
          <h3 className="text-lg font-bold text-[var(--accent-sand)] flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            4. Thách thức kỹ thuật lớn nhất & Cách giải quyết
          </h3>
          <p className="text-sm text-[var(--text-primary)]">
            {project.challenges}
          </p>
        </section>

        {/* 5. Learnings */}
        <section className="space-y-3 p-5 rounded-xl bg-[var(--accent-violet-dim)] border border-[var(--accent-violet-border)]">
          <h3 className="text-lg font-bold text-[var(--accent-violet)] flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            5. Bài học rút ra & Định hướng phát triển tiếp
          </h3>
          <p className="text-sm text-[var(--text-primary)]">
            {project.learnings}
          </p>
        </section>
      </div>
    </article>
  );
};
