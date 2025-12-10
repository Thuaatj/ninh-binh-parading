import { useState } from "react";

// components/dropdown/DatVeDropdown.tsx  (6 mục chỉ text)
export default function DatVeDropdown({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const items = ["Vé Bay Dù Lượn", "Vé Zipline Sông", "Tour Đảo Chàm", "Tour Lặn Biển", "Tour Cố Đô Huế", "Tour Bà Nà Hills"];

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={`px-5 py-6 text-sm font-medium tracking-wider transition ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-300"}`}>
        ĐẶT VÉ
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100">
          {items.map((item, i) => (
            <a key={i} href="#" className="block px-6 py-4 hover:bg-blue-50 transition first:rounded-t-xl last:rounded-b-xl text-gray-800 font-medium">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}