import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Post } from '../../types';
import { Badge } from '../common/Badge';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="hud-panel rounded-xl p-6 flex flex-col justify-between hover:border-[var(--accent-violet)] transition-all duration-300 group hover:-translate-y-1">
      <div>
        {/* Meta badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="violet">{post.category}</Badge>
          <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            {post.readingTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors mb-2.5">
          <Link to={`/posts/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)] line-clamp-3 mb-4 leading-relaxed">
          {post.description}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-subtle)] flex items-center gap-1"
              >
                <Tag className="w-2.5 h-2.5 text-[var(--accent-cyan)]" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action link */}
      <div className="pt-4 border-t border-[var(--border-subtle)]">
        <Link
          to={`/posts/${post.slug}`}
          className="text-xs font-mono text-[var(--accent-cyan)] hover:underline flex items-center gap-1 group-hover:gap-2 transition-all font-semibold"
        >
          <span>Đọc bài viết</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
