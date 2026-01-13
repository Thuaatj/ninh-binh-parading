const API = process.env.WORDPRESS_API_URL;

if (!API) {
  throw new Error("WORDPRESS_API_URL is missing");
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  date: string;
  categories: number[];
}

// map an toàn cho Next 16
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapPost(post: any): Post {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title?.rendered ?? "",
    excerpt: post.excerpt?.rendered?.replace(/<[^>]+>/g, "") ?? "",
    content: post.content?.rendered ?? "",
    featuredImage:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
    date: post.date,
    categories: Array.isArray(post.categories) ? post.categories : [],
  };
}

// ================= LIST POSTS (FIX SEARCH) =================
export async function getPosts(
  page = 1,
  perPage = 6,
  query: string = ""
) {
  const params = new URLSearchParams({
    _embed: "true",
    page: page.toString(),
    per_page: perPage.toString(),
  });

  // 🔴 QUAN TRỌNG: search đúng WordPress
  if (query.trim()) {
    params.append("search", query.trim());
  }

  const res = await fetch(`${API}/posts?${params.toString()}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return {
      posts: [],
      totalPages: 0,
    };
  }

  const data = await res.json();
  const totalPages = Number(res.headers.get("X-WP-TotalPages") || 0);

  return {
    posts: Array.isArray(data) ? data.map(mapPost) : [],
    totalPages,
  };
}


// ================= POST DETAIL =================
export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${API}/posts?slug=${slug}&_embed`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.length ? mapPost(data[0]) : null;
}

// ================= RELATED =================
export async function getRelatedPosts(categoryId: number, excludeId: number) {
  const res = await fetch(
    `${API}/posts?categories=${categoryId}&exclude=${excludeId}&per_page=3&_embed`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return [];

  const data = await res.json();
  return data.map(mapPost);
}


