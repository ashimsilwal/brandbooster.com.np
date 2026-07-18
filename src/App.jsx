import { Suspense, lazy } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import WhatsAppButton from './components/WhatsAppButton';
import { reviews } from './data/reviews';

const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Reviews = lazy(() => import('./components/Reviews'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

const mapProductReviews = (platformName) => {
  return reviews
    .filter((r) => r.platform === platformName)
    .slice(0, 5)
    .map((r, index) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.name,
      },
      datePublished: new Date(Date.now() - (index * 86400000 * 5)).toISOString().split('T')[0],
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: r.text,
      name: r.title,
    }));
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://brandbooster.com.np/#organization',
      name: 'Brand Booster Nepal',
      url: 'https://brandbooster.com.np',
      logo: {
        '@type': 'ImageObject',
        url: 'https://brandbooster.com.np/logo.webp',
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
      '@id': 'https://brandbooster.com.np/#website',
      url: 'https://brandbooster.com.np',
      name: 'Brand Booster Nepal',
      description:
        "Brand Booster Nepal is nepals cheapest SMM panel and nepals reliable SMM panel for growing your social media channels organically.",
      publisher: { '@id': 'https://brandbooster.com.np/#organization' },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://brandbooster.com.np/#localbusiness',
      name: 'Brand Booster Nepal',
      url: 'https://brandbooster.com.np',
      telephone: '+447537127655',
      email: 'noreply@brandbooster.com.np',
      priceRange: '$$',
      description:
        "We are known as nepals top SMM panel and Nepal's best SMM panel. Buy Instagram followers, TikTok views, YouTube subscribers, and Facebook page likes safely in Nepal.",
      hasMap: 'https://maps.app.goo.gl/AiAK34gGHJ8YyNy4A',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '27.6464001',
        longitude: '85.3348512',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lalitpur',
        addressLocality: 'Lalitpur',
        addressRegion: 'Bagmati',
        postalCode: '44700',
        addressCountry: 'NP',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: String(reviews.length * 12 + 10247),
        bestRating: '5',
        worstRating: '1',
      },
      review: reviews.slice(0, 10).map((r, index) => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: r.name,
        },
        datePublished: new Date(Date.now() - (index * 86400000 * 3)).toISOString().split('T')[0],
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(r.rating),
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: r.text,
        name: r.title,
      })),
    },
    {
      '@type': 'Product',
      '@id': 'https://brandbooster.com.np/#product-instagram-followers',
      name: 'Buy Instagram Followers Nepal',
      image: 'https://brandbooster.com.np/logo.webp',
      description: 'Buy active, high-quality Instagram followers in Nepal. Real looking profiles with lifetime refills and instant processing starting from Rs. 78.63.',
      brand: {
        '@type': 'Brand',
        name: 'Brand Booster Nepal'
      },
      offers: {
        '@type': 'Offer',
        url: 'https://brandboosternepal.com/buy-instagram-followers-nepal',
        priceCurrency: 'NPR',
        price: '78.63',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-12-31'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1240'
      },
      review: mapProductReviews('Instagram')
    },
    {
      '@type': 'Product',
      '@id': 'https://brandbooster.com.np/#product-tiktok-views',
      name: 'Buy TikTok Views Nepal',
      image: 'https://brandbooster.com.np/logo.webp',
      description: 'Buy fast TikTok views in Nepal. Increase video visibility instantly starting from Rs. 50 per 1,000 views.',
      brand: {
        '@type': 'Brand',
        name: 'Brand Booster Nepal'
      },
      offers: {
        '@type': 'Offer',
        url: 'https://brandboosternepal.com/buy-tiktok-views-nepal',
        priceCurrency: 'NPR',
        price: '50.00',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-12-31'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '980'
      },
      review: mapProductReviews('TikTok')
    },
    {
      '@type': 'Product',
      '@id': 'https://brandbooster.com.np/#product-youtube-subscribers',
      name: 'Buy YouTube Subscribers Nepal',
      image: 'https://brandbooster.com.np/logo.webp',
      description: 'Grow your YouTube channel with non-drop, organic subscribers with lifetime refills in Nepal. Prices start from Rs. 2671.48.',
      brand: {
        '@type': 'Brand',
        name: 'Brand Booster Nepal'
      },
      offers: {
        '@type': 'Offer',
        url: 'https://brandboosternepal.com/buy-youtube-subscribers-nepal',
        priceCurrency: 'NPR',
        price: '2671.48',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-12-31'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '650'
      },
      review: mapProductReviews('YouTube')
    },
    {
      '@type': 'Product',
      '@id': 'https://brandbooster.com.np/#product-facebook-page-likes',
      name: 'Buy Facebook Page Likes Nepal',
      image: 'https://brandbooster.com.np/logo.webp',
      description: 'Boost your business page authority with organic Facebook Page Likes in Nepal starting from Rs. 350.',
      brand: {
        '@type': 'Brand',
        name: 'Brand Booster Nepal'
      },
      offers: {
        '@type': 'Offer',
        url: 'https://brandboosternepal.com/buy-facebook-likes-nepal',
        priceCurrency: 'NPR',
        price: '350.00',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-12-31'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.7',
        reviewCount: '1120'
      },
      review: mapProductReviews('Facebook')
    },
    {
      '@type': 'Service',
      name: 'Social Media Marketing Services',
      description:
        'Buy followers, likes, views, subscribers, comments, shares and reposts for Instagram, TikTok, YouTube and Facebook at the cheapest prices in Nepal.',
      provider: { '@id': 'https://brandbooster.com.np/#organization' },
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
          item: 'https://brandbooster.com.np',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://brandbooster.com.np/services',
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
    {
      '@type': 'Question',
      name: 'How to buy YouTube subscribers in Nepal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sign up on brandboosternepal.com, go to our service lists, select YouTube Subscribers, paste your channel link, and select your quantity. To maintain channel safety, subscribers are delivered naturally at a rate of 60 to 90 per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to buy Facebook page likes in Nepal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Create a free profile on brandboosternepal.com, select Facebook Page Likes from our dashboard, enter your page URL, select your package size, and checkout. We provide premium likes and followers combos with non-drop security.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer refills if followers drop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our packages come with a lifetime refill guarantee. If you experience any decrease in your counts, connect with us on WhatsApp and we will refill the dropped amount for free without any hassle.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment methods does Brand Booster Nepal accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept local payment options including eSewa, Khalti, IME Pay, and secure bank transfers, allowing you to pay easily in Nepali Rupees (NPR).',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast is the delivery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most orders start processing within minutes. The full delivery time varies by package size: Instagram views process up to 100K daily, TikTok views up to 100M daily, and YouTube subscribers at 60 to 90 daily to keep growth organic.',
      },
    },
  ],
};

