import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts } from "@/lib/wordpress";
import RelatedPosts from "@/components/component/RelatedPosts";

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  const related = post.categories.length
    ? await getRelatedPosts(post.categories[0], post.id)
    : [];

  return (
    <main className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      {post.featuredImage && (
        <Image
          src={post.featuredImage}
          alt={post.title}
          width={900}
          height={500}
          className="rounded-lg mb-8"
        />
      )}

      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <RelatedPosts posts={related} />
    </main>
  );
}
