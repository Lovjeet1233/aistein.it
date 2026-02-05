"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

const pricingPlans = [
  {
    name: "MILEVA",
    badge: "HOT CLASS",
    price: "€299.99",
    period: "month",
    color: "from-green-600 to-emerald-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-500",
    features: [
      "AI: Chat (Whatsapp, Web, Social, Mail)",
      "Conversational AI (AI Voice Assistant)",
      "Analytics Platform",
      "AI Chat - 500 conversations included",
      "Voice AI - 250 minutes in or out",
      "1 VoIP phone number",
      "Redirect to human operator",
      "E-COMMERCE CONNECTION - BOOKING PLATFORM",
      "SHOPIFY - WORDPRESS - PRESTASHOP - MAGENTO",
      "STRIPE, SALES FORCE",
      "Email or consultant support",
      "Extra minutes/conversations = €0.35 each",
      "Setup €599.00+",
      "**VAT EXCLUDED, payment every two months",
    ],
  },
  {
    name: "NOBEL PRIZE",
    badge: "BEST SELLING",
    price: "€499.99",
    period: "month",
    color: "from-orange-600 to-red-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-500",
    popular: true,
    features: [
      "AI: Chat (Whatsapp, Web, Social, Mail)",
      "Conversational AI (AI Voice Assistant)",
      "Analytics Platform",
      "AI Chat - 1000 conversations included",
      "Voice AI - 1000 minutes in or out",
      "1 VoIP phone number",
      "Redirect to human operator",
      "E-COMMERCE CONNECTION - BOOKING PLATFORM",
      "SHOPIFY - WORDPRESS - PRESTASHOP - MAGENTO",
      "STRIPE, SALES FORCE",
      "WhatsApp support or through a consultant",
      "Extra minutes/conversations = €0.30 each",
      "Setup €499.00+",
      "**VAT EXCLUDED, payment every two months",
    ],
  },
  {
    name: "AISTEIN",
    badge: "TOP CLASS",
    price: "€799.99",
    period: "month",
    color: "from-cyan-600 to-blue-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-500",
    features: [
      "AI: Chat (Whatsapp, Web, Social, Mail)",
      "Conversational AI (AI Voice Assistant)",
      "Analytics Platform",
      "AI Chat - 2000 conversations included",
      "Voice AI - 2000 minutes in or out",
      "Up to 5 VoIP phone numbers",
      "Redirect to human operator",
      "E-COMMERCE CONNECTION - BOOKING PLATFORM",
      "SHOPIFY - WORDPRESS - PRESTASHOP - MAGENTO",
      "STRIPE, SALES FORCE",
      "Telephone Operator Human /Whatsapp/Consultant",
      "Extra minutes/conversations = €0.20 each",
      "Setup €499.00+",
      "**VAT EXCLUDED, payment every two months",
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
            Our 100% fully optional packages
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto">
            You can choose between 3 packages, and you can pay monthly or
            annually (Pay 10 - Get 12 months); all with no strings attached and
            ALL INCLUSIVE!
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-white rounded-lg border-2 ${
                plan.popular ? plan.borderColor + " shadow-2xl scale-105" : "border-gray-200"
              } overflow-hidden hover:shadow-xl transition-all duration-300`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                <div className="text-sm font-bold uppercase tracking-wide mb-2">
                  {plan.badge}
                </div>
                <h3 className="text-3xl font-bold mb-4">{plan.name} PACKAGE</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-lg">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="secondary"
                  size="lg"
                  className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90`}
                >
                  Activate Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
            <p className="text-xl text-gray-800 font-medium mb-4">
              Do your volumes significantly higher? Do you have a call center
              with multiple workstations?
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Call us and we'll give you a customized quote.
            </p>
            <Button variant="primary" size="lg">
              Contact Sales Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
