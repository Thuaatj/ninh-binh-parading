"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/post";
import { stripHtml } from "@/lib/stripHtml";
import { truncateWords } from "@/utils/shorten";

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-16">
      {posts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="
            grid md:grid-cols-2 gap-8
            border border-gray-200 rounded-2xl
            p-6 bg-white
            hover:shadow-xl hover:border-green-500
            transition
          "
        >
          {/* IMAGE */}
          {post.featuredImage && (
            <Link href={`/blog/${post.slug}`}>
              <Image
                src={post.featuredImage}
                alt={post.title}
                width={600}
                height={400}
                className="rounded-xl object-cover hover:scale-105 transition-transform duration-500"
              />
            </Link>
          )}

          {/* CONTENT */}
          <div className="flex flex-col justify-between">
            <div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-bold mb-3 hover:text-green-600 transition">
                  {post.title}
                </h2>
              </Link>

              {post.excerpt && (
                <p className="text-gray-600 mb-6">
                {truncateWords(stripHtml(post.excerpt ?? ""), 25)}
                </p>

                )}
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-green-600 font-semibold hover:underline"
            >
              Đọc tiếp
              <span className="text-lg">→</span>
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
