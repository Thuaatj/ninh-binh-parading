// components/dropdown/UuDaiDropdown.tsx
import Image from "next/image";
import { useState } from "react";

export default function UuDaiDropdown({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={`px-5 py-6 text-sm font-medium tracking-wider transition ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-300"}`}>
        ƯU ĐÃI
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-6 grid grid-cols-2 gap-6">
            {/* Item 1 */}
            <a href="#" className="group block rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="relative h-40 overflow-hidden">
                <Image src="https://suntechvn.vn/wp-content/uploads/2023/01/dai-truyen-hinh-bac-giang-1024x768.jpg" alt="Early Bird" fill className="object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">Early Bird - Giảm 25%</h3>
                <p className="text-sm text-gray-600 mt-1">Đặt trước 30 ngày</p>
              </div>
            </a>

            {/* Item 2 */}
            <a href="#" className="group block rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="relative h-40 overflow-hidden">
                <Image src="https://suntechvn.vn/wp-content/uploads/2023/01/dai-truyen-hinh-bac-giang-1024x768.jpg" alt="Combo Gia Đình" fill className="object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">Combo Gia Đình</h3>
                <p className="text-sm text-gray-600 mt-1">Giảm 15% cho nhóm 4+ người</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}