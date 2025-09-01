import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { API_BASE_URL } from "../config/api";

function AiChat() {
  const { t } = useTranslation();

  const [messages, setMessages] = useState([
    { sender: "bot", textKey: "chat_initial_greeting" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        `${API_BASE_URL}/api/chat`, // ✅ matches backend route
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply || "No response from AI." }, // ✅ use data.reply
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", textKey: "chat_error_message" },
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pt-20 sm:pt-24 lg:pt-32 px-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg flex flex-col h-[70vh] sm:h-[75vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-green-100 rounded-t">
          <h2 className="text-lg font-bold text-green-700">
            {t("chat_header")}
          </h2>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-3 sm:px-4 py-2 rounded-lg max-w-xs sm:max-w-sm ${
                  msg.sender === "user"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } text-sm sm:text-base`}
              >
                {msg.textKey ? t(msg.textKey) : msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSend}
          className="flex items-center border-t px-3 sm:px-4 py-3 bg-white rounded-b"
        >
          <input
            type="text"
            className="flex-1 border rounded px-2 sm:px-3 py-2 mr-2 focus:outline-none text-sm sm:text-base"
            placeholder={t("chat_placeholder")}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-3 sm:px-4 py-2 rounded hover:bg-green-700 transition text-sm sm:text-base"
            disabled={loading}
          >
            {loading ? t("chat_loading_button") : t("chat_send_button")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AiChat;
