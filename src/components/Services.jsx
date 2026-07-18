import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaInstagram, FaTiktok, FaYoutube, FaFacebookF,
  FaUserPlus, FaHeart, FaPlay, FaComment, FaEye,
  FaShare, FaRetweet, FaBell, FaThumbsUp, FaRocket
} from 'react-icons/fa';
import { platforms } from '../data/services';

const iconMap = {
  FaUserPlus: <FaUserPlus />,
  FaHeart: <FaHeart />,
  FaPlay: <FaPlay />,
  FaComment: <FaComment />,
  FaEye: <FaEye />,
  FaShare: <FaShare />,
  FaRetweet: <FaRetweet />,
  FaBell: <FaBell />,
  FaThumbsUp: <FaThumbsUp />,
};

const platformIcons = {
  FaInstagram: <FaInstagram />,
  FaTiktok: <FaTiktok />,
  FaYoutube: <FaYoutube />,
  FaFacebookF: <FaFacebookF />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  }),
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
};

export default function Services() {
  const [activePlatform, setActivePlatform] = useState('instagram');

  const currentPlatform = platforms.find((p) => p.id === activePlatform);

  return (
    <section className="section" id="services" aria-labelledby="services-heading">
      <div className="bg-gradient-overlay" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            Our Services
          </div>
          <h2 className="section-title" id="services-heading">
            Boost Your Social Media Presence in Nepal
          </h2>
          <p className="section-subtitle">
            Choose from our catalog of premium social media growth packages. Experience organic growth
            and increased visibility across all major networks at the most competitive rates in Nepal.
          </p>
        </motion.div>

        {/* Platform Tabs */}
        <div className="platform-tabs" role="tablist" aria-label="Social media platforms">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              className={`platform-tab ${activePlatform === platform.id ? 'active' : ''}`}
              data-platform={platform.id}
              onClick={() => setActivePlatform(platform.id)}
              role="tab"
              aria-selected={activePlatform === platform.id}
              aria-controls={`panel-${platform.id}`}
              id={`tab-${platform.id}`}
            >
              {platformIcons[platform.icon]}
              {platform.name}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlatform}
            className="services-grid"
            role="tabpanel"
            id={`panel-${activePlatform}`}
            aria-labelledby={`tab-${activePlatform}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentPlatform?.services.map((service, i) => (
              <motion.article
                key={service.name}
                className="glass-card service-card"
                data-platform={activePlatform}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="service-card-header">
                  <div className={`service-icon ${activePlatform}`}>
                    {iconMap[service.icon]}
                  </div>
                </div>

                <h3 className="service-name">
                  {currentPlatform.name} {service.name}
                </h3>
                <p className="service-description">{service.description}</p>

                <div className="service-features">
                  {service.features.map((feat) => (
                    <span key={feat} className="service-feature">{feat}</span>
                  ))}
                </div>

                <div className="service-cta">
                  <a
                    href={service.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Now <FaRocket />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
