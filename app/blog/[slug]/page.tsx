import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Starfield from "@/components/effects/Starfield";
import { blogPosts, formatPostDate, getBlogPost, type BlogBlock } from "@/data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Prajakta Bandgar`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      tags: post.tags,
      images: [],
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.excerpt,
      images: [],
    },
  };
}

function PostBlock({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "heading":
      return <h2 className="heading-editorial mb-5 mt-14 text-3xl text-lavender-mist">{block.text}</h2>;
    case "list":
      return (
        <ul className="my-7 space-y-3 pl-1 text-text-secondary">
          {block.items.map((item) => (
            <li key={item} className="body-clean flex gap-4">
              <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-shimmer" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote className="heading-editorial my-10 border-l-2 border-gold-shimmer pl-6 text-2xl leading-relaxed text-lavender-mist md:pl-8 md:text-3xl">{block.text}</blockquote>;
    case "code":
      return (
        <div className="my-8 overflow-hidden rounded-2xl border border-lavender-mist/10 bg-[#070a14]">
          {block.language && <div className="border-b border-lavender-mist/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">{block.language}</div>}
          <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 text-botanical-mint"><code>{block.code}</code></pre>
        </div>
      );
    default:
      return <p className="body-clean my-6 text-lg leading-8 text-text-secondary">{block.text}</p>;
  }
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((item) => item.slug === slug);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  return (
    <main className="relative min-h-screen overflow-hidden bg-deep-space">
      <Navigation />
      <Starfield density={32} className="fixed inset-0 opacity-25" />
      <div className="pointer-events-none fixed left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-ethereal-violet/7 blur-[160px]" />

      <article className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-36 md:pt-44">
        <Link href="/blog" className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-text-muted transition-colors hover:text-gold-shimmer">
          <ArrowLeft size={15} aria-hidden="true" /> All notes
        </Link>
        <header className="mb-12 border-b border-lavender-mist/10 pb-12">
          <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs text-text-muted">
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5"><Clock3 size={13} aria-hidden="true" />{post.readTime}</span>
          </div>
          <h1 className="heading-editorial mb-7 text-4xl leading-tight text-text-primary sm:text-5xl md:text-6xl">{post.title}</h1>
          <p className="body-clean text-xl leading-8 text-lavender-mist/80">{post.excerpt}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {post.tags.map((tag) => <span key={tag} className="rounded-full border border-gold-shimmer/15 bg-gold-shimmer/5 px-3 py-1 font-mono text-[11px] text-gold-shimmer">{tag}</span>)}
          </div>
        </header>

        <div>{post.content.map((block, index) => <PostBlock key={index} block={block} />)}</div>

        {nextPost && nextPost.slug !== post.slug && (
          <aside className="mt-20 border-t border-lavender-mist/10 pt-10">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-text-muted">Read next</p>
            <Link href={`/blog/${nextPost.slug}`} className="group flex items-start justify-between gap-6 rounded-2xl border border-lavender-mist/10 bg-midnight-blue/35 p-6 transition-all hover:border-gold-shimmer/30 hover:bg-midnight-blue/55">
              <div>
                <h2 className="heading-editorial mb-2 text-2xl text-lavender-mist transition-colors group-hover:text-gold-bright">{nextPost.title}</h2>
                <p className="text-sm leading-6 text-text-muted">{nextPost.excerpt}</p>
              </div>
              <ArrowUpRight className="shrink-0 text-gold-shimmer" size={20} aria-hidden="true" />
            </Link>
          </aside>
        )}
      </article>
    </main>
  );
}
