"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const screenshots = [
  {
    id: 1,
    name: "Conversations Dashboard",
    description: "Monitor and manage all customer interactions in real-time",
    image: "/assets/images/PLACEHOLDER_conversations_screenshot.jpeg",
  },
  {
    id: 2,
    name: "Knowledge Base Management",
    description: "Train your AI with custom data and documentation",
    image: "/assets/images/PLACEHOLDER_knowledge_base_screenshot.jpeg",
  },
  {
    id: 3,
    name: "Agent Creation Interface",
    description: "Build and customize AI agents for specific tasks",
    image: "/assets/images/PLACEHOLDER_agents_screenshot.jpeg",
  },
  {
    id: 4,
    name: "Automation Workflows",
    description: "Design complex workflows with visual automation builder",
    image: "/assets/images/PLACEHOLDER_automations_screenshot.jpeg",
  },
  {
    id: 5,
    name: "Batch Calls & Campaigns",
    description: "Launch and manage large-scale calling campaigns",
    image: "/assets/images/PLACEHOLDER_batch_calls_screenshot.jpeg",
  },
  {
    id: 6,
    name: "Telephony Settings",
    description: "Configure inbound, outbound, and SIP telephony",
    image: "/assets/images/PLACEHOLDER_telephony_screenshot.jpeg",
  },
  {
    id: 7,
    name: "Integrations Hub",
    description: "Connect with hundreds of third-party platforms",
    image: "/assets/images/PLACEHOLDER_integrations_screenshot.jpeg",
  },
];

const PlatformShowcaseSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Complete Platform Overview
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our comprehensive dashboard with everything you need to manage
            AI-powered customer interactions
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 justify-center min-w-max px-4">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "px-4 py-3 rounded text-sm font-medium transition-all duration-300",
                  "whitespace-nowrap",
                  activeIndex === index
                    ? "bg-black text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                )}
              >
                {screenshot.name}
              </button>
            ))}
          </div>
        </div>

        {/* Screenshot Display */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Mockup Frame */}
          <div className="relative bg-gray-900 rounded-t-lg p-3">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-gray-800 rounded px-4 py-1 text-xs text-gray-400">
                aistein.it/dashboard
              </div>
            </div>

            {/* Screenshot Content */}
            <div className="relative aspect-video bg-white rounded overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={screenshots[activeIndex].image}
                    alt={screenshots[activeIndex].name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority={activeIndex === 0}
                  />
                  {/* Overlay with description */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {screenshots[activeIndex].name}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {screenshots[activeIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeIndex === index
                  ? "bg-black w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcaseSection;
