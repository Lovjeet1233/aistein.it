"use client";

import React, { useState, useEffect } from "react";
import { Mic, MicOff, Phone, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

interface VoiceButtonProps {
  className?: string;
}

const VoiceButton: React.FC<VoiceButtonProps> = ({ className }) => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [showVoiceChat, setShowVoiceChat] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [timer, setTimer] = useState(0);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCallActive) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [isCallActive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setShowLanguageSelector(false);
    setShowVoiceChat(true);
    setIsCallActive(true);
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setShowVoiceChat(false);
    setTimer(0);
    setIsMuted(false);
  };

  return (
    <>
      {/* Voice Chat Button (Compact) */}
      <AnimatePresence>
        {!showVoiceChat && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setShowLanguageSelector(true)}
            className={cn(
              "fixed z-50",
              "bottom-6 right-6 lg:bottom-8 lg:right-8",
              "flex items-center gap-3 px-6 py-4 rounded-full",
              "bg-white border-2 border-gray-200",
              "shadow-2xl hover:shadow-3xl",
              "transition-all duration-300",
              "hover:scale-105 hover:border-blue-400",
              "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50",
              className
            )}
            whileTap={{ scale: 0.95 }}
            aria-label="Open voice chat"
          >
            {/* Gradient Icon */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <radialGradient id="voiceGradient" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="50" fill="url(#voiceGradient)" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="rgba(255,255,255,0.3)" 
                  strokeWidth="1"
                />
              </svg>
            </div>
            <span className="text-lg font-semibold text-gray-900">Voice chat</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Language Selector Modal */}
      <Dialog.Root open={showLanguageSelector} onOpenChange={setShowLanguageSelector}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
          <Dialog.Content
            className={cn(
              "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
              "w-[90vw] max-w-md",
              "bg-white rounded-2xl shadow-2xl",
              "p-6",
              "animate-in fade-in zoom-in-95 duration-200"
            )}
          >
            <Dialog.Title className="text-2xl font-bold text-gray-900 mb-2">
              Select Language
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 mb-6">
              Choose your preferred language to talk with AiStein
            </Dialog.Description>

            <div className="space-y-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  className={cn(
                    "w-full flex items-center gap-4 px-4 py-4 rounded-xl",
                    "border-2 border-gray-200",
                    "hover:border-blue-500 hover:bg-blue-50",
                    "transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                    "group"
                  )}
                >
                  <span className="text-3xl">{language.flag}</span>
                  <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                    {language.name}
                  </span>
                </button>
              ))}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Voice Chat Interface */}
      <AnimatePresence>
        {showVoiceChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={cn(
              "fixed z-50",
              isExpanded
                ? "inset-4 lg:inset-8"
                : "bottom-6 right-6 lg:bottom-8 lg:right-8 w-[90vw] max-w-md h-[600px]",
              "bg-gradient-to-br from-gray-50 to-gray-100",
              "rounded-3xl shadow-2xl",
              "border border-gray-200",
              "overflow-hidden",
              "transition-all duration-300"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-200">
              <div className="text-sm font-medium text-gray-600">
                {formatTime(timer)}
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                aria-label={isExpanded ? "Minimize" : "Expand"}
              >
                {isExpanded ? (
                  <Minimize2 className="w-5 h-5 text-gray-600" />
                ) : (
                  <Maximize2 className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] px-6 py-8">
              {/* Animated Voice Icon */}
              <div className="relative mb-8">
                {/* Revolving Circles (when active) */}
                {isCallActive && (
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 407 407"
                    style={{ transform: "translate(-50%, -50%) scale(1.8)", left: "50%", top: "50%" }}
                  >
                    <motion.circle
                      cx="203.5"
                      cy="203.5"
                      r="203.5"
                      fill="#16E1FF"
                      fillOpacity="0.03"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ transformOrigin: "center" }}
                    />
                    <motion.circle
                      cx="203.5"
                      cy="203.5"
                      r="170"
                      fill="none"
                      stroke="#16E1FF"
                      strokeOpacity="0.1"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ transformOrigin: "center" }}
                    />
                  </svg>
                )}

                {/* Main Icon */}
                <motion.div
                  animate={isCallActive ? {
                    scale: [1, 1.05, 1],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: isCallActive ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                  className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl"
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <radialGradient id="aiSteinGradient" cx="50%" cy="50%">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="40%" stopColor="#3b82f6" />
                        <stop offset="70%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </radialGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <circle cx="100" cy="100" r="100" fill="url(#aiSteinGradient)" filter="url(#glow)" />
                    {/* Animated concentric circles */}
                    {isCallActive && (
                      <>
                        <motion.circle
                          cx="100"
                          cy="100"
                          r="70"
                          fill="none"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="2"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1.2, opacity: [0.5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.circle
                          cx="100"
                          cy="100"
                          r="70"
                          fill="none"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="2"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1.2, opacity: [0.5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                      </>
                    )}
                  </svg>
                </motion.div>
              </div>

              {/* Title */}
              <h2 className="text-4xl font-black text-gray-900 mb-2">AiStein</h2>
              <p className="text-lg text-gray-600 mb-12">Your AI Assistant</p>

              {/* Control Buttons */}
              <div className="flex items-center gap-4 mb-8">
                {/* Language Selector */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowLanguageSelector(true)}
                  className="w-16 h-16 rounded-full bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center border border-gray-200"
                  aria-label="Change language"
                >
                  <span className="text-2xl">{selectedLanguage.flag}</span>
                </motion.button>

                {/* Mute/Unmute */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMuted(!isMuted)}
                  className={cn(
                    "w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center border",
                    isMuted ? "bg-gray-300 border-gray-400" : "bg-white border-gray-200"
                  )}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <MicOff className="w-6 h-6 text-gray-700" />
                  ) : (
                    <Mic className="w-6 h-6 text-gray-700" />
                  )}
                </motion.button>

                {/* End Call */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleEndCall}
                  className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                  aria-label="End call"
                >
                  <Phone className="w-6 h-6 text-white transform rotate-135" />
                </motion.button>
              </div>

              {/* Description */}
              <p className="text-center text-gray-600 text-sm max-w-sm leading-relaxed">
                Discover the capabilities of Conversational Agents powered by AiStein
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceButton;
