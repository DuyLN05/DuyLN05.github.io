import React, { useState } from 'react';
import { Search, Layers } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { SectionHeading } from '../components/common/SectionHeading';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Full-stack', 'Frontend', 'Audio / Creative', 'System & Tools'];

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesQuery = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.stack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-12">
      <SectionHeading
        badge="Projects"
        title="Dự án Kỹ thuật & Thực nghiệm"
        subtitle="Tổng hợp các sản phẩm phần mềm, đồ án học tập và công cụ mã nguồn mở mình đã xây dựng."
      />

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between hud-panel p-4 rounded-xl">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by project category">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-[var(--accent-cyan)] text-[var(--on-accent)] font-bold shadow-neon-cyan'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tên hoặc stack (React, Node...)..."
            className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cyan)]"
          />
        </div>
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 hud-panel rounded-xl">
          <Layers className="w-10 h-10 text-[var(--text-muted)] mx-auto mb-3" />
          <p className="text-sm font-mono text-[var(--text-secondary)]">
            Không tìm thấy dự án phù hợp với bộ lọc "{searchQuery}".
          </p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 rounded text-xs font-mono bg-[var(--accent-cyan-dim)] text-[var(--accent-cyan)] border border-[var(--border-cyber)]"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      )}
    </div>
  );
};
