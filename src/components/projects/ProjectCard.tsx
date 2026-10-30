import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { Badge } from '../common/Badge';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="hud-panel hud-panel-corner rounded-xl p-6 flex flex-col justify-between hover:border-[var(--accent-cyan)] transition-all duration-300 group hover:-translate-y-1">
      <div>
        {/* Header badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="cyan">{project.category}</Badge>
          <span className={`text-xs font-mono px-2 py-0.5 rounded border ${
            project.status === 'Completed'
              ? 'border-[var(--accent-green-border)] text-[var(--accent-green)] bg-[var(--accent-green-dim)]'
              : 'border-[var(--accent-sand-border)] text-[var(--accent-sand)] bg-[var(--accent-sand-dim)]'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors mb-2">
          <Link to={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>
        <p className="text-xs font-mono text-[var(--accent-violet)] mb-3">
          {project.role}
        </p>
        <p className="text-sm text-[var(--text-secondary)] line-clamp-3 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action links */}
      <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
        <Link
          to={`/projects/${project.slug}`}
          className="text-xs font-mono text-[var(--accent-cyan)] hover:underline flex items-center gap-1 group-hover:gap-1.5 transition-all"
        >
          <span>Chi tiết kiến trúc</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <div className="flex items-center gap-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-md hover:bg-[var(--accent-cyan-dim)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
              title="GitHub Repository"
              aria-label={`Source code for ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-md hover:bg-[var(--accent-cyan-dim)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
              title="Live Demo"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
