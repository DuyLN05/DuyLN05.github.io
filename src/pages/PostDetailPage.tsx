import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { getPostBySlug, renderMarkdown } from '../utils/markdown';
import { profileData } from '../data/profile';
import { Badge } from '../components/common/Badge';

export const PostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = useMemo(() => (slug ? getPostBySlug(slug) : undefined), [slug]);

  if (!post) {
    return (
      <div className="text-center py-20 hud-panel rounded-xl max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">404 - Bài viết không tồn tại</h2>
        <p className="text-sm text-[var(--text-secondary)] mb-6">
          Không tìm thấy bài viết Markdown với slug "{slug}".
        </p>
        <Link
          to="/posts"
          className="px-4 py-2 rounded-lg font-mono text-xs font-bold bg-[var(--accent-cyan)] text-[var(--on-accent)] inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại trang Blog</span>
        </Link>
      </div>
    );
  }

  const htmlContent = useMemo(() => renderMarkdown(post.content), [post.content]);

  return (
    <article className="space-y-8 max-w-3xl mx-auto">
      {/* Back button */}
      <div>
        <Link
          to="/posts"
          className="text-xs font-mono text-[var(--accent-cyan)] hover:underline inline-flex items-center gap-1.5 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Trở về danh sách bài viết</span>
        </Link>
      </div>

      {/* Post Header */}
      <header className="space-y-4 pb-6 border-b border-[var(--border-cyber)]">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="violet">{post.category}</Badge>
          <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          {post.readingTime && (
            <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--text-primary)] leading-tight">
          {post.title}
        </h1>

        <p className="text-base text-[var(--text-secondary)] leading-relaxed italic">
          {post.description}
        </p>

        {/* Author info */}
        <div className="flex items-center gap-3 pt-2 text-xs font-mono text-[var(--text-secondary)]">
          <div className="w-7 h-7 rounded-full bg-[var(--accent-cyan-dim)] text-[var(--accent-cyan)] border border-[var(--border-cyber)] flex items-center justify-center font-bold">
            <User className="w-4 h-4" />
          </div>
          <span>Tác giả: <strong>{profileData.name}</strong></span>
        </div>
      </header>

      {/* Rendered Markdown Body */}
      <div
        className="markdown-body space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Post Footer Tags */}
      {post.tags && post.tags.length > 0 && (
        <footer className="pt-8 border-t border-[var(--border-cyber)] space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
            Tags liên quan:
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--bg-secondary)] text-[var(--accent-cyan)] border border-[var(--border-subtle)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
};
