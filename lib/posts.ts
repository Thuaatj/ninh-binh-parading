export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  createdAt: string;
}

const API = process.env.WORDPRESS_API_URL!;

export async function getPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${API}/posts?_embed`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch posts");

  const data = await res.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((post: any) => ({
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
    content: post.content.rendered,
    featuredImage:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
    createdAt: post.date,
  }));
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${API}/posts?slug=${slug}&_embed`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data.length ? data[0] : null;
}
