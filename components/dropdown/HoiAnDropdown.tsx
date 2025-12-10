import { useState } from "react";
import Image from "next/image";
// components/dropdown/HoiAnDropdown.tsx  (5 mục có ảnh)
export default function HoiAnDropdown({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const places = [
    { title: "Phố Cổ Hội An", img: "https://suntechvn.vn/wp-content/uploads/2023/01/dai-truyen-hinh-bac-giang-1024x768.jpg" },
    { title: "Chùa Cầu", img: "https://suntechvn.vn/wp-content/uploads/2023/01/dai-truyen-hinh-bac-giang-1024x768.jpg" },
    { title: "Làng Rau Trà Quế", img: "https://suntechvn.vn/wp-content/uploads/2023/01/dai-truyen-hinh-bac-giang-1024x768.jpg" },
    { title: "Rừng Dừa Bảy Mẫu", img: "https://suntechvn.vn/wp-content/uploads/2023/01/dai-truyen-hinh-bac-giang-1024x768.jpg" },
    { title: "Biển An Bàng", img: "https://suntechvn.vn/wp-content/uploads/2023/01/dai-truyen-hinh-bac-giang-1024x768.jpg" },
  ];

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={`px-5 py-6 text-sm font-medium tracking-wider transition ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-300"}`}>
        HỘI AN
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-6 grid grid-cols-3 gap-5">
            {places.map((place, i) => (
              <a key={i} href="#" className="group block rounded-xl overflow-hidden hover:shadow-xl transition">
                <div className="relative h-40">
                  <Image src={place.img} alt={place.title} fill className="object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-gray-900 text-center">{place.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}