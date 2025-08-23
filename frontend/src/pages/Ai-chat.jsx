import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next"; // 1. Import the hook

function AiChat() {
  const { t } = useTranslation(); // 2. Initialize the hook

  // 3. Use a 'textKey' for the initial message so it can be translated
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
        "https://agrigrow-znib.onrender.com/api/ai/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.response || "No response from AI." },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        // 4. Use a key for the error message
        { sender: "bot", textKey: "chat_error_message" },
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-xl bg-white rounded shadow-lg flex flex-col h-[70vh]">
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
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg.sender === "user"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {/* 5. Render translated text if textKey exists, otherwise render normal text */}
                {msg.textKey ? t(msg.textKey) : msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSend}
          className="flex items-center border-t px-4 py-3 bg-white rounded-b"
        >
          <input
            type="text"
            className="flex-1 border rounded px-3 py-2 mr-2 focus:outline-none"
            placeholder={t("chat_placeholder")}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
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
