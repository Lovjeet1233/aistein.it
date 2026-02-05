"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Shield, Award } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "We are constantly committed to innovation, bringing increasingly advanced solutions to the market that meet the needs of modern businesses. NEVER STOP DISCOVER",
    color: "from-blue-600 to-cyan-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Our customers can count on us to provide secure, high-performance solutions, ready to meet every operational challenge.",
    color: "from-green-600 to-emerald-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our work, ensuring superior quality products and services that exceed customer expectations.",
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-purple-50",
  },
];

const ValuesSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
            Our Values
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Guided by solid principles, our values form the basis of every
            interaction and development of our company.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`inline-flex w-16 h-16 ${value.bgColor} rounded-lg items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`bg-gradient-to-br ${value.color} p-3 rounded-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed flex-1">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

