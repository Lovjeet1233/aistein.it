"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Tag, User } from "lucide-react";
import { useParams } from "next/navigation";

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
  content: string[];
}

const blogPosts: Record<string, BlogPost> = {
  "ai-voice-assistants-transforming-customer-service": {
    slug: "ai-voice-assistants-transforming-customer-service",
    title: "How AI Voice Assistants Are Transforming Customer Service in 2026",
    excerpt: "Discover how businesses are leveraging AI voice technology to provide 24/7 customer support.",
    author: "Jean-Michel Impera",
    date: "2026-01-15",
    readTime: "8 min read",
    category: "AI Technology",
    image: "/assets/images/features_automations.png",
    tags: ["AI", "Customer Service", "Automation"],
    content: [
      "The landscape of customer service has undergone a dramatic transformation with the advent of AI voice assistants. In 2026, businesses are experiencing unprecedented success rates, with our platform achieving an industry-leading 98.9% call success rate.",
      "## The Revolution in Customer Experience",
      "AI voice assistants have moved beyond simple automated responses to become sophisticated conversational agents capable of understanding context, emotion, and intent. This evolution has enabled businesses to provide consistent, high-quality customer service 24/7, without the limitations of human availability.",
      "## Key Benefits for Businesses",
      "**Cost Reduction**: Companies implementing AI voice assistants report up to 60% reduction in customer support costs while simultaneously improving service quality. This is achieved through automated handling of routine inquiries, allowing human agents to focus on complex issues.",
      "**Scalability**: Unlike traditional call centers, AI voice assistants can handle unlimited concurrent calls. During peak periods, businesses no longer face the challenge of long wait times or missed customer interactions.",
      "**Consistency**: Every customer receives the same high level of service, regardless of the time of day or the volume of concurrent requests. This consistency builds trust and improves brand reputation.",
      "## Real-World Success Stories",
      "E-commerce businesses have seen particularly dramatic results. One retail client reported a 300% increase in after-hours sales conversions after implementing 24/7 AI voice support. Another B2B company reduced their average response time from 4 hours to instant, leading to a 45% improvement in customer satisfaction scores.",
      "## The Technology Behind the Success",
      "Modern AI voice assistants leverage advanced natural language processing, machine learning, and emotional intelligence algorithms. They can detect customer sentiment, adapt their communication style, and even escalate to human agents when necessary - all while maintaining detailed logs for continuous improvement.",
      "## Looking Ahead",
      "As we progress through 2026, the integration of AI voice assistants with other business systems - CRM, inventory management, and analytics platforms - is creating a seamless ecosystem where customer data flows effortlessly, enabling even more personalized and effective interactions.",
      "The question for businesses is no longer whether to adopt AI voice technology, but how quickly they can implement it to stay competitive in an increasingly automated marketplace.",
    ],
  },
  "complete-guide-to-conversational-ai": {
    slug: "complete-guide-to-conversational-ai",
    title: "The Complete Guide to Conversational AI for Businesses",
    excerpt: "Learn everything you need to know about implementing conversational AI in your business.",
    author: "AiStein Team",
    date: "2026-01-10",
    readTime: "12 min read",
    category: "Business Strategy",
    image: "/assets/images/features_integrations.png",
    tags: ["Conversational AI", "Business", "Strategy"],
    content: [
      "Conversational AI has emerged as one of the most transformative technologies for businesses in the 2020s. This comprehensive guide will walk you through everything you need to know about implementing conversational AI in your organization.",
      "## What is Conversational AI?",
      "Conversational AI refers to technologies that enable computers to understand, process, and respond to human language in a natural, human-like manner. This encompasses voice assistants, chatbots, and intelligent virtual agents that can engage in meaningful dialogues with users.",
      "## Why Your Business Needs Conversational AI",
      "**Customer Expectations**: Today's customers expect instant responses and 24/7 availability. Conversational AI makes this possible without exponentially increasing costs.",
      "**Operational Efficiency**: Automating routine interactions frees your team to focus on complex problems that require human creativity and empathy.",
      "**Data Insights**: Every conversation generates valuable data about customer needs, preferences, and pain points, enabling continuous improvement.",
      "## Choosing the Right Platform",
      "When evaluating conversational AI platforms, consider these critical factors:",
      "- **Integration Capabilities**: Can it connect with your existing CRM, e-commerce platform, and other business tools?",
      "- **Multilingual Support**: Does it support all the languages your customers speak?",
      "- **Customization**: Can you train it on your specific products, services, and brand voice?",
      "- **Scalability**: Will it grow with your business needs?",
      "- **Analytics**: Does it provide actionable insights from conversations?",
      "## Implementation Best Practices",
      "**Start Small**: Begin with a specific use case, such as appointment scheduling or order tracking. Once successful, expand to other areas.",
      "**Train Thoroughly**: Invest time in training your AI with real customer scenarios, FAQs, and product information. The quality of your training directly impacts performance.",
      "**Monitor and Optimize**: Continuously analyze conversation logs, customer feedback, and performance metrics. Use these insights to refine responses and add new capabilities.",
      "**Maintain Human Oversight**: Always provide an option for customers to reach human agents for complex or sensitive issues.",
      "## Measuring ROI",
      "Track these key metrics to measure the success of your conversational AI implementation:",
      "- Cost per conversation vs. human-handled interactions",
      "- Customer satisfaction scores (CSAT)",
      "- First contact resolution rate",
      "- Average handling time",
      "- Conversion rates for sales-related conversations",
      "- Employee satisfaction (freed from repetitive tasks)",
      "## The Future of Conversational AI",
      "As natural language processing continues to advance, conversational AI will become even more sophisticated, handling increasingly complex scenarios with greater accuracy and empathy. Businesses that adopt this technology now will be well-positioned to lead their industries in customer experience.",
    ],
  },
  "automated-outbound-calls-increase-sales": {
    slug: "automated-outbound-calls-increase-sales",
    title: "5 Ways Automated Outbound Calls Can Increase Your Sales by 300%",
    excerpt: "Explore proven strategies for using AI-powered outbound calling to boost your sales pipeline.",
    author: "Jean-Michel Impera",
    date: "2026-01-05",
    readTime: "10 min read",
    category: "Sales & Marketing",
    image: "/assets/images/why_calls_comparison.png",
    tags: ["Sales", "Automation", "Outbound"],
    content: [
      "Automated outbound calling has revolutionized how businesses approach sales and customer outreach. Companies leveraging AI-powered outbound systems are seeing remarkable results - some reporting up to 300% increases in sales conversions.",
      "## 1. Perfect Timing with Intelligent Scheduling",
      "AI systems analyze historical data to determine the optimal time to contact each prospect. Rather than randomly calling leads throughout the day, automated systems learn when specific customer segments are most receptive to outbound calls.",
      "**Result**: 45% improvement in contact rates and 28% increase in positive responses.",
      "## 2. Personalized Conversations at Scale",
      "Modern AI voice assistants can access CRM data in real-time, personalizing each conversation based on the prospect's history, preferences, and previous interactions. This level of personalization was impossible with traditional calling scripts.",
      "**Implementation Tip**: Integrate your AI calling system with your CRM to access customer history, purchase patterns, and preferences during each call.",
      "## 3. Consistent Follow-up That Never Fails",
      "One of the biggest challenges in sales is consistent follow-up. Automated systems never forget a follow-up, can handle thousands of callbacks simultaneously, and maintain perfect records of every interaction.",
      "**Case Study**: A B2B software company implemented automated follow-up calls and saw their lead-to-customer conversion rate increase from 12% to 38% within six months.",
      "## 4. A/B Testing at Unprecedented Scale",
      "With AI-powered outbound calling, you can test different approaches, scripts, and offers simultaneously across thousands of calls. The system learns which approaches work best for different customer segments and automatically optimizes future calls.",
      "**Key Metrics to Test**:",
      "- Opening statements and hooks",
      "- Offer presentations",
      "- Objection handling approaches",
      "- Call timing and frequency",
      "- Voice tone and pacing",
      "## 5. Qualification and Lead Scoring",
      "AI assistants can qualify leads during outbound calls, asking relevant questions and scoring prospects based on their responses. This ensures your sales team spends time only on the most promising opportunities.",
      "**Efficiency Gain**: Sales teams report spending 70% more time on high-quality leads after implementing AI qualification.",
      "## Getting Started",
      "**Week 1-2**: Define your ideal customer profile and create initial conversation flows.",
      "**Week 3-4**: Train your AI system with product information, common objections, and FAQs.",
      "**Week 5-6**: Launch a pilot program with a small segment of your lead list.",
      "**Week 7+**: Analyze results, optimize based on data, and scale to your full database.",
      "## Compliance and Best Practices",
      "Always ensure your automated calling practices comply with regulations like GDPR, TCPA, and local telemarketing laws. Provide clear opt-out options and respect do-not-call lists.",
      "## The Bottom Line",
      "Automated outbound calling isn't about replacing your sales team - it's about amplifying their effectiveness. By handling initial outreach, qualification, and follow-ups at scale, AI assistants enable your human sales team to focus on what they do best: building relationships and closing complex deals.",
    ],
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <Link href="/blog" className="text-blue-600 hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <article className="pt-32 pb-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
            >
              {post.title}
            </motion.h1>

            {/* Meta Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200"
            >
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 ml-auto">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-[400px] rounded-2xl overflow-hidden mb-12"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-lg max-w-none"
            >
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2
                      key={index}
                      className="text-3xl font-bold text-gray-900 mt-12 mb-6"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <p key={index} className="text-lg text-gray-900 font-bold mb-4">
                      {paragraph.replace(/\*\*/g, "")}
                    </p>
                  );
                } else if (paragraph.startsWith("-")) {
                  return (
                    <li key={index} className="text-lg text-gray-700 mb-2 ml-6">
                      {paragraph.replace("- ", "")}
                    </li>
                  );
                } else {
                  return (
                    <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-gray-200"
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors"
                >
                  <Tag className="w-4 h-4" />
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business with AI?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Join 1,250+ businesses already using AiStein to automate customer interactions and boost sales.
              </p>
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

