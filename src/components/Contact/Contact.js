import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiSend, 
  FiGithub, 
  FiLinkedin 
} from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission - Replace with actual API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
    
    // Example API call (uncomment and modify when you have a backend):
    /*
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
    */
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'mpoojith456@gmail.com',
      href: 'mailto:mpoojith456@gmail.com',
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: '#',
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '+91 8098939125',
      href: 'tel:+918098939125',
    },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/poojith3010', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/poojith-m-9a27752b8', label: 'LinkedIn' },
  ];

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

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            <span className="section-number">05.</span>
            Get In Touch
          </motion.h2>

          <div className="contact-wrapper">
            {/* Contact Info */}
            <motion.div className="contact-info" variants={itemVariants}>
              <h3 className="contact-subtitle">Let's Connect</h3>
              <p className="contact-text">
                I'm currently looking for new opportunities. Whether you have a 
                question, want to collaborate on a project, or just want to say hi, 
                I'll try my best to get back to you!
              </p>

              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="contact-item"
                  >
                    <span className="contact-icon">{info.icon}</span>
                    <div>
                      <span className="contact-label">{info.label}</span>
                      <span className="contact-value">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="contact-social">
                <span>Find me on:</span>
                <div className="social-links">
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
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              variants={itemVariants}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>
              
              {status === 'success' && (
                <motion.p
                  className="form-status success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  className="form-status error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Oops! Something went wrong. Please try again.
                </motion.p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
