import {
  FaInstagram, FaTiktok, FaYoutube, FaFacebookF,
  FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart
} from 'react-icons/fa';

const quickLinks = [
  { label: 'Services', href: 'https://brandboosternepal.com/services' },
  { label: 'Sign Up', href: 'https://brandboosternepal.com/signup' },
  { label: 'Sign In', href: 'https://brandboosternepal.com' },
  { label: 'Blog', href: 'https://brandboosternepal.com/blog' },
];

const serviceLinks = [
  { label: 'Instagram Followers', href: 'https://brandboosternepal.com/buy-instagram-followers-nepal' },
  { label: 'Instagram Likes', href: 'https://brandboosternepal.com/buy-instagram-likes-nepal' },
  { label: 'TikTok Followers', href: 'https://brandboosternepal.com/buy-tiktok-followers-nepal' },
  { label: 'TikTok Views', href: 'https://brandboosternepal.com/buy-tiktok-views-nepal' },
  { label: 'YouTube Subscribers', href: 'https://brandboosternepal.com/buy-youtube-subscribers-nepal' },
  { label: 'Facebook Page Likes', href: 'https://brandboosternepal.com/buy-facebook-likes-nepal' },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: 'https://www.facebook.com/brandboosternpl', label: 'Facebook' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/brandboosternepal1/', label: 'Instagram' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/@BoosterNepal', label: 'YouTube' },
  { icon: <FaTiktok />, href: 'https://www.tiktok.com/@BRANDBOOSTERNEPAL', label: 'TikTok' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <a href="https://brandboosternepal.com" className="navbar-logo" style={{ marginBottom: 16, display: 'inline-flex' }}>
              <img
                src="https://brandboosternepal.com/images/13fe9d84310e77f13a6d184dbf1232f3.webp"
                alt="Brand Booster Nepal"
                width="56"
                height="45"
                loading="lazy"
              />
            </a>
            <p className="footer-brand-description">
              <strong>Brand Booster Nepal</strong> is Nepal's best SMM panel and nepals top SMM panel.
              Buy high quality Instagram, Facebook, TikTok, and YouTube followers, likes, views,
              subscribers, and comments at the most competitive rates. Enjoy immediate processing
              backed by nepals reliable SMM panel.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <a href="tel:+447537127655" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <FaPhone /> +44 7537 127655
              </a>
              <a href="mailto:noreply@brandboosternepal.com" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <FaEnvelope /> noreply@brandboosternepal.com
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <FaMapMarkerAlt /> Nepal, 44700
              </span>
            </div>

            <div className="footer-social">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Brand Booster Nepal on ${link.label}`}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <nav className="footer-links" aria-label="Quick links">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="footer-heading">Popular Services</h3>
            <nav className="footer-links" aria-label="Popular services">
              {serviceLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-heading">Get In Touch</h3>
            <div className="footer-links">
              <a
                href="https://wa.me/447537127655?text=Hi%20Brand%20Booster%20Nepal!%20I%20need%20help%20with%20SMM%20services."
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--whatsapp)' }}
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 8 }}>
                Available 24/7 for instant support. Order inquiries, refund requests,
                or custom orders, we are here to help!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} <a href="https://brandboosternepal.com" target="_blank" rel="noopener noreferrer">Brand Booster Nepal</a>. All rights reserved. Made with <FaHeart style={{ color: '#e1306c', verticalAlign: 'middle' }} /> in Nepal.
          </p>
          <div className="footer-legal">
            <a href="https://brandboosternepal.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href="https://brandboosternepal.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
