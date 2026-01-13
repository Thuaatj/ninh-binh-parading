/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPosts } from "@/lib/wordpress";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const PER_PAGE = 6;

export default async function BlogPage({
  params,
}: {
  params: { page: string };
}) {
  const currentPage = Number(params.page);

  if (isNaN(currentPage) || currentPage < 2) return notFound();

  const { posts, totalPages } = await getPosts(currentPage, PER_PAGE);

  if (!posts.length) return notFound();

  return (
    <main className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-10">Blog</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post: { id: Key | null | undefined; slug: any; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
          <article key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="font-semibold text-xl">
                {post.title}
              </h2>
            </Link>
          </article>
        ))}
      </div>

      <div className="flex justify-between mt-10">
        {currentPage > 2 ? (
          <Link href={`/blog/page/${currentPage - 1}`}>← Trước</Link>
        ) : (
          <Link href="/blog">← Trước</Link>
        )}

        {currentPage < totalPages && (
          <Link href={`/blog/page/${currentPage + 1}`}>Tiếp →</Link>
        )}
      </div>
    </main>
  );
}
