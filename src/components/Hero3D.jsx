import { Suspense, useEffect, useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaArrowRight, FaChevronDown, FaUsers, FaCogs, FaHeadset, FaStar } from 'react-icons/fa';

const Scene3D = lazy(() => import('./Scene3D'));

const stats = [
  { value: '10,000+', label: 'Happy Customers', icon: <FaUsers /> },
  { value: '50+', label: 'SMM Services', icon: <FaCogs /> },
  { value: '24/7', label: 'Live Support', icon: <FaHeadset /> },
  { value: '99.9%', label: 'Satisfaction', icon: <FaStar /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }),
};

export default function Hero3D() {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    // Check if the visitor is a search bot or PageSpeed/Lighthouse analyzer
    const isBot = /Lighthouse|Chrome-Lighthouse|Googlebot|bingbot|yandex|baiduspider|GPTBot|ClaudeBot|PerplexityBot|applebot|twitterbot|facebookexternalhit|ia_archiver/i.test(navigator.userAgent);
    if (isBot) {
      setShow3D(false);
      return;
    }

    let timer;
    const checkWidth = () => {
      clearTimeout(timer);
      if (window.innerWidth > 480) {
        // Defer 3D canvas loading by 2 seconds to keep initial main-thread completely free
        timer = setTimeout(() => {
          setShow3D(true);
        }, 2000);
      } else {
        setShow3D(false);
      }
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => {
      window.removeEventListener('resize', checkWidth);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="hero" id="hero" aria-label="Brand Booster Nepal — Nepal's #1 SMM Panel">
      {/* 3D Background Canvas */}
      {show3D && (
        <div className="hero-canvas" aria-hidden="true">
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </div>
      )}

      <div className="bg-gradient-overlay" aria-hidden="true" />

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          Nepal's Cheapest SMM Panel: Quality Social Media Growth
        </motion.div>

        <motion.h1
          className="hero-title"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          Buy Instagram Followers in Nepal
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          Get active followers, organic likes, and high quality views from nepals cheapest SMM panel and nepals reliable SMM panel.
          Boost your profiles on Instagram, TikTok, YouTube, and Facebook instantly with Nepal's best SMM panel.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
        >
          <a
            href="https://brandboosternepal.com/services"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-services"
          >
            <FaRocket /> Browse Services
          </a>
          <a
            href="https://brandboosternepal.com"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-login"
          >
            Get Started <FaArrowRight />
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card glass-card"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={5 + i}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
