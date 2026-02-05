"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 lg:py-32 bg-white relative overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8">
            Discover AiStein's Story
          </h2>

          {/* Logo Display */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div
                className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                AiStein.it
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Origin Story */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 rounded-lg border border-gray-200 shadow-sm mb-12">
            <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed text-center">
              AiStein.it was born from the market need for an artificial intelligence
              product specialized in <span className="font-bold text-black">INBOUND and OUTBOUND</span>,
              telephone or chat, specialized in assistance or sales, but above all{" "}
              <span className="font-bold text-black">easy to use</span>, configure and at{" "}
              <span className="font-bold text-black">super affordable costs</span>.
            </p>
          </div>

          {/* Founder Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-black text-white p-8 lg:p-12 rounded-lg relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-24 h-24" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-lg lg:text-xl leading-relaxed mb-8">
                  Conceived and founded in <span className="font-bold">2025</span>, led by{" "}
                  <span className="font-bold text-blue-400">Jean-Michel Impera</span>,
                  AiStein began its journey with the goal of improving the way companies
                  interact with and use artificial intelligence in their daily operations.
                </p>

                <div className="border-l-4 border-blue-500 pl-6 mb-8">
                  <p className="text-xl lg:text-2xl font-medium italic leading-relaxed">
                    "My goal, ever since I discovered this revolutionary market, has been
                    to make these artificial intelligence technologies available to all
                    professionals and small businesses who cannot afford a team of
                    specialized programmers. Simple and accessible—that was the vision,
                    and we have clearly achieved it!"
                  </p>
                </div>

                {/* Founder Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
                    JM
                  </div>
                  <div>
                    <div className="font-bold text-lg">Jean-Michel Impera</div>
                    <div className="text-blue-300">Founder & CEO, AiStein.it</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 text-blue-800 rounded-full border border-blue-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="font-semibold text-lg">
                Making AI accessible to everyone, everywhere
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
