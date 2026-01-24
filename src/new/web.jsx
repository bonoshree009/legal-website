import { useState } from "react";

const AiChat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    setChat([...chat, { text: message, sender: "user" }]);
    setMessage("");

    // fake AI reply
    setTimeout(() => {
      setChat(prev => [...prev, { text: "Hello! I'm your AI assistant 🤖", sender: "ai" }]);
    }, 800);
  };

  return (
    <div className="w-96 mx-auto mt-10 border rounded-xl shadow p-4">
      <h2 className="text-xl font-bold mb-3 text-center">AI Chat</h2>

      <div className="h-64 overflow-y-auto mb-3 space-y-2">
        {chat.map((c, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              c.sender === "user" ? "bg-blue-200 text-right" : "bg-gray-200"
            }`}
          >
            {c.text}
          </div>
        ))}
      </div>

      <di
