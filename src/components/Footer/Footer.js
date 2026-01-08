import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/poojith3010', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/poojith-m-9a27752b8', label: 'LinkedIn' },
    { icon: <FiMail />, href: 'mailto:mpoojith456@gmail.com', label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Social Links */}
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Footer Text */}
          <div className="footer-text">
            <p className="footer-built">
              Designed & Built with <FiHeart className="heart-icon" /> by{' '}
              <a
                href="https://github.com/poojith3010"
                target="_blank"
                rel="noopener noreferrer"
              >
                Poojith M
              </a>
            </p>
            <p className="footer-copyright">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Back to Top */}
          <motion.a
            href="#home"
            className="back-to-top"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>↑</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
