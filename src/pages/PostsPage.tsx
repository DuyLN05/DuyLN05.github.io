import React, { useState, useMemo } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { getAllPosts } from '../utils/markdown';
import { PostCard } from '../components/posts/PostCard';
import { SectionHeading } from '../components/common/SectionHeading';

export const PostsPage: React.FC = () => {
  const posts = useMemo(() => getAllPosts(), []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Collect unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach(p => set.add(p.category));
    return ['All', ...Array.from(set)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchCat = selectedCategory === 'All' || post.category === selectedCategory;
      const matchQuery =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchQuery;
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-12">
      <SectionHeading
        badge="Markdown Knowledge Base"
        title="Bài viết Kỹ thuật & Ghi chú"
        subtitle="Chia sẻ kiến thức lập trình, ghi chép debug và phân tích chuyên sâu các công nghệ web."
      />

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between hud-panel p-4 rounded-xl">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[var(--accent-violet)] text-black font-bold shadow-neon-violet'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tiêu đề hoặc từ khóa..."
            className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-violet)]"
          />
        </div>
      </div>

      {/* Posts List */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 hud-panel rounded-xl">
          <BookOpen className="w-10 h-10 text-[var(--text-muted)] mx-auto mb-3" />
          <p className="text-sm font-mono text-[var(--text-secondary)]">
            Không tìm thấy bài viết nào phù hợp với "{searchQuery}".
          </p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 rounded text-xs font-mono bg-[var(--accent-violet-dim)] text-[var(--accent-violet)] border border-[var(--accent-violet)]/30"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      )}
    </div>
  );
};
