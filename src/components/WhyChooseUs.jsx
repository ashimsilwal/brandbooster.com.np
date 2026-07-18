import { motion } from 'framer-motion';
import {
  FaShieldAlt, FaBolt, FaHeadset, FaSyncAlt,
  FaUserCheck, FaLock
} from 'react-icons/fa';

const features = [
  {
    icon: <FaBolt />,
    title: 'Cheapest Prices in Nepal',
    description: 'Brand Booster Nepal offers the lowest prices for all SMM services in Nepal. Instagram views starting from just Rs. 30 per 1K. No panel comes close to our pricing.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Instant Delivery',
    description: 'Orders start processing within minutes. Most services deliver within 0-1 hour. Watch your follower count, views, and likes grow in real-time.',
  },
  {
    icon: <FaHeadset />,
    title: '24/7 Customer Support',
    description: 'Our dedicated support team is available round the clock via WhatsApp. Get instant help with your orders, refunds, or any questions.',
  },
  {
    icon: <FaSyncAlt />,
    title: 'Lifetime Refill Guarantee',
    description: 'All our services come with a lifetime refill guarantee. If followers or subscribers drop, we refill them for free, no questions asked.',
  },
  {
    icon: <FaUserCheck />,
    title: 'Real & Active Accounts',
    description: 'We provide followers, likes, and views from real accounts with profile photos and posts. No bots, no fake accounts. Quality you can trust.',
  },
  {
    icon: <FaLock />,
    title: 'Safe & Secure',
    description: 'We never ask for your account password. All services work through your profile link only. Your account stays 100% safe with Brand Booster Nepal.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="section" id="why-choose-us" aria-labelledby="why-heading">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0}
        >
          <div className="section-badge">Why Choose Us</div>
          <h2 className="section-title" id="why-heading">
            Why Brand Booster Nepal is Nepal's Best SMM Panel
          </h2>
          <p className="section-subtitle">
            We are recognized as nepals top SMM panel and nepals cheapest SMM panel. Explore why leading creators and businesses partner with us as their reliable SMM panel in Nepal.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="glass-card feature-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
