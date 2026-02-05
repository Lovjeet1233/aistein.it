"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TestimonialSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Nature image placeholder with dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Quote className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Rating Stars */}
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-8 h-8 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-center mb-12">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-2">
              "AiStein has revolutionized our business."
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 leading-relaxed">
              We've had rapid implementation and amazing results since the first
              few days.
            </p>
          </blockquote>

          {/* Author */}
          <div className="flex flex-col items-center">
            {/* Profile Photo Placeholder */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl mb-4 ring-4 ring-white/20">
              DI
            </div>

            {/* Author Info */}
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-1">
                Davide Iorchi
              </div>
              <div className="text-gray-300">
                Business Owner
              </div>
            </div>

            {/* Decorative Line */}
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
          </div>

          {/* Additional Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-lg">
              One of 10,000+ satisfied customers worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
