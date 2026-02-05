"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/aistein", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/aistein", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/aistein", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@aistein", label: "YouTube" },
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    telephone: "",
    city: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Form submission logic would go here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Contact us and try our switchboard
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              created with AiStein.it
            </span>
          </h2>
          
          {/* Phone CTA */}
          <div className="inline-flex flex-col items-center gap-4 my-8">
            <p className="text-xl text-gray-700">Call now:</p>
            <a
              href="tel:+390685610547"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-2xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              +39 068 561 0547
            </a>
            <p className="text-lg text-gray-600">and book your free consultation</p>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-black mb-2">
                    Full name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 rounded border-2 border-gray-300",
                      "focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20",
                      "transition-all duration-200"
                    )}
                    placeholder="John Doe"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-black mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 rounded border-2 border-gray-300",
                      "focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20",
                      "transition-all duration-200"
                    )}
                    placeholder="Your Company"
                  />
                </div>

                {/* Telephone */}
                <div>
                  <label htmlFor="telephone" className="block text-sm font-semibold text-black mb-2">
                    Telephone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 rounded border-2 border-gray-300",
                      "focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20",
                      "transition-all duration-200"
                    )}
                    placeholder="+39 XXX XXX XXXX"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-black mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 rounded border-2 border-gray-300",
                      "focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20",
                      "transition-all duration-200"
                    )}
                    placeholder="Rome"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded border-2 border-gray-300",
                    "focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20",
                    "transition-all duration-200"
                  )}
                  placeholder="john@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded border-2 border-gray-300",
                    "focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20",
                    "transition-all duration-200 resize-none"
                  )}
                  placeholder="Tell us about your needs..."
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto px-12">
                Send
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 h-full">
              <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black mb-1">Address</div>
                    <div className="text-gray-700">
                      Via Tiburtina 1227
                      <br />
                      Rome, RM, 00131
                    </div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black mb-1">Telephone</div>
                    <a
                      href="tel:+390620199386"
                      className="text-blue-600 hover:underline"
                    >
                      +39 062 019 9386
                    </a>
                  </div>
                </div>

                {/* Email - New Customers */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black mb-1">New Customers</div>
                    <a
                      href="mailto:info@aistein.it"
                      className="text-blue-600 hover:underline"
                    >
                      info@aistein.it
                    </a>
                  </div>
                </div>

                {/* Email - Customer Service */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-black mb-1">Customer Service</div>
                    <a
                      href="mailto:Assistenza@aistein.it"
                      className="text-blue-600 hover:underline"
                    >
                      Assistenza@aistein.it
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-300">
                <div className="font-semibold text-black mb-4">Follow Us</div>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 transition-all duration-200"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 text-gray-700" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

