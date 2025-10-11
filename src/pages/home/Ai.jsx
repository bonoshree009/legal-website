
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


