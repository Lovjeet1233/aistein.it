import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Information", href: "#features" },
  { name: "Blog", href: "/blog" },
  { name: "Contact us", href: "#contact" },
];

const legalLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "IP", href: "/ip" },
  { name: "Terms and conditions of Service for legal remedy", href: "/terms" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
            aria-label="AiStein.it home"
          >
            AiStein.it
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded">
            <span className="text-xl">🇬🇧</span>
            <span className="text-sm font-medium text-gray-700">EN</span>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-gray-600">
              Copyright © {new Date().getFullYear()} Artificial Intelligence
              Business Solutions
              <br />
              VAT number IT16319390001
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-xs text-gray-600 hover:text-blue-600 transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
