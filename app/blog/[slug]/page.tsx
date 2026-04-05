import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog-data";
import BlogPostContent from "@/components/BlogPostContent";
import ArticleSchema from "@/components/seo/ArticleSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BASE_URL = "https://www.boynettoyage.ma";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      ...(post.updatedAt && { modifiedTime: post.updatedAt }),
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const postUrl = `${BASE_URL}/blog/${slug}`;

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        url={postUrl}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        image={post.coverImage ? `${BASE_URL}${post.coverImage}` : undefined}
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: `${BASE_URL}/` },
          { name: "Blog", url: `${BASE_URL}/blog` },
          { name: post.title, url: `${BASE_URL}/blog/${slug}` },
        ]}
      />
      <BlogPostContent slug={slug} />
    </>
  );
}
