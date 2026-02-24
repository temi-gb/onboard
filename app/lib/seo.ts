import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://onboardvisa.com';
const siteName = 'OnboardVisa';
const defaultDescription =
  'Professional visa and immigration services for innovators, founders, and global talent. Expert guidance for international relocation and visa applications.';

export function generateMetadata({
  title,
  fullTitle: fullTitleOverride,
  description = defaultDescription,
  path = '',
  keywords,
  ogImage,
}: {
  title: string;
  fullTitle?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const fullTitle = fullTitleOverride ?? `${title} | ${siteName}`;
  const url = `${siteUrl}${path}`;
  const image = ogImage || `${siteUrl}/og-image.jpg`;

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateStructuredData({
  type,
  data,
}: {
  type: 'Organization' | 'WebSite' | 'Service' | 'Article' | 'BreadcrumbList';
  data: Record<string, any>;
}) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return baseStructuredData;
}

