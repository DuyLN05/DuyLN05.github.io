import { marked } from 'marked';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import markdown from 'highlight.js/lib/languages/markdown';
import sql from 'highlight.js/lib/languages/sql';
import python from 'highlight.js/lib/languages/python';
import { Post } from '../types';
import { calculateReadingTime } from './readingTime';

// Register essential tech languages for high performance & minimal bundle size
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('sh', bash);
hljs.registerLanguage('shell', bash);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('md', markdown);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('python', python);
hljs.registerLanguage('py', python);

// Configure marked with custom code highlighting
marked.use({
  renderer: {
    code({ text, lang }: { text: string; lang?: string }): string {
      const validLanguage = lang && hljs.getLanguage(lang) ? lang : 'plaintext';
      let highlighted = text;
      try {
        highlighted = hljs.highlight(text, { language: validLanguage }).value;
      } catch {
        highlighted = text;
      }
      return `<div class="theme-deep relative group my-4 rounded-xl overflow-hidden border border-[var(--border-cyber)]">
        <div class="flex items-center justify-between px-4 py-1.5 bg-[#0A2540] border-b border-[var(--border-subtle)] text-xs font-mono text-[var(--accent-cyan)]">
          <span>${validLanguage}</span>
          <span class="text-[var(--text-muted)] text-[10px] tracking-wider uppercase">Code</span>
        </div>
        <pre class="p-4 bg-[#06182B] overflow-x-auto text-sm font-mono"><code class="hljs language-${validLanguage}">${highlighted}</code></pre>
      </div>`;
    },
    heading({ text, depth }: { text: string; depth: number }): string {
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      const depthClasses: Record<number, string> = {
        1: 'text-2xl sm:text-3xl font-bold mt-8 mb-4 text-[var(--text-primary)] border-b border-[var(--border-cyber)] pb-2',
        2: 'text-xl sm:text-2xl font-bold mt-6 mb-3 text-[var(--accent-cyan)]',
        3: 'text-lg sm:text-xl font-semibold mt-5 mb-2 text-[var(--accent-violet)]',
        4: 'text-base sm:text-lg font-medium mt-4 mb-2 text-[var(--text-primary)]',
      };
      const cls = depthClasses[depth] || 'text-base font-medium mt-3 mb-1';
      return `<h${depth} id="${id}" class="${cls}">${text}</h${depth}>`;
    },
    blockquote({ text }: { text: string }): string {
      return `<blockquote class="border-l-4 border-[var(--accent-cyan)] pl-4 py-2 my-4 italic text-[var(--text-secondary)] bg-[var(--accent-cyan-dim)] rounded-r-md">
        ${text}
      </blockquote>`;
    }
  }
});

function parseFrontmatter(rawContent: string): { data: Record<string, any>; body: string } {
  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, body: rawContent };
  }

  const yamlBlock = match[1];
  const body = match[2];
  const data: Record<string, any> = {};
  let currentKey: string | null = null;

  yamlBlock.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;

    if (trimmed.startsWith('- ') && currentKey) {
      if (!Array.isArray(data[currentKey])) {
        data[currentKey] = [];
      }
      data[currentKey].push(trimmed.slice(2).trim().replace(/^['"](.*)['"]$/, '$1'));
      return;
    }

    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      const val = line.slice(colonIndex + 1).trim();

      if (val === '') {
        currentKey = key;
        data[key] = [];
      } else {
        currentKey = null;
        let cleanVal: any = val.replace(/^['"](.*)['"]$/, '$1');
        if (cleanVal === 'true') cleanVal = true;
        else if (cleanVal === 'false') cleanVal = false;
        else if (/^\d+$/.test(cleanVal)) cleanVal = Number(cleanVal);
        data[key] = cleanVal;
      }
    }
  });

  return { data, body };
}

export function getAllPosts(): Post[] {
  const postFiles = import.meta.glob('/src/content/posts/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
  }) as Record<string, string>;

  const posts: Post[] = [];

  for (const path in postFiles) {
    const rawContent = postFiles[path];
    const { data, body } = parseFrontmatter(rawContent);

    const filename = path.split('/').pop()?.replace(/\.md$/, '') || '';
    const slug = data.slug || filename;

    if (data.published === false) {
      continue;
    }

    posts.push({
      title: data.title || 'Untitled Post',
      slug,
      description: data.description || '',
      date: data.date || new Date().toISOString().split('T')[0],
      updated: data.updated,
      category: data.category || 'Technology',
      tags: Array.isArray(data.tags) ? data.tags : [],
      cover: data.cover,
      published: data.published !== false,
      readingTime: data.readingTime || calculateReadingTime(body),
      content: body,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts();
  return posts.find(p => p.slug === slug);
}

export function renderMarkdown(content: string): string {
  return marked.parse(content, { async: false }) as string;
}
