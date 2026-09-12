"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  sender: "user" | "bot";
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "bot",
      text: "नमस्ते! मैं प्रज्ञा हूँ, अंशु कंप्यूटर एंड टैक्स कंसल्टेंसी की डिजिटल असिस्टेंट। मैं आपकी कैसे सहायता कर सकती हूँ?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      // In production, this should point to your Babu Render URL
      // For now, we use the local URL if running locally, or the production URL
      const API_URL = process.env.NEXT_PUBLIC_BABU_API_URL || "https://babu-tf49.onrender.com"; 
      
      const response = await fetch(`${API_URL}/api/public_chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.text,
          client_name: "Website Visitor",
          session_id: sessionId || undefined,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.session_id) {
          setSessionId(data.session_id);
        }
        const botMessage: Message = {
          id: Date.now().toString() + "-bot",
          sender: "bot",
          text: data.reply,
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error("API response error");
      }
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: Date.now().toString() + "-error",
        sender: "bot",
        text: "माफ़ करें, अभी सर्वर से संपर्क नहीं हो पा रहा है। कृपया कुछ देर बाद प्रयास करें।",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-emerald-100">
                   <img src="/logo.png" alt="Pragya" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Pragya (प्रज्ञा)</h3>
                  <p className="text-emerald-100 text-xs">Digital Assistant</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.sender === "user"
                        ? "bg-emerald-600 text-white rounded-tr-none"
                        : "bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 text-slate-500 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="अपना संदेश लिखें..."
                className="flex-1 bg-slate-100 text-sm border-none rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 bg-emerald-600 rounded-full shadow-xl shadow-emerald-600/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 z-50 group"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}
