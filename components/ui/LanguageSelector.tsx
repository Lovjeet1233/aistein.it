"use client";

import React, { useState, useEffect } from "react";
import { Globe, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "zh-CN", name: "Chinese (Simplified)", flag: "🇨🇳" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇬🇧" },
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
  const [selectedLanguage, setSelectedLanguage] = useState(languages[6]); // Default: English
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

      {/* Floating Language Button - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <motion.button
          onClick={() => setIsOpen(true)}
          className={cn(
            "flex items-center justify-center w-14 h-14 rounded-full",
            "bg-white border-2 border-gray-300 shadow-lg",
            "hover:shadow-xl hover:scale-110 transition-all duration-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Select language"
        >
          <Globe className="w-6 h-6 text-gray-700" />
        </motion.button>
      </div>

      {/* Language Selection Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-md"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mx-4">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">
                    Select Language
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Language List */}
                <div className="max-h-[500px] overflow-y-auto">
                  {languages.map((language, index) => (
                    <motion.button
                      key={language.code}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleLanguageChange(language)}
                      className={cn(
                        "w-full flex items-center gap-4 px-6 py-4",
                        "hover:bg-gray-50 transition-all duration-200",
                        "border-b border-gray-100 last:border-b-0",
                        selectedLanguage.code === language.code &&
                          "bg-blue-50 hover:bg-blue-100"
                      )}
                    >
                      {/* Flag */}
                      <span className="text-3xl">{language.flag}</span>

                      {/* Language Name */}
                      <span
                        className={cn(
                          "text-base font-medium flex-1 text-left",
                          selectedLanguage.code === language.code
                            ? "text-blue-600"
                            : "text-gray-800"
                        )}
                      >
                        {language.name}
                      </span>

                      {/* Selected Indicator */}
                      {selectedLanguage.code === language.code && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center"
                        >
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Powered by Google Translate
                  </p>
                </div>
              </div>
            </motion.div>
          </>
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
          display: none;
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

