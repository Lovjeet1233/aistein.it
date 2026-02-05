"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Smartphone,
  ShoppingCart,
  Calendar,
  Mail,
  Slack,
  Database,
  Cloud,
  Code,
} from "lucide-react";

interface Integration {
  name: string;
  category: string;
  icon: typeof Smartphone;
  description: string;
}

const integrations: Integration[] = [
  {
    name: "WhatsApp Business",
    category: "Messaging",
    icon: Smartphone,
    description: "Direct integration with WhatsApp Business API",
  },
  {
    name: "Shopify & WooCommerce",
    category: "E-commerce",
    icon: ShoppingCart,
    description: "Sync orders, inventory, and customer data",
  },
  {
    name: "Google Calendar",
    category: "Scheduling",
    icon: Calendar,
    description: "Automated appointment booking and reminders",
  },
  {
    name: "Gmail & Outlook",
    category: "Email",
    icon: Mail,
    description: "Email automation and follow-ups",
  },
  {
    name: "Slack & Teams",
    category: "Collaboration",
    icon: Slack,
    description: "Team notifications and workflow automation",
  },
  {
    name: "Salesforce & HubSpot",
    category: "CRM",
    icon: Database,
    description: "Sync contacts, deals, and communication history",
  },
  {
    name: "Zapier & Make",
    category: "Automation",
    icon: Cloud,
    description: "Connect to 5,000+ apps with no code",
  },
  {
    name: "REST API & Webhooks",
    category: "Developer",
    icon: Code,
    description: "Custom integrations with full API access",
  },
];

const IntegrationsSection: React.FC = () => {
  return (
    <section id="integrations" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Seamless Integrations
            <br />
            <span className="text-blue-600">With Your Favorite Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect AiStein.it with your existing tech stack in minutes. No coding
            required for most integrations.
          </p>
        </motion.div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>

                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-3">
                  {integration.category}
                </span>

                {/* Name */}
                <h3 className="text-lg font-bold text-black mb-2">
                  {integration.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {integration.description}
                </p>

                {/* Hover Indicator */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

        {/* Integration Dashboard Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-2xl bg-white">
            <Image
              src="/assets/images/integrations_dashboard.jpeg"
              alt="Integrations Dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-700 font-medium">Native Integrations</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
            <div className="text-gray-700 font-medium">Via Zapier & Make</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
            <div className="text-gray-700 font-medium">Custom API Options</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Don't see your integration? We'll build it for you.
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors underline underline-offset-4 text-lg">
            Request Custom Integration →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;

