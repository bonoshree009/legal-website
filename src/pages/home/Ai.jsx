// import React, { useState, useEffect } from "react";

// export default function Ai() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleChat = () => setIsOpen(prev => !prev);

//   // Responsive width & height
//   const getChatSize = () => {
//     if (windowWidth < 500) return { width: "90%", height: "50%" };
//     if (windowWidth < 1024) return { width: "70%", height: "500px" };
//     return { width: "400px", height: "500px" };
//   };

//   const { width, height } = getChatSize();

//   return (
//     <>
//       {/* Floating button */}
//       <button
//         onClick={toggleChat}
//         style={{
//           position: "fixed",
//           bottom: 20,
//           right: 20,
//           width: 60,
//           height: 60,
//           borderRadius: "50%",
//           background: "#9538E2",
//           color: "#fff",
//           fontSize: 24,
//           border: "none",
//           cursor: "pointer",
//           zIndex: 1100,
//         }}
//       >
//         💬
//       </button>

//       {/* Webchat iframe */}
//       {isOpen && (
//         <iframe
//           src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/09/02/20250909022251-6B0OQB3C.json"
//           style={{
//             position: "fixed",
//             bottom: 90,
//             right: 20,
//             width,
//             height,
//             border: "1px solid #ccc",
//             borderRadius: 10,
//             zIndex: 1000,
//             transition: "all 0.3s ease-in-out",
//           }}
//           title="TechSphere"
//         />
//       )}
//     </>
//   );
// }
// import React, { useState, useEffect } from "react";

// export default function Ai() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleChat = () => setIsOpen((prev) => !prev);

//   // Responsive size
//   const getChatSize = () => {
//     if (windowWidth < 500) return { width: "90%", height: "60%" };
//     if (windowWidth < 1024) return { width: "400px", height: "550px" };
//     return { width: "420px", height: "550px" };
//   };

//   const { width, height } = getChatSize();

//   useEffect(() => {
//     if (isOpen) {
//       // Load Botpress script dynamically
//       const script = document.createElement("script");
//       script.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
//       script.async = true;
//       document.body.appendChild(script);

//       script.onload = () => {
//         window.botpress?.init({
//           botId: "d0f26e94-dce7-48ae-8d67-daff2cb69006",
//           clientId: "400614e2-9bb4-45f4-80b9-a00993578dd4",
//           selector: "#webchat",
//           configuration: {
//             version: "v2",
//             botName: "Barrister Support Agent ⚖️",
//             botDescription:
//               "Your trusted legal assistant — here to help you understand and connect with advocates easily.",
//             color: "#1e3a8a",
//             variant: "solid",
//             headerVariant: "glass",
//             themeMode: "light",
//             fontFamily: "Inter",
//             radius: 12,
//             feedbackEnabled: false,
//             proactiveMessageEnabled: true,
//             proactiveBubbleMessage:
//               "👋 Hello! Need legal help or want to consult an advocate?",
//             proactiveBubbleTriggerType: "afterDelay",
//             proactiveBubbleDelayTime: 8,
//             footer: "Powered by Botpress | Legal HelpDesk © 2025",
//           },
//         });
//       };
//     }
//   }, [isOpen]);

//   return (
//     <>
//       {/* Floating Chat Button */}
//       <button
//         onClick={toggleChat}
//         style={{
//           position: "fixed",
//           bottom: 25,
//           right: 25,
//           width: 65,
//           height: 65,
//           borderRadius: "50%",
//           background: isOpen ? "#dc2626" : "#1e3a8a",
//           color: "#fff",
//           fontSize: 26,
//           border: "none",
//           cursor: "pointer",
//           boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//           zIndex: 1100,
//           transition: "background 0.3s ease",
//         }}
//         title={isOpen ? "Close Chat" : "Chat with Barrister Support Agent"}
//       >
//         {isOpen ? "✖" : "💬"}
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div
//           id="webchat"
//           style={{
//             position: "fixed",
//             bottom: 100,
//             right: 25,
//             width,
//             height,
//             border: "1px solid #ccc",
//             borderRadius: 15,
//             zIndex: 1000,
//             boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
//             overflow: "hidden",
//             background: "#fff",
//           }}
//         ></div>
//       )}
//     </>
//   );
// }
import React, { useState, useEffect } from "react";

export default function Ai() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const getChatSize = () => {
    if (windowWidth < 500) {
      return { width: "90%", height: "60%" };
    }
    if (windowWidth < 1024) {
      return { width: "400px", height: "550px" };
    }
    return { width: "420px", height: "550px" };
  };

  const { width, height } = getChatSize();

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: 25,
          right: 25,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: isOpen ? "#dc2626" : "#0b832f",
          color: "#fff",
          fontSize: 26,
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          zIndex: 1100,
          transition: "background 0.3s ease",
        }}
        title={isOpen ? "Close Chat" : "Chat with Advocate Assistant"}
      >
        {isOpen ? "✖" : "💬"}
      </button>

      {/* Chat Window (iframe) */}
      {isOpen && (
        <iframe
          src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/11/11/20251011111846-OPEJ78G5.json"
          style={{
            position: "fixed",
            bottom: 100,
            right: 25,
            width,
            height,
            border: "1px solid #ccc",
            borderRadius: 15,
            zIndex: 1000,
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            transition: "all 0.3s ease-in-out",
          }}
          title="Advocate Support Assistant"
          allow="microphone"
        />
      )}
    </>
  );
}


