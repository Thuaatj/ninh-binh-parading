/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts } from "@/lib/wordpress";
import BlogDetailClient from "./BlogDetailClient";
import HeroHeader from "@/components/HeroHeader";
import Footer from "@/components/Footer";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const relatedPosts =
    post.categories.length > 0
      ? await getRelatedPosts(post.categories[0], post.id)
      : [];

  return (
    <>
      <HeroHeader />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <BlogDetailClient post={post} relatedPosts={relatedPosts} />
      </main>

      <Footer />
    </>
  );
}
