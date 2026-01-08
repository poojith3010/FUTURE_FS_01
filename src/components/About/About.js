import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiCalendar, FiMapPin } from 'react-icons/fi';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const technologies = [
    'Python',
    'TensorFlow & PyTorch',
    'Scikit-learn',
    'Deep Learning',
    'NLP & LLMs',
    'FastAPI',
    'SQL',
    'Git & VS Code',
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            <span className="section-number">01.</span>
            About Me
          </motion.h2>

          <div className="about-grid">
            <motion.div className="about-content" variants={itemVariants}>
              <p>
                Hello! I'm <span className="highlight">Poojith M</span>, an Artificial Intelligence 
                and Data Science student at <span className="highlight">Kumaraguru College of Technology</span>. 
                I have a strong passion for Machine Learning, Deep Learning, and Generative AI — 
                especially LLMs and NLP.
              </p>
              <p>
                I've built and deployed hands-on ML and LLM-based applications, including an 
                AI-powered chatbot prototype with document-aware access control. I'm continuously 
                improving and expanding my projects while gaining practical, real-world experience.
              </p>
              <p>
                Currently, I'm working on the <span className="highlight">IPTIF AGNI UG Fellowship</span> project — 
                developing a software framework for UAV conceptual design, integrating AI algorithms 
                to automate performance evaluation and design optimization.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>

              <ul className="tech-list">
                {technologies.map((tech, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="/resume.pdf"
                className="btn btn-primary download-btn"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div className="about-image" variants={itemVariants}>
              <div className="image-wrapper">
                <img 
                  src="/forge_id.jpg" 
                  alt="Poojith M" 
                  className="profile-photo"
                />
                <div className="image-border"></div>
              </div>
              
              <div className="about-info">
                <div className="info-item">
                  <FiMapPin className="info-icon" />
                  <span>Tamil Nadu, India</span>
                </div>
                <div className="info-item">
                  <FiCalendar className="info-icon" />
                  <span>B.Tech AI&DS (2023-2027) • CGPA: 8.56</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
