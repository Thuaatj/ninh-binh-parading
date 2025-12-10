// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // cho phép tất cả domain (tạm thời cho dev)
      },
    ],
    // hoặc nếu muốn an toàn hơn, chỉ cho phép các domain bạn dùng:
    // remotePatterns: [
    //   { protocol: "https", hostname: "res.cloudinary.com" },
    //   { protocol: "https", hostname: "suntechvn.vn" },
    //   { protocol: "https", hostname: "images.unsplash.com" },
    //   { protocol: "https", hostname: "flagcdn.com" },
    // ],
  },
};

module.exports = nextConfig;