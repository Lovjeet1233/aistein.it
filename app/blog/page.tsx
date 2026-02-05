"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: "ai-voice-assistants-transforming-customer-service",
    title: "How AI Voice Assistants Are Transforming Customer Service in 2026",
    excerpt: "Discover how businesses are leveraging AI voice technology to provide 24/7 customer support, reduce costs, and improve customer satisfaction rates by up to 98.9%.",
    author: "Jean-Michel Impera",
    date: "2026-01-15",
    readTime: "8 min read",
    category: "AI Technology",
    image: "/assets/images/features_automations.png",
    tags: ["AI", "Customer Service", "Automation"],
  },
  {
    slug: "complete-guide-to-conversational-ai",
    title: "The Complete Guide to Conversational AI for Businesses",
    excerpt: "Learn everything you need to know about implementing conversational AI in your business, from choosing the right platform to measuring ROI and scaling operations.",
    author: "AiStein Team",
    date: "2026-01-10",
    readTime: "12 min read",
    category: "Business Strategy",
    image: "/assets/images/features_integrations.png",
    tags: ["Conversational AI", "Business", "Strategy"],
  },
  {
    slug: "automated-outbound-calls-increase-sales",
    title: "5 Ways Automated Outbound Calls Can Increase Your Sales by 300%",
    excerpt: "Explore proven strategies for using AI-powered outbound calling to boost your sales pipeline, improve lead qualification, and close more deals.",
    author: "Jean-Michel Impera",
    date: "2026-01-05",
    readTime: "10 min read",
    category: "Sales & Marketing",
    image: "/assets/images/why_calls_comparison.png",
    tags: ["Sales", "Automation", "Outbound"],
  },
  {
    slug: "whatsapp-business-automation-guide",
    title: "WhatsApp Business Automation: A Complete Integration Guide",
    excerpt: "Master WhatsApp Business automation with our comprehensive guide covering API integration, automated responses, and best practices for customer engagement.",
    author: "AiStein Team",
    date: "2025-12-28",
    readTime: "15 min read",
    category: "Integration",
    image: "/assets/images/features_integrations.png",
    tags: ["WhatsApp", "Integration", "Messaging"],
  },
  {
    slug: "reduce-customer-support-costs-ai",
    title: "How to Reduce Customer Support Costs by 60% with AI Assistants",
    excerpt: "Real case studies and actionable strategies showing how businesses cut support costs dramatically while improving customer satisfaction with AI technology.",
    author: "Jean-Michel Impera",
    date: "2025-12-20",
    readTime: "9 min read",
    category: "Cost Reduction",
    image: "/assets/images/features_optimization.jpeg",
    tags: ["Cost Savings", "AI", "Support"],
  },
  {
    slug: "multilingual-ai-assistants-global-business",
    title: "Multilingual AI Assistants: Your Gateway to Global Business",
    excerpt: "Discover how multilingual AI assistants can help you expand into new markets, serve international customers, and grow your global presence effortlessly.",
    author: "AiStein Team",
    date: "2025-12-15",
    readTime: "7 min read",
    category: "Global Expansion",
    image: "/assets/images/why_command_center.png",
    tags: ["Multilingual", "Global", "Expansion"],
  },
];

const categories = [
  "All Posts",
  "AI Technology",
  "Business Strategy",
  "Sales & Marketing",
  "Integration",
  "Cost Reduction",
  "Global Expansion",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All Posts");

  const filteredPosts =
    selectedCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
                AiStein <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                Insights, guides, and news about AI automation, customer service, and business growth
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
                >
                  {/* Image */}
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center gap-1"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