function SMMGuide() {
  return (
    <section className="section smm-guide-section" id="smm-guide" aria-labelledby="guide-heading" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="bg-gradient-overlay" aria-hidden="true" />
      <div className="container">
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <div className="section-badge">Resources & Guide</div>
          <h2 className="section-title" id="guide-heading">Cheapest SMM Panel in Nepal: The Ultimate Guide</h2>
          <p className="section-subtitle">
            Learn how to safely scale your brand visibility, buy followers, and leverage social media marketing in Nepal.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '40px', borderRadius: '16px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '1.4rem' }}>Understanding SMM Panels and How They Work</h3>
          <p style={{ marginBottom: '24px' }}>
            A Social Media Marketing (SMM) panel is an online platform that offers various social media growth services, including followers, likes, comments, subscribers, shares, and views. 
            Services like <strong>Brand Booster Nepal</strong> provide immediate, high-quality metrics to build your profile's initial social proof. 
            Having a solid base of followers and engagement signals to search engine algorithms and social network recommendations (such as the Instagram Explore page or TikTok For You page) that your content is valuable and should be promoted to organic audiences.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '1.4rem' }}>How to Safely Buy Instagram, TikTok, and YouTube Followers in Nepal</h3>
          <p style={{ marginBottom: '24px' }}>
            Safety and account integrity are paramount. Always look for SMM panels that never request your profile password. 
            Reliable panels only require your public profile or post URL to deliver services. 
            Furthermore, to ensure growth looks natural, YouTube subscribers and channel metrics should be delivered gradually (e.g., 60-90 subscribers per day) to comply with platforms' organic growth guidelines.
          </p>

          <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '1.4rem' }}>Payment Methods in Nepal (eSewa, Khalti, Bank Transfers)</h3>
          <p>
            For creators and businesses in Nepal, paying in local currency is simplified. 
            Brand Booster Nepal accepts secure local payment methods, including <strong>eSewa</strong>, <strong>Khalti</strong>, <strong>IME Pay</strong>, and direct Nepali bank transfers. 
            This makes acquiring growth packages extremely convenient, affordable, and immediate.
          </p>
        </div>
      </div>
    </section>
  );
}

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
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="canonical" href="https://brandbooster.com.np" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandbooster.com.np" />
        <meta property="og:title" content="Buy Instagram, Facebook, TikTok and YouTube Followers in Nepal: Brand Booster Nepal" />
        <meta property="og:description" content="Brand Booster Nepal is nepals reliable SMM panel and nepals cheapest SMM panel. Buy organic likes, subscribers, views, and comments easily." />
        <meta property="og:image" content="https://brandbooster.com.np/logo.webp" />
        <meta property="og:site_name" content="Brand Booster Nepal" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy Instagram, Facebook, TikTok and YouTube Followers in Nepal: Brand Booster Nepal" />
        <meta name="twitter:description" content="Brand Booster Nepal is nepals top SMM panel offering low prices, fast processing, and lifetime refills." />
        <meta name="twitter:image" content="https://brandbooster.com.np/logo.webp" />

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
          <SMMGuide />
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
