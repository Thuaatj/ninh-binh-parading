/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useEffect } from "react";

export default function ContactDock() {
  // --- Chèn Chatwoot SDK ---
//   useEffect(() => {
//     const BASE_URL = "https://crm.smb.securityzone.vn";
//     const g = document.createElement("script");
//     const s = document.getElementsByTagName("script")[0];
//     g.src = `${BASE_URL}/packs/js/sdk.js`;
//     g.async = true;
//     s.parentNode?.insertBefore(g, s);
//     g.onload = () => {
//       // @ts-expect-error
//       window.chatwootSDK.run({
//         websiteToken: "u6cRPyuWKHjAiBFoe65QLNmT",
//         baseUrl: BASE_URL,
//       });
//     };
//   }, []);

  return (
    <div className="chatbot-container">
      {/* === Ảnh đại diện Chatbot (có hiệu ứng sóng) === */}
      {/* <div className="chatbot-button">
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/225/199/non_2x/robot-chat-bot-concept-illustration-vector.jpg"
          alt="Chatbot"
          className="chatbot-avatar"
        />
        <div className="chatbot-wave"></div>
        <div className="chatbot-wave delay"></div>
      </div> */}

      {/* === Các nút MXH (hiển thị sẵn) === */}
      <div className="chatbot-socials active">
        <a
          href="#"
          className="social zalo"
          title="Zalo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://haiauint.vn/wp-content/uploads/2024/02/zalo-icon.png"
            alt="Zalo"
          />
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=84392806307&text&type=phone_number&app_absent=0"
          className="social whatsapp"
          title="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
            alt="WhatsApp"
          />
        </a>

        {/* <a
          href="#"
          className="social messenger"
          title="Messenger"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqF5nN-XjhMZ50aNI2-Ud93SfwQHptgVAaA&s"
            alt="Messenger"
          />
        </a> */}

         <a
          href="https://www.facebook.com/share/1XDTTvezVb/"
          className="social messenger"
          title="Messenger"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png"
            alt="Messenger"
          />
        </a>

        <a
          href="https://www.instagram.com/paraglidingninhbinh?igsh=MTczYzFvNWI0MnQxOQ=="
          className="social instagram"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
          />
        </a>

        {/* <a
          href="#"
          className="social youtube"
          title="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-youtube-social-media-round-icon-png-image_6315993.png"
            alt="YouTube"
          />
        </a> */}

        <a
          href="#"
          className="social tiktok"
          title="TikTok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/716/450/non_2x/tiktok-icon-free-png.png"
            alt="TikTok"
          />
        </a>
      </div>

      {/* === CSS === */}
      <style jsx>{`
        .chatbot-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          margin-bottom: 80px;
        }

        /* Nút Chatbot */
        .chatbot-button {
          width: 70px;
          height: 70px;
          background: transparent;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: visible;
          z-index: 10;
          animation: chatbotShake 3s infinite;
        }

        .chatbot-avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          object-fit: cover;
          z-index: 2;
        }

        /* Sóng lan tỏa */
        .chatbot-wave {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(51, 102, 255, 0.25);
          animation: chatbotWave 2s infinite;
          z-index: 1;
        }

        .chatbot-wave.delay {
          animation-delay: 1s;
        }

        @keyframes chatbotWave {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes chatbotShake {
          0%, 100% {
            transform: rotate(0deg);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: rotate(-3deg);
          }
          20%, 40%, 60%, 80% {
            transform: rotate(3deg);
          }
        }

        /* Các icon MXH */
        .chatbot-socials {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 17px;
          position: absolute;
          bottom: 50px;
          right: 0;
          transition: all 0.4s ease;
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .chatbot-socials .social {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .chatbot-socials .social img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .chatbot-socials .social:hover {
          transform: scale(1.3);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}
