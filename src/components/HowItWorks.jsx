import { motion } from 'framer-motion';
import { FaUserPlus, FaShoppingCart, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const steps = [
  {
    number: '01',
    icon: <FaUserPlus />,
    title: 'Create Your Account',
    description: 'Sign up for free on Brand Booster Nepal. Quick registration takes less than 30 seconds.',
    link: 'https://brandboosternepal.com/signup',
    linkText: 'Sign Up Free',
  },
  {
    number: '02',
    icon: <FaShoppingCart />,
    title: 'Choose Your Service',
    description: 'Browse 50+ services for Instagram, TikTok, YouTube & Facebook. Select quantity and paste your profile link.',
    link: 'https://brandboosternepal.com/services',
    linkText: 'View Services',
  },
  {
    number: '03',
    icon: <FaCheckCircle />,
    title: 'Get Instant Results',
    description: 'Sit back and watch your social media grow! Orders start within minutes with instant delivery guaranteed.',
    link: 'https://brandboosternepal.com',
    linkText: 'Get Started',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }),
};

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works" aria-labelledby="how-heading">
      <div className="bg-gradient-overlay" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0}
        >
          <div className="section-badge">How It Works</div>
          <h2 className="section-title" id="how-heading">
            Simple Process to Grow Your Brand
          </h2>
          <p className="section-subtitle">
            Establish your presence quickly. Follow our streamlined process to boost your accounts with nepals top SMM panel.
          </p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="step-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i + 1}
            >
              <motion.div
                className="step-number"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {step.number}
              </motion.div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <a
                href={step.link}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: '16px', fontSize: '0.85rem', padding: '8px 16px' }}
              >
                {step.linkText} <FaArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
