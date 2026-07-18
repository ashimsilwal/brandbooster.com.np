import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaStar, FaRegStar, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import { reviews } from '../data/reviews';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function StarRating({ rating }) {
  return (
    <div className="review-stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`star ${star <= rating ? '' : 'empty'}`}>
          {star <= rating ? <FaStar /> : <FaRegStar />}
        </span>
      ))}
    </div>
  );
}

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function ReviewCard({ review }) {
  return (
    <article className="glass-card review-card" aria-label={`Review by ${review.name}`}>
      <div className="review-header">
        <div
          className="review-avatar"
          style={{ background: review.platformColor }}
          aria-hidden="true"
        >
          {getInitials(review.name)}
        </div>
        <div className="review-info">
          <div className="review-name">
            {review.name}
            {review.verified && (
              <FaCheckCircle className="verified-badge" title="Verified Purchase" />
            )}
          </div>
          <div className="review-meta">
            <span>{review.location}</span>
            <span>•</span>
            <span style={{ color: review.platformColor }}>{review.platform}</span>
          </div>
        </div>
      </div>

      <StarRating rating={review.rating} />

      <h3 className="review-title">{review.title}</h3>
      <p className="review-text">
        <FaQuoteLeft style={{ opacity: 0.15, marginRight: 6, fontSize: '0.8em' }} />
        {review.text}
      </p>

      <div className="review-service">
        {review.service} | Qty: {review.quantity}
      </div>
      <div className="review-date">{review.date}</div>
    </article>
  );
}

export default function Reviews() {
  return (
    <section className="section reviews-section" id="reviews" aria-labelledby="reviews-heading">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            Customer Reviews
          </div>
          <h2 className="section-title" id="reviews-heading">
            What Our Customers Say
          </h2>
          <p className="section-subtitle">
            Read real client feedback on why they trust nepals reliable SMM panel for their social media growth.
          </p>
        </motion.div>

        <motion.div
          className="reviews-swiper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1440: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
