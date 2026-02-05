"use client";

import React from "react";
import { motion } from "framer-motion";

const languages = [
  { name: "Italian", flag: "🇮🇹", code: "it" },
  { name: "Spanish", flag: "🇪🇸", code: "es" },
  { name: "English", flag: "🇬🇧", code: "en" },
  { name: "French", flag: "🇫🇷", code: "fr" },
  { name: "Turkish", flag: "🇹🇷", code: "tr" },
  { name: "Arabic", flag: "🇸🇦", code: "ar" },
];

const LanguagesSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
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
            Discover the Languages
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              of AiStein.it
            </span>
          </h2>
        </motion.div>

        {/* Flag Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center aspect-square">
                  {/* Flag */}
                  <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {language.flag}
                  </div>

                  {/* Language Name */}
                  <div className="text-xl font-bold text-black">
                    {language.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg">
            Communicate with your customers in their native language
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSection;

