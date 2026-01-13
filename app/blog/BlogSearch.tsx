"use client";

import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useState } from "react";

export default function BlogSearch({ initialQuery = "" }: { initialQuery?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams();
    if (term) params.set("q", term);
    router.push(`/blog?${params.toString()}`);
  }, 500);

  useEffect(() => {
    handleSearch(query);
  }, [query, handleSearch]);

  return (
    <div className="flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 px-4 py-2 w-full rounded-l-md focus:outline-none"
        placeholder="Nhập từ khóa..."
      />
      <button
        onClick={() => handleSearch.flush()}
        className="bg-black text-white px-5 rounded-r-md hover:bg-gray-800 transition"
      >
        TÌM
      </button>
    </div>
  );
}