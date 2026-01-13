/* eslint-disable no-var */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useEffect } from "react";

export default function ContactDock() {
  useEffect(() => {
    const BASE_URL = "https://crm.smb.paraglidingvietnam.com";
    const g = document.createElement("script");
    const s = document.getElementsByTagName("script")[0];
    g.src = BASE_URL + "/packs/js/sdk.js";
    g.async = true;
    if (s.parentNode) {
      s.parentNode.insertBefore(g, s);
    }
    g.onload = function() {
      // @ts-expect-error
      window.chatwootSDK.run({
        websiteToken: "235Uo6i1NE2VZo5JmA3zpgGC",
        baseUrl: BASE_URL,
      });
      var style = document.createElement("style");
      style.innerHTML = ".woot--bubble-holder { display: none !important; }";
      document.head.appendChild(style);
    };
  }, []);

  const toggleChatwoot = () => {
    // @ts-expect-error
    if (window.$chatwoot) {
      // @ts-expect-error
      window.$chatwoot.toggle();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-socials active">
         <a
          href="https://zaloapp.com/qr/p/xg0f6vzmiz8n?src=qr"
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

        <a
          href="https://www.facebook.com/profile.php?id=61584228377610&rdid=BFOAkcHjMvAOpl97&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1XDTTvezVb%2F#"
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
          href="https://www.messenger.com/t/934578419729916"
          className="social messenger"
          title="Chat Messenger"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqF5nN-XjhMZ50aNI2-Ud93SfwQHptgVAaA&s"
            alt="Chat Messenger"
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

        <button onClick={toggleChatwoot} className="social chatwoot" title="Chat">
          <img src="https://cdn-icons-png.flaticon.com/512/724/724715.png" alt="Chat" />
        </button>
      </div>

      <style jsx>{`
        .chatbot-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          margin-bottom: 80px;
        }
        .chatbot-socials {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 17px;
          position: absolute;
          bottom: 0;
          right: 0;
        }
        .chatbot-socials .social {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s, box-shadow 0.3s;
          border: none;
          padding: 0;
          cursor: pointer;
          background: #1f93ff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .chatbot-socials .social img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
        .chatbot-socials .social.chatwoot img {
          width: 60%;
          height: 60%;
          filter: brightness(0) invert(1);
        }
        .chatbot-socials .social:hover {
          transform: scale(1.3);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}
