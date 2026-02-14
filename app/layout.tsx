import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { generateStructuredData } from "./lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://onboardvisa.com"),
  title: {
    default: "OnboardVisa - Expert Visa & Immigration Services",
    template: "%s | OnboardVisa",
  },
  description:
    "Professional visa and immigration services for innovators, founders, and global talent. Expert guidance for international relocation and visa applications.",
  keywords: [
    "visa services",
    "immigration",
    "innovator founder visa",
    "global talent visa",
    "visa application",
    "immigration services",
    "international relocation",
  ],
  authors: [{ name: "OnboardVisa" }],
  creator: "OnboardVisa",
  publisher: "OnboardVisa",
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
    url: "/",
    siteName: "OnboardVisa",
    title: "OnboardVisa - Expert Visa & Immigration Services",
    description:
      "Professional visa and immigration services for innovators, founders, and global talent.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnboardVisa - Expert Visa & Immigration Services",
    description:
      "Professional visa and immigration services for innovators, founders, and global talent.",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const organizationStructuredData = generateStructuredData({
  type: "Organization",
  data: {
    name: "OnboardVisa",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://onboardvisa.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://onboardvisa.com"}/logo.png`,
    description:
      "Professional visa and immigration services for innovators, founders, and global talent.",
    sameAs: [],
  },
});

const websiteStructuredData = generateStructuredData({
  type: "WebSite",
  data: {
    name: "OnboardVisa",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://onboardvisa.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || "https://onboardvisa.com"}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
