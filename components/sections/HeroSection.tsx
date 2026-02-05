"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedMetadata={(e) => {
            const video = e.target as HTMLVideoElement;
            video.playbackRate = 0.7;
          }}
        >
          <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* White Overlay for Readability */}
        <div className="absolute inset-0 bg-white/70" />
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(to right, #f0f0f0 1px, transparent 1px),
              linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-6 leading-tight tracking-tight"
          >
            Your Complete AI
            <br />
            Assistant Platform
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Easy-to-setup AI assistants that transform your business
            <br className="hidden sm:block" />
            through intelligent automation
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="secondary"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Now
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded hover:bg-black hover:text-white transition-all duration-300"
            >
              Book Free Consultation
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-600 hover:text-black transition-colors group"
        aria-label="Scroll to next section"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-8 h-8 rounded-full border-2 border-gray-400 group-hover:border-black flex items-center justify-center transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
