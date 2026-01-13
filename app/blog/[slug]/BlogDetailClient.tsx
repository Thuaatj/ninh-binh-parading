/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BackToTopButton from "@/components/BackToTopButton";
import ContactDock from "@/components/ContactDock";

export default function BlogDetailClient({
  post,
  relatedPosts,
}: {
  post: any;
  relatedPosts: any[];
}) {
  return (
    <>
      {/* BACK */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-green-600 font-semibold mb-10 hover:underline"
        >
          ← Quay về Blog
        </Link>
      </motion.div>

      {/* GRID 70 / 30 */}
      <div className="grid lg:grid-cols-[7fr_3fr] gap-12">
        {/* LEFT */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-sm"
        >
          <h1 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
            {post.title}
          </h1>

          {post.featuredImage && (
            <div className="relative w-full aspect-[16/9] mb-10 overflow-hidden rounded-2xl">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          <div
            className="
                prose prose-lg max-w-none

                /* TEXT */
                prose-p:leading-relaxed
                prose-p:mb-6

                /* HEADINGS */
                prose-headings:font-bold
                prose-headings:mt-12
                prose-headings:mb-4

                /* IMAGE */
                prose-img:rounded-2xl
                prose-img:mx-auto
                prose-img:my-10
                prose-img:w-full

                /* FIGURE (WP BLOCK IMAGE) */
                prose-figure:my-10
                prose-figure:mx-auto
                prose-figure:max-w-full

                prose-figure img:rounded-2xl
                prose-figure img:w-full
                prose-figure img:object-cover

                /* LINKS */
                prose-a:text-green-600
                prose-strong:text-gray-900
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
            />

        </motion.article>

        {/* RIGHT */}
        <aside className="space-y-8">
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold mb-6">
                Bài viết liên quan
              </h3>

              <ul className="space-y-4">
                {relatedPosts.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="
                        block p-4 rounded-xl border
                        hover:border-green-500 hover:shadow-md
                        transition
                      "
                    >
                      <h4 className="font-semibold line-clamp-2">
                        {item.title}
                      </h4>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-600 text-white rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold mb-3">
              Du lịch mỗi ngày
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Theo dõi blog để cập nhật kiến thức mới nhất.
            </p>
            <Link
              href="/blog"
              className="inline-block bg-white text-green-600 font-semibold px-4 py-2 rounded-lg"
            >
              Xem tất cả bài viết
            </Link>
          </motion.div>
        </aside>
        <BackToTopButton />
        <ContactDock />
      </div>
    </>
  );
}
