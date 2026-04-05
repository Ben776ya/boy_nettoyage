"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  BLOG_CATEGORIES,
  CATEGORY_COLORS,
  formatBlogDate,
} from "@/lib/blog-data";
import { SERVICES_DETAIL } from "@/lib/services-detail-data";
import { cn } from "@/lib/utils";

interface BlogPostContentProps {
  slug: string;
}

export default function BlogPostContent({ slug }: BlogPostContentProps) {
  const post = getBlogPostBySlug(slug);
  if (!post) return null;

  const relatedPosts = getRelatedPosts(slug, 3);
  const colors = CATEGORY_COLORS[post.category];

  const relatedServiceData = post.relatedServices
    .map((serviceSlug) => SERVICES_DETAIL.find((s) => s.slug === serviceSlug))
    .filter((s): s is (typeof SERVICES_DETAIL)[number] => Boolean(s));

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-hero pt-32 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-sm text-text-gray mb-6"
          >
            <Link href="/" className="hover:text-primary-teal transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-primary-teal transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary-navy font-medium truncate max-w-[200px]">
              {post.title}
            </span>
          </motion.nav>

          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <span
              className={cn(
                "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4",
                colors.bg,
                colors.text
              )}
            >
              {BLOG_CATEGORIES[post.category]}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-navy mb-4 leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-4 text-sm text-text-gray"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatBlogDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime} min de lecture
            </span>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="blog-prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-10 pt-8 border-t border-border"
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-light-bg text-text-gray text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Related Services */}
      {relatedServiceData.length > 0 && (
        <div className="bg-light-bg py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary-navy mb-8 text-center">
              Services li&eacute;s
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServiceData.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary-teal/10">
                    <service.icon className="w-6 h-6 text-primary-teal" />
                  </div>
                  <h3 className="text-base font-bold text-primary-navy mb-2 group-hover:text-primary-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-gray line-clamp-2">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl font-bold text-primary-navy mb-8 text-center">
            Articles similaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relPost) => {
              const relColors = CATEGORY_COLORS[relPost.category];
              return (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="group bg-white rounded-2xl shadow-sm border border-border hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                  <div className="relative h-40 bg-gradient-to-br from-primary-teal/10 to-bright-blue/10 flex items-center justify-center">
                    <span
                      className={cn(
                        "absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold",
                        relColors.bg,
                        relColors.text
                      )}
                    >
                      {BLOG_CATEGORIES[relPost.category]}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-primary-navy mb-2 group-hover:text-primary-teal transition-colors line-clamp-2">
                      {relPost.title}
                    </h3>
                    <p className="text-sm text-text-gray line-clamp-2 mb-3">
                      {relPost.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-teal">
                      Lire
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-navy to-primary-teal py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Besoin d&apos;un devis ?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalis&eacute; sous 24h.
            Notre &eacute;quipe est &agrave; votre &eacute;coute.
          </p>
          <Link
            href="/#devis"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-green-cta to-emerald-600 text-white font-semibold shadow-lg shadow-green-cta/30 hover:shadow-xl hover:shadow-green-cta/40 transition-all duration-300 hover:-translate-y-0.5 btn-shine"
          >
            Demander un devis gratuit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Back to blog */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-gray hover:text-primary-teal transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au blog
        </Link>
      </div>
    </article>
  );
}
