import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is Brand Booster Nepal?',
    answer: 'Brand Booster Nepal is recognized as Nepal\'s best SMM panel. We are a premier provider of social media growth services, helping users buy active followers, likes, comments, and views for platforms such as TikTok, Instagram, YouTube, and Facebook. We offer budget friendly packages to ensure high quality results with reliable customer support.',
  },
  {
    question: 'Is Brand Booster Nepal the cheapest SMM panel in Nepal?',
    answer: 'Yes, we are known as nepals cheapest SMM panel. We deliver top tier services at highly competitive rates: for example, Instagram views start at only Rs. 30 per 1K, TikTok views at Rs. 50 per 1K, and Instagram followers at Rs. 78.63 per 1K. We maintain these low rates without compromising quality.',
  },
  {
    question: 'How to buy Instagram followers in Nepal?',
    answer: 'Buying Instagram followers is highly simplified: register a free account on brandboosternepal.com, visit the services page, pick Instagram Followers, input your profile link, select the desired quantity, and complete your order. Followers will begin appearing shortly.',
  },
  {
    question: 'Is Brand Booster Nepal legit and safe?',
    answer: 'Absolutely, Brand Booster Nepal is nepals reliable SMM panel trusted by thousands of creators and businesses. We never request your profile password. We only require your public URL to deliver services. Every transaction is encrypted, and we offer a lifetime refill guarantee on our services.',
  },
  {
    question: 'How to buy TikTok followers and views in Nepal?',
    answer: 'Simply create an account on brandboosternepal.com, navigate to our service offerings, select the TikTok service you need (views, likes, followers, or reposts), enter your video or profile URL, select the package size, and confirm. Delivery begins immediately.',
  },
  {
    question: 'How to buy YouTube subscribers in Nepal?',
    answer: 'Sign up on brandboosternepal.com, go to our service lists, select YouTube Subscribers, paste your channel link, and select your quantity. To maintain channel safety, subscribers are delivered naturally at a rate of 60 to 90 per day.',
  },
  {
    question: 'How to buy Facebook page likes in Nepal?',
    answer: 'Create a free profile on brandboosternepal.com, select Facebook Page Likes from our dashboard, enter your page URL, select your package size, and checkout. We provide premium likes and followers combos with non-drop security.',
  },
  {
    question: 'Do you offer refills if followers drop?',
    answer: 'Yes, our packages come with a lifetime refill guarantee. If you experience any decrease in your counts, connect with us on WhatsApp and we will refill the dropped amount for free without any hassle.',
  },
  {
    question: 'What payment methods does Brand Booster Nepal accept?',
    answer: 'We accept local payment options including eSewa, Khalti, IME Pay, and secure bank transfers, allowing you to pay easily in Nepali Rupees (NPR).',
  },
  {
    question: 'How fast is the delivery?',
    answer: 'Most orders start processing within minutes. The full delivery time varies by package size: Instagram views process up to 100K daily, TikTok views up to 100M daily, and YouTube subscribers at 60 to 90 daily to keep growth organic.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">FAQ</div>
          <h2 className="section-title" id="faq-heading">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle">
            Find immediate answers to the most common questions about the services and features of Brand Booster Nepal.
          </p>
        </motion.div>

        <div className="faq-container" role="list" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              role="listitem"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <button
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                itemProp="name"
              >
                {faq.question}
                <span className="faq-icon"><FaPlus /></span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer active"
                    id={`faq-answer-${index}`}
                    role="region"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    initial={{ opacity: 0, maxHeight: 0, padding: '0 24px' }}
                    animate={{ opacity: 1, maxHeight: 500, padding: '20px 24px' }}
                    exit={{ opacity: 0, maxHeight: 0, padding: '0 24px' }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p itemProp="text">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
