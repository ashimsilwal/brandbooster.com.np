import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaInstagram, FaTiktok, FaYoutube, FaFacebookF,
  FaBars, FaTimes, FaSignInAlt, FaUserPlus
} from 'react-icons/fa';

const navLinks = [
  { label: 'Services', href: 'https://brandboosternepal.com/services', icon: null },
  { label: 'Instagram', href: 'https://brandboosternepal.com/buy-instagram-followers-nepal', icon: <FaInstagram />, className: 'platform-instagram' },
  { label: 'TikTok', href: 'https://brandboosternepal.com/buy-tiktok-followers-nepal', icon: <FaTiktok />, className: 'platform-tiktok' },
  { label: 'YouTube', href: 'https://brandboosternepal.com/buy-youtube-subscribers-nepal', icon: <FaYoutube />, className: 'platform-youtube' },
  { label: 'Facebook', href: 'https://brandboosternepal.com/buy-facebook-followers-nepal', icon: <FaFacebookF />, className: 'platform-facebook' },
  { label: 'Blog', href: 'https://brandboosternepal.com/blog', icon: null },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container">
        <nav className="navbar-inner" aria-label="Main navigation">
          <a href="https://brandboosternepal.com" className="navbar-logo" title="Brand Booster Nepal — Nepal's #1 SMM Panel">
            <img
              src="https://brandboosternepal.com/images/13fe9d84310e77f13a6d184dbf1232f3.webp"
              alt="Brand Booster Nepal Logo"
              width="140"
              height="40"
              loading="eager"
            />
          </a>

          <ul className="navbar-menu" role="menubar">
            {navLinks.map((link) => (
              <li key={link.label} role="none">
                <a
                  href={link.href}
                  className={link.className || ''}
                  role="menuitem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon && <span>{link.icon}</span>}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-cta">
            <a href="https://brandboosternepal.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <FaSignInAlt /> Sign In
            </a>
            <a href="https://brandboosternepal.com/signup" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <FaUserPlus /> Sign Up
            </a>
          </div>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-overlay active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu active"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon || <FaSignInAlt />}
                  {link.label}
                </a>
              ))}

              <div className="mobile-cta">
                <a href="https://brandboosternepal.com" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  <FaSignInAlt /> Sign In
                </a>
                <a href="https://brandboosternepal.com/signup" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  <FaUserPlus /> Sign Up
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
