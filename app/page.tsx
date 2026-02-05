import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PlatformShowcaseSection from "@/components/sections/PlatformShowcaseSection";
import StorySection from "@/components/sections/StorySection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ValuesSection from "@/components/sections/ValuesSection";
import LanguagesSection from "@/components/sections/LanguagesSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import VoiceButton from "@/components/ui/VoiceButton";
import ChatbotWidget from "@/components/ui/ChatbotWidget";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <HeroSection />
        <FeaturesSection />
        <PlatformShowcaseSection />
        <StorySection />
        <StatsSection />
        <TestimonialSection />
        <WhyChooseSection />
        <ValuesSection />
        <LanguagesSection />
        <IntegrationsSection />
        <PricingSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Fixed UI Elements */}
      <VoiceButton />
      <ChatbotWidget />
    </>
  );
}
