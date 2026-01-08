import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward, FiBriefcase } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const education = [
    {
      degree: 'B.Tech Artificial Intelligence and Data Science',
      institution: 'Kumaraguru College of Technology',
      year: '2023 - 2027',
      grade: 'CGPA: 8.56',
    },
    {
      degree: '12th Standard',
      institution: 'AVB Matric Higher Secondary School',
      year: '2023',
      grade: '93.8%',
    },
    {
      degree: '10th Standard',
      institution: 'AVB Matric Higher Secondary School',
      year: '2021',
      grade: '100%',
    },
  ];

  const certifications = [
    'Introduction to Data Engineering (Coursera)',
    'Cybersecurity (Coursera)',
    'Introduction to Deep Learning (Coursera)',
    'Power BI (Coursera)',
    'Introduction to Networking (Coursera)',
    'Web Development (Coursera)',
    'Intel AI (Coursera)',
    'Prompt Engineering (Coursera)',
    'Intro to AI Engineer (Coursera)',
  ];

  const research = {
    title: 'IPTIF AGNI UG Fellowship',
    status: 'Ongoing',
    project: 'Development of an Integrated Code for Conceptual Design of UAVs',
    description: 'Working on a software framework for UAV conceptual design, integrating AI algorithms to automate performance evaluation, assist in design optimization, and improve overall prediction accuracy.',
  };

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
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            <span className="section-number">03.</span>
            Education & Experience
          </motion.h2>

          <div className="experience-grid">
            {/* Education */}
            <motion.div className="experience-column" variants={itemVariants}>
              <div className="column-header">
                <FiBook className="column-icon" />
                <h3>Education</h3>
              </div>
              <div className="timeline">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>{edu.degree}</h4>
                      <p className="institution">{edu.institution}</p>
                      <div className="timeline-meta">
                        <span className="year">{edu.year}</span>
                        <span className="grade">{edu.grade}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Research */}
            <motion.div className="experience-column" variants={itemVariants}>
              <div className="column-header">
                <FiBriefcase className="column-icon" />
                <h3>Research</h3>
              </div>
              <div className="research-card card">
                <div className="research-header">
                  <h4>{research.title}</h4>
                  <span className="status-badge">{research.status}</span>
                </div>
                <p className="research-project">{research.project}</p>
                <p className="research-description">{research.description}</p>
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div className="certifications-section" variants={itemVariants}>
            <div className="column-header centered">
              <FiAward className="column-icon" />
              <h3>Certifications</h3>
            </div>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <FiAward className="cert-icon" />
                  <span>{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
