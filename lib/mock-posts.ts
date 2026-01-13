import { BlogPost } from "./types";

export const mockPosts: BlogPost[] = [
  {
    id: 1,
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.js",
    excerpt: "Next.js giúp xây dựng web SEO tốt",
    content: `
      <p>Next.js là framework React mạnh mẽ.</p>
      <h2>Ưu điểm</h2>
      <ul>
        <li>SEO tốt</li>
        <li>Nhanh</li>
      </ul>
    `,
    featuredImage: "https://picsum.photos/800/400",
    createdAt: "2024-01-01",
  },
];
