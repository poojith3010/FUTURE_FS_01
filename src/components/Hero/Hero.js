import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/poojith3010', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/poojith-m-9a27752b8', label: 'LinkedIn' },
    { icon: <FiMail />, href: 'mailto:mpoojith456@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>
      
      <motion.div
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-greeting" variants={itemVariants}>
          Hi, my name is
        </motion.p>
        
        <motion.h1 className="hero-name" variants={itemVariants}>
          Poojith M.
        </motion.h1>
        
        <motion.h2 className="hero-tagline" variants={itemVariants}>
          I build intelligent AI solutions.
        </motion.h2>
        
        <motion.p className="hero-description" variants={itemVariants}>
          I'm an <span className="highlight">AI & Data Science Student</span> passionate about 
          Machine Learning, Deep Learning, and Generative AI — especially LLMs and NLP. 
          Currently building hands-on ML and LLM-based applications.
        </motion.p>

        <motion.div className="hero-cta" variants={itemVariants}>
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div className="hero-social" variants={itemVariants}>
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="social-link"
              whileHover={{ y: -5, color: 'var(--text-highlight)' }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="scroll-mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="scroll-wheel"></div>
        </motion.div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
