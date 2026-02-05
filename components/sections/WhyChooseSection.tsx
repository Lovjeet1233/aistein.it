"use client";

import React from "react";
import { motion } from "framer-motion";
import { Network, Zap, Phone, Database } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Network,
    title: "Total Integration",
    description:
      "Command center that connects all your business tools, platforms, and communication channels in one unified system. Seamlessly manage everything from a single dashboard.",
    image: "/assets/images/why_command_center.png",
  },
  {
    icon: Zap,
    title: "Immediate Efficiency",
    description:
      "Real-time analytics and automated responses ensure your business operates at peak efficiency. Monitor performance, track metrics, and optimize operations instantly.",
    image: "/assets/images/features_optimization.jpeg",
  },
  {
    icon: Phone,
    title: "Automated Outbound/Inbound Calls",
    description:
      "Transform from traditional manual calling to intelligent automated systems. Handle hundreds of calls simultaneously with natural AI conversations that convert.",
    image: "/assets/images/why_calls_comparison.png",
  },
  {
    icon: Database,
    title: "CRM Integration",
    description:
      "Intelligent CRM that learns from every interaction. Automatically update customer records, track engagement history, and trigger personalized follow-ups based on AI insights.",
    image: "/assets/images/why_crm.png",
  },
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
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
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Why choose AiStein
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              for your business?
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            AiStein stands out for its comprehensiveness and power. We offer a
            unique platform that combines automation, integrations, and security
            for extraordinary results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-16 lg:space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-16`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-2xl bg-white hover:shadow-3xl transition-shadow duration-500">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="max-w-xl">
                    {/* Icon Badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-6 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Learn More Link */}
                    <button className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors group">
                      Learn more
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="inline-block bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
            <p className="text-xl text-gray-800 mb-4">
              Ready to see the difference?
            </p>
            <button className="px-8 py-4 bg-black text-white rounded font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
              Start Your Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
