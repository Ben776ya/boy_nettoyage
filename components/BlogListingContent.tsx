"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import {
  BLOG_POSTS,
  BLOG_CATEGORIES,
  CATEGORY_COLORS,
  formatBlogDate,
  type BlogCategory,
} from "@/lib/blog-data";
import { cn } from "@/lib/utils";

const ALL_CATEGORIES = Object.keys(BLOG_CATEGORIES) as BlogCategory[];

export default function BlogListingContent() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");

  const filteredPosts =
    activeCategory === "all"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <section className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-hero pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bright-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-navy mb-4"
          >
            Blog & Conseils Nettoyage
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-text-gray max-w-2xl mx-auto"
          >
            Conseils d&apos;experts, guides pratiques et actualit&eacute;s de votre
            sp&eacute;cialiste nettoyage &agrave; Casablanca
          </motion.p>
        </div>
      </div>

      {/* Category Tabs + Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10 justify-center"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === "all"
                ? "bg-primary-navy text-white shadow-md"
                : "bg-light-bg text-text-gray hover:bg-primary-navy/5"
            )}
          >
            Tous
          </button>
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "bg-primary-navy text-white shadow-md"
                  : "bg-light-bg text-text-gray hover:bg-primary-navy/5"
              )}
            >
              {BLOG_CATEGORIES[cat]}
            </button>
          ))}
        </motion.div>

        {/* Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => {
              const colors = CATEGORY_COLORS[post.category];
              return (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-sm border border-border hover:shadow-xl transition-all duration-400 overflow-hidden hover:-translate-y-1"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    {/* Card Image / Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-primary-teal/10 to-bright-blue/10 flex items-center justify-center overflow-hidden">
                      <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                        {post.category === "conseils-nettoyage" && "\u2728"}
                        {post.category === "guide-hygiene" && "\ud83e\uddf9"}
                        {post.category === "actualites" && "\ud83d\udcf0"}
                        {post.category === "avant-apres" && "\ud83d\udcf7"}
                        {post.category === "professionnels" && "\ud83c\udfe2"}
                      </div>
                      {/* Category badge */}
                      <span
                        className={cn(
                          "absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold",
                          colors.bg,
                          colors.text
                        )}
                      >
                        {BLOG_CATEGORIES[post.category]}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h2 className="text-lg font-bold text-primary-navy mb-2 group-hover:text-primary-teal transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-text-gray mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-text-gray">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatBlogDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readingTime} min
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-4 pt-4 border-t border-border">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-teal group-hover:gap-2.5 transition-all">
                          Lire l&apos;article
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-gray text-lg">
              Aucun article dans cette cat&eacute;gorie pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
