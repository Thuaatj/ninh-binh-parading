import { getPosts } from "@/lib/wordpress";
import BlogList from "./BlogList.client";
import BlogSearch from "./BlogSearch";
import Link from "next/link";
import BackToTopButton from "@/components/BackToTopButton";
import ContactDock from "@/components/ContactDock";
import HeroHeader from "@/components/HeroHeader";
import Footer from "@/components/Footer";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  // ✅ BẮT BUỘC await trong Next 15
  const { q = "" } = await searchParams;

  const { posts } = await getPosts(1, 6, q);

  return (
    <>
      <HeroHeader />

      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-green-600 transition">
            Blog
          </Link>
        </nav>

        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* LEFT */}
          <section>
            <h1 className="text-4xl font-black mb-4">
              Blog <span className="text-green-600">Ninh Binh Paraliding</span>
            </h1>

            <p className="text-gray-600 mb-12 max-w-2xl">
              Chia sẻ kiến thức, kinh nghiệm và câu chuyện xoay quanh
              du lịch – trải nghiệm – sức khỏe.
            </p>

            {q && (
              <p className="mb-8 text-lg text-gray-700">
                Kết quả tìm kiếm cho:{" "}
                <strong>&quot;{q}&quot;</strong>
              </p>
            )}

            {posts.length === 0 ? (
              <div className="py-20 text-center text-gray-500">
                <p className="text-xl font-semibold mb-2">
                  Không tìm thấy bài viết phù hợp
                </p>
                <p>Hãy thử từ khóa khác.</p>
              </div>
            ) : (
              <BlogList posts={posts} />
            )}
          </section>

          {/* SIDEBAR */}
          <aside className="space-y-10">
            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-bold mb-4 text-lg">Tìm kiếm</h3>
              <BlogSearch initialQuery={q} />
            </div>

            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-bold mb-4 text-lg">Bài viết nổi bật</h3>
              <p className="text-sm text-gray-500">
                (Sẽ lấy dữ liệu từ WordPress sau)
              </p>
            </div>
          </aside>
        </div>
        <BackToTopButton />
        <ContactDock />
      </main>
            
      <Footer />
    </>
  );
}
