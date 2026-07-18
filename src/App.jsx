import { Suspense, lazy } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import WhatsAppButton from './components/WhatsAppButton';

const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Reviews = lazy(() => import('./components/Reviews'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://brandboosternepal.com/#organization',
      name: 'Brand Booster Nepal',
      url: 'https://brandboosternepal.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://brandboosternepal.com/images/13fe9d84310e77f13a6d184dbf1232f3.webp',
        caption: 'Brand Booster Nepal',
      },
      description:
        "Brand Booster Nepal is Nepal's best SMM panel and nepals top SMM panel. We offer reliable social media marketing packages for Facebook, TikTok, YouTube, and Instagram at highly competitive rates.",
      sameAs: [
        'https://www.facebook.com/brandboosternpl',
        'https://www.instagram.com/brandboosternepal1/',
        'https://www.youtube.com/@BoosterNepal',
        'https://www.tiktok.com/@BRANDBOOSTERNEPAL',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://brandboosternepal.com/#website',
      url: 'https://brandboosternepal.com',
      name: 'Brand Booster Nepal',
      description:
        "Brand Booster Nepal is nepals cheapest SMM panel and nepals reliable SMM panel for growing your social media channels organically.",
      publisher: { '@id': 'https://brandboosternepal.com/#organization' },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://brandboosternepal.com/#localbusiness',
      name: 'Brand Booster Nepal',
      url: 'https://brandboosternepal.com',
      telephone: '+447537127655',
      email: 'noreply@brandboosternepal.com',
      priceRange: '$$',
      description:
        "We are known as nepals top SMM panel and Nepal's best SMM panel. Buy Instagram followers, TikTok views, YouTube subscribers, and Facebook page likes safely in Nepal.",
      hasMap: 'https://maps.app.goo.gl/AiAK34gGHJ8YyNy4A',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '28.3949',
        longitude: '84.1240',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Nepal',
        addressLocality: 'Nepal',
        postalCode: '44700',
        addressCountry: 'NP',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '10247',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'Service',
      name: 'Social Media Marketing Services',
      description:
        'Buy followers, likes, views, subscribers, comments, shares and reposts for Instagram, TikTok, YouTube and Facebook at the cheapest prices in Nepal.',
      provider: { '@id': 'https://brandboosternepal.com/#organization' },
      serviceType: 'Social Media Marketing',
      areaServed: {
        '@type': 'Country',
        name: 'Nepal',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'SMM Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Buy Instagram Followers Nepal',
            },
            price: '78.63',
            priceCurrency: 'NPR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Buy TikTok Views Nepal',
            },
            price: '50',
            priceCurrency: 'NPR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Buy YouTube Subscribers Nepal',
            },
            price: '2671.48',
            priceCurrency: 'NPR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Buy Facebook Page Likes Nepal',
            },
            price: '350',
            priceCurrency: 'NPR',
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://brandboosternepal.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://brandboosternepal.com/services',
        },
      ],
    },
  ],
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Brand Booster Nepal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Brand Booster Nepal is Nepal's #1 SMM (Social Media Marketing) panel. We provide social media growth services including followers, likes, views, subscribers, comments, shares, and reposts for Instagram, Facebook, TikTok, YouTube, and more.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Brand Booster Nepal the cheapest SMM panel in Nepal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Brand Booster Nepal offers the lowest prices for all SMM services in Nepal. Instagram views start from just Rs. 30 per 1,000, TikTok views from Rs. 50 per 1,000, and Instagram followers from Rs. 78.63 per 1,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to buy Instagram followers in Nepal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simply create a free account at brandboosternepal.com, go to the Services page, select "Instagram Followers", enter your Instagram username, choose the quantity, and place your order. Followers will start appearing within minutes!',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Brand Booster Nepal legit and safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! Brand Booster Nepal is trusted by over 10,000 customers across Nepal. We never ask for your account password — we only need your profile link. All services come with a lifetime refill guarantee.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to buy TikTok followers and views in Nepal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visit brandboosternepal.com, sign up for free, navigate to Services, and choose from TikTok Followers, Likes, Views, Comments, Shares, or Reposts. Paste your TikTok link, select the quantity, and place your order. Delivery starts instantly!',
      },
    },
  ],
};

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="en" />
        <title>Buy Instagram, Facebook, TikTok and YouTube Followers in Nepal: Brand Booster Nepal</title>
        <meta
          name="description"
          content="Brand Booster Nepal is Nepal's best SMM panel and nepals top SMM panel. Buy followers, likes, views, subscribers, and comments for Instagram, Facebook, TikTok, and YouTube. Enjoy low prices from nepals cheapest SMM panel with fast delivery."
        />
        <meta
          name="keywords"
          content="buy instagram followers nepal, buy instagram likes nepal, buy instagram views nepal, buy tiktok followers nepal, buy tiktok likes nepal, buy tiktok views nepal, buy youtube subscribers nepal, buy youtube views nepal, buy facebook likes nepal, buy facebook followers nepal, smm panel nepal, cheapest smm panel nepal, best smm panel nepal, brand booster nepal, buy instagram comments nepal, buy tiktok shares nepal, buy youtube comments nepal"
        />
        <link rel="canonical" href="https://brandboosternepal.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandboosternepal.com" />
        <meta property="og:title" content="Buy Instagram, Facebook, TikTok and YouTube Followers in Nepal: Brand Booster Nepal" />
        <meta property="og:description" content="Brand Booster Nepal is nepals reliable SMM panel and nepals cheapest SMM panel. Buy organic likes, subscribers, views, and comments easily." />
        <meta property="og:image" content="https://brandboosternepal.com/images/13fe9d84310e77f13a6d184dbf1232f3.webp" />
        <meta property="og:site_name" content="Brand Booster Nepal" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy Instagram, Facebook, TikTok and YouTube Followers in Nepal: Brand Booster Nepal" />
        <meta name="twitter:description" content="Brand Booster Nepal is nepals top SMM panel offering low prices, fast processing, and lifetime refills." />
        <meta name="twitter:image" content="https://brandboosternepal.com/images/13fe9d84310e77f13a6d184dbf1232f3.webp" />

        {/* GEO Tags */}
        <meta name="geo.region" content="NP-BA" />
        <meta name="geo.placename" content="Lalitpur, Nepal" />
        <meta name="geo.position" content="27.6464001;85.3348512" />
        <meta name="ICBM" content="27.6464001, 85.3348512" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Brand Booster Nepal" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>

      <Navbar />

      <main id="main-content">
        <Hero3D />
        <Services />
        <Suspense fallback={null}>
          <WhyChooseUs />
          <HowItWorks />
          <Reviews />
          <FAQ />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </HelmetProvider>
  );
}
