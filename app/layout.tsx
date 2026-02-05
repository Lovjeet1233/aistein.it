import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://aistein.it"),
  title: {
    default: "AiStein.it - AI Voice & Chat Assistants | 24/7 Business Automation",
    template: "%s | AiStein.it",
  },
  description:
    "Complete AI assistant platform for inbound/outbound calls, customer service automation, and seamless integrations. 98.9% success rate, 100% guaranteed results. Easy setup, affordable pricing starting at €299.99/month.",
  keywords: [
    "AI voice assistant",
    "conversational AI",
    "customer service automation",
    "AI chatbot",
    "inbound call automation",
    "outbound call automation",
    "business process automation",
    "WhatsApp automation",
    "e-commerce AI integration",
    "voice AI technology",
    "AI customer support",
    "automated phone system",
    "virtual assistant",
    "AI receptionist",
    "call center automation",
    "Italian AI assistant",
    "multilingual AI",
    "VoIP integration",
    "Shopify AI integration",
    "WordPress AI chatbot",
  ],
  authors: [{ name: "AiStein.it Team" }, { name: "Jean-Michel Impera" }],
  creator: "AiStein.it",
  publisher: "Artificial Intelligence Business Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["it_IT", "es_ES", "fr_FR", "tr_TR", "ar_SA"],
    url: "https://aistein.it",
    siteName: "AiStein.it",
    title: "AiStein.it - AI Voice & Chat Assistants | 24/7 Business Automation",
    description:
      "Complete AI assistant platform for inbound/outbound calls and customer service automation. 98.9% success rate, 100% guaranteed results. Starting at €299.99/month.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AiStein.it - AI Voice & Chat Assistants Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AiStein.it - AI Voice & Chat Assistants | 24/7 Business Automation",
    description:
      "Complete AI assistant platform for inbound/outbound calls and customer service automation. 98.9% success rate.",
    images: ["/assets/images/twitter-image.jpg"],
    creator: "@aistein",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  alternates: {
    canonical: "https://aistein.it",
    languages: {
      "en-US": "https://aistein.it",
      "it-IT": "https://aistein.it/it",
      "es-ES": "https://aistein.it/es",
      "fr-FR": "https://aistein.it/fr",
      "tr-TR": "https://aistein.it/tr",
      "ar-SA": "https://aistein.it/ar",
    },
  },
  category: "technology",
  classification: "Business Software, AI Technology, Customer Service",
  other: {
    "msapplication-TileColor": "#0066FF",
    "application-name": "AiStein.it",
  },
};

// Enhanced JSON-LD Structured Data for SEO
const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AiStein.it",
  legalName: "Artificial Intelligence Business Solutions",
  description:
    "Premium AI voice and chat assistant platform for business automation",
  url: "https://aistein.it",
  logo: "https://aistein.it/assets/images/logo.svg",
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "Jean-Michel Impera",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Tiburtina 1227",
    addressLocality: "Rome",
    addressRegion: "RM",
    postalCode: "00131",
    addressCountry: "IT",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+39-068-561-0547",
      contactType: "sales",
      availableLanguage: ["English", "Italian", "Spanish", "French", "Turkish", "Arabic"],
      email: "info@aistein.it",
    },
    {
      "@type": "ContactPoint",
      telephone: "+39-062-019-9386",
      contactType: "customer service",
      email: "assistenza@aistein.it",
    },
  ],
  sameAs: [
    "https://facebook.com/aistein",
    "https://instagram.com/aistein",
    "https://linkedin.com/company/aistein",
    "https://youtube.com/@aistein",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1250",
    bestRating: "5",
    worstRating: "1",
  },
};

const jsonLdSoftwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AiStein.it",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web-based",
  offers: [
    {
      "@type": "Offer",
      name: "MILEVA Package",
      price: "299.99",
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "NOBEL PRIZE Package",
      price: "499.99",
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "AISTEIN Package",
      price: "799.99",
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1250",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Voice & Chat Assistant Platform",
  provider: {
    "@type": "Organization",
    name: "AiStein.it",
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Assistant Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inbound Call Automation",
          description: "24/7 automated customer service calls with 98.9% success rate",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Outbound Call Automation",
          description: "Automated sales and follow-up calls with AI voice assistants",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chat Integration",
          description: "Multi-channel chatbot integration (WhatsApp, Web, Social, Email)",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        {/* Tailwind CSS CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      blue: {
                        600: '#0066FF',
                      }
                    },
                    borderRadius: {
                      DEFAULT: '4px',
                      'sm': '2px',
                      'md': '4px',
                      'lg': '4px',
                    },
                    fontFamily: {
                      sans: ['Roboto', 'system-ui', 'sans-serif'],
                    }
                  }
                }
              }
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApplication) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#0066FF" />
        <meta name="msapplication-TileColor" content="#0066FF" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
        >
          Skip to content
        </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
