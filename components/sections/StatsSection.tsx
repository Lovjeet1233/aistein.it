"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "98.9%",
    label: "Call Success Rate",
    description: "Industry-leading success rate",
    gradient: "from-blue-500 via-blue-600 to-cyan-600",
    iconBg: "bg-blue-50",
    icon: "📞",
  },
  {
    value: "100%",
    label: "Guaranteed Results",
    description: "Or your money back",
    gradient: "from-green-500 via-emerald-600 to-teal-600",
    iconBg: "bg-green-50",
    icon: "✓",
  },
  {
    value: "160",
    label: "AI Operators",
    description: "Scalable capacity",
    gradient: "from-purple-500 via-violet-600 to-fuchsia-600",
    iconBg: "bg-purple-50",
    icon: "🤖",
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0066FF 1px, transparent 1px),
              linear-gradient(to bottom, #0066FF 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 lg:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200/50 rounded-full text-sm font-semibold text-blue-700 uppercase tracking-wider">
              Proven Results
            </span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Performance That Speaks
            <br />
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                For Itself
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
              />
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Real results from <span className="font-semibold text-gray-900">1,250+ businesses</span> trusting AiStein.it
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-gray-200">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 ${stat.iconBg} rounded-2xl mb-6 text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Large Number with Counter Animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    className="mb-4"
                  >
                    <div className={`text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-xl lg:text-2xl text-gray-900 font-bold mb-2 leading-snug">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-base lg:text-lg text-gray-600 font-normal">
                    {stat.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="mt-8 flex items-center gap-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "48px" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.6 }}
                      className={`h-1.5 bg-gradient-to-r ${stat.gradient} rounded-full`}
                    />
                    <div className={`h-1.5 w-1.5 bg-gradient-to-r ${stat.gradient} rounded-full opacity-50`} />
                    <div className={`h-1.5 w-1.5 bg-gradient-to-r ${stat.gradient} rounded-full opacity-30`} />
                  </div>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-20 lg:mt-24"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100/50 shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 border-2 border-white" />
            </div>
            <p className="text-gray-700 text-base lg:text-lg font-medium">
              <span className="font-bold text-gray-900">1,250+</span> businesses achieving similar results
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
