"use client";

import React, { useState, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Language {
  code: string;
  name: string;
  displayName: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", displayName: "EN", flag: "🇬🇧" },
  { code: "ar", name: "Arabic", displayName: "AR", flag: "🇸🇦" },
  { code: "zh-CN", name: "Chinese (Simplified)", displayName: "中文", flag: "🇨🇳" },
  { code: "fr", name: "French", displayName: "FR", flag: "🇫🇷" },
  { code: "de", name: "German", displayName: "DE", flag: "🇩🇪" },
  { code: "it", name: "Italian", displayName: "IT", flag: "🇮🇹" },
  { code: "es", name: "Spanish", displayName: "ES", flag: "🇪🇸" },
];

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            layout: number;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
  }
}

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default: English
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Google Translate script
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "ar,zh-CN,fr,de,it,es,en",
            layout: 0,
            autoDisplay: false,
          },
          "google_translate_element"
        );
        setIsLoaded(true);
      }
    };

    // Check if already loaded
    if (window.google?.translate?.TranslateElement) {
      setIsLoaded(true);
    }
  }, []);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);

    // Trigger Google Translate
    if (isLoaded) {
      const selectElement = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = language.code;
        selectElement.dispatchEvent(new Event("change"));
      }
    }
  };

  return (
    <>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden" />

      {/* Compact Language Selector - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 left-0 mb-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
            >
              {/* Language List */}
              <div className="max-h-[400px] overflow-y-auto">
                {languages.map((language, index) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3",
                      "hover:bg-blue-50 transition-colors duration-150",
                      "border-b border-gray-100 last:border-b-0",
                      selectedLanguage.code === language.code && "bg-blue-50"
                    )}
                  >
                    {/* Flag */}
                    <span className="text-2xl">{language.flag}</span>

                    {/* Language Name */}
                    <span
                      className={cn(
                        "text-sm font-medium flex-1 text-left",
                        selectedLanguage.code === language.code
                          ? "text-blue-600"
                          : "text-gray-700"
                      )}
                    >
                      {language.name}
                    </span>

                    {/* Checkmark */}
                    {selectedLanguage.code === language.code && (
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-lg",
            "bg-white border border-gray-300 shadow-lg",
            "hover:shadow-xl hover:border-gray-400 transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
            isOpen && "shadow-xl border-blue-500"
          )}
          aria-label="Select language"
        >
          <Globe className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            {selectedLanguage.displayName}
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 text-gray-500 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>
      </div>

      {/* Backdrop for closing dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Custom Styles to hide Google Translate branding */}
      <style jsx global>{`
        .goog-te-banner-frame {
          display: none !important;
        }
        .goog-te-balloon-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        #google_translate_element {
          display: none !important;
        }
        .skiptranslate {
          display: none !important;
        }
        body > .skiptranslate {
          display: none !important;
        }
        .goog-tooltip {
          display: none !important;
        }
        .goog-tooltip:hover {
          display: none !important;
        }
        .goog-text-highlight {
          background-color: transparent !important;
          box-shadow: none !important;
        }
      `}</style>
    </>
  );
};

export default LanguageSelector;

