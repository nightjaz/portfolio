import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Starfield from "@/components/effects/Starfield";
import { blogPosts, formatPostDate } from "@/data/blogPosts";

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <main className="relative min-h-screen overflow-hidden bg-deep-space">
      <Navigation />
      <Starfield density={45} className="fixed inset-0 opacity-35" />
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-ethereal-violet/8 blur-[150px]" />
        <div className="absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-gold-shimmer/6 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-36 md:pt-44">
        <header className="mb-16 max-w-3xl md:mb-24">
          <Link href="/" className="mb-8 inline-flex font-mono text-xs uppercase tracking-[0.22em] text-gold-shimmer transition-colors hover:text-gold-bright">
            PB / Portfolio
          </Link>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-text-muted">
            Lab notes · small discoveries · unfinished thoughts
          </p>
          <h1 className="heading-editorial mb-6 text-5xl leading-tight text-lavender-mist sm:text-6xl md:text-7xl">
            Field <span className="gradient-text-gold">notes.</span>
          </h1>
          <p className="body-clean max-w-2xl text-lg text-text-secondary md:text-xl">
            A technical scratchpad for things I&apos;m learning while building with AI, hardware, data, and the web.
          </p>
        </header>

        {featuredPost && (
          <section className="mb-20" aria-labelledby="featured-note">
            <p id="featured-note" className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-gold-shimmer">
              Latest note
            </p>
            <Link href={`/blog/${featuredPost.slug}`} className="group grid gap-8 rounded-[2rem] border border-gold-shimmer/20 bg-midnight-blue/55 p-7 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-gold-shimmer/40 hover:shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:grid-cols-[1fr_auto] md:items-end md:p-10">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-text-muted">
                  <time dateTime={featuredPost.publishedAt}>{formatPostDate(featuredPost.publishedAt)}</time>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5"><Clock3 size={13} aria-hidden="true" />{featuredPost.readTime}</span>
                </div>
                <h2 className="heading-editorial mb-4 max-w-3xl text-3xl text-text-primary transition-colors group-hover:text-gold-bright sm:text-4xl md:text-5xl">{featuredPost.title}</h2>
                <p className="body-clean max-w-2xl text-text-secondary">{featuredPost.excerpt}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => <span key={tag} className="rounded-full border border-lavender-mist/15 bg-lavender-mist/5 px-3 py-1 font-mono text-[11px] text-lavender-mist">{tag}</span>)}
                </div>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-shimmer/25 text-gold-shimmer transition-all group-hover:border-gold-shimmer/60 group-hover:bg-gold-shimmer/10">
                <ArrowUpRight size={20} aria-hidden="true" />
              </span>
            </Link>
          </section>
        )}

        <section aria-labelledby="all-notes">
          <div className="mb-6 flex items-end justify-between border-b border-lavender-mist/10 pb-4">
            <h2 id="all-notes" className="heading-editorial text-2xl text-lavender-mist">More from the notebook</h2>
            <span className="font-mono text-xs text-text-muted">{String(blogPosts.length).padStart(2, "0")} notes</span>
          </div>
          <div className="divide-y divide-lavender-mist/10">
            {otherPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group grid gap-5 py-8 transition-colors sm:grid-cols-[48px_1fr_auto] sm:items-start md:py-10">
                <span className="font-mono text-xs text-text-muted">{String(index + 2).padStart(2, "0")}</span>
                <div>
                  <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-text-muted">
                    <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time><span aria-hidden="true">·</span><span>{post.readTime}</span>
                  </div>
                  <h3 className="heading-editorial mb-3 text-2xl text-text-primary transition-colors group-hover:text-gold-bright md:text-3xl">{post.title}</h3>
                  <p className="body-clean max-w-2xl text-sm text-text-secondary md:text-base">{post.excerpt}</p>
                  <p className="mt-4 font-mono text-[11px] text-ethereal-violet">{post.tags.join(" / ")}</p>
                </div>
                <ArrowUpRight size={20} className="hidden text-text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-shimmer sm:block" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-24 border-t border-gold-shimmer/15 pt-8 text-center text-xs text-text-muted">
          Built somewhere between a lab notebook and a star map.
        </footer>
      </div>
    </main>
  );
}
