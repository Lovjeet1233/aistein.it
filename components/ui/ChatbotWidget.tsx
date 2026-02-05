"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! Our team will get back to you shortly. This is a UI placeholder - backend integration coming soon.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed z-50",
          "bottom-24 right-6 lg:bottom-28 lg:right-8",
          "w-12 h-12 rounded-full",
          "bg-black text-white",
          "flex items-center justify-center",
          "shadow-xl hover:shadow-2xl",
          "transition-all duration-300",
          "hover:scale-110",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/20"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed z-50",
              "bottom-40 right-6 lg:bottom-44 lg:right-8",
              "w-[calc(100vw-3rem)] sm:w-[400px]",
              "h-[600px] max-h-[calc(100vh-12rem)]",
              "bg-white rounded-lg shadow-2xl",
              "flex flex-col overflow-hidden",
              "border border-gray-200"
            )}
          >
            {/* Chat Header */}
            <div className="bg-black text-white p-4 flex-shrink-0">
              <h3 className="font-semibold text-lg">AiStein Assistant</h3>
              <p className="text-sm text-gray-300">We typically reply in minutes</p>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex",
                    message.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] px-4 py-3 rounded-lg shadow-sm",
                      message.sender === "user"
                        ? "bg-black text-white rounded-br-sm"
                        : "bg-white text-black border border-gray-200 rounded-bl-sm"
                    )}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p
                      className={cn(
                        "text-xs mt-1",
                        message.sender === "user"
                          ? "text-gray-300"
                          : "text-gray-500"
                      )}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSendMessage}
              className="border-t border-gray-200 p-4 bg-white flex-shrink-0"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className={cn(
                    "flex-1 px-4 py-3 rounded",
                    "border border-gray-300 focus:border-black",
                    "focus:outline-none focus:ring-2 focus:ring-black/20",
                    "text-black placeholder-gray-500",
                    "transition-all duration-200"
                  )}
                  aria-label="Message input"
                />
                <button
                  type="submit"
                  className={cn(
                    "px-4 py-3 rounded",
                    "bg-black text-white",
                    "hover:bg-gray-800 transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "flex items-center justify-center"
                  )}
                  disabled={!inputValue.trim()}
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                UI placeholder - backend integration pending
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
