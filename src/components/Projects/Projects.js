import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Featured Projects - Poojith's actual projects
  const featuredProjects = [
    {
      title: 'AI-Powered HR & IT Chatbot',
      description:
        'An AI-powered intelligent chatbot system designed for public sector organizations, enabling employees to get instant answers to HR, IT, and policy-related queries. Features unique document-aware access control—users must upload the correct document to access sensitive content.',
      image: '/project-chatbot.png',
      tech: ['Python', 'LLM', 'NLP', 'FastAPI'],
      github: 'https://github.com/poojith3010',
      live: '#',
      category: 'ai',
    },
    {
      title: 'Blood Bank Management System',
      description:
        'A comprehensive platform designed to streamline blood donation and distribution processes. Connects Donors, Hospitals, and Blood Banks through an intuitive web interface with real-time notifications, inventory management, and AI-powered assistance.',
      image: '/project-bloodbank.png',
      tech: ['Python', 'SQL', 'FastAPI', 'AI'],
      github: 'https://github.com/poojith3010',
      live: '#',
      category: 'fullstack',
    },
    {
      title: 'FarmPulse - Smart Agriculture',
      description:
        'An AI-driven smart agriculture ecosystem designed to automate farm monitoring and decision-making. Tracks real-time soil health (NPK, moisture) and weather conditions, manages field devices via cellular networks, and utilizes AI analytics for predictive crop insights.',
      image: '/project-farmpulse.png',
      tech: ['Python', 'IoT', 'Machine Learning', 'AI'],
      github: 'https://github.com/poojith3010',
      live: '#',
      category: 'ai',
    },
  ];

  // Other Notable Projects
  const otherProjects = [
    {
      title: 'Tech Talk Tracker',
      description: 'A system to manage and track tech talks, seminars, or academic sessions. Register events, store speaker info, and keep logs.',
      tech: ['Python', 'SQL', 'FastAPI'],
      github: 'https://github.com/poojith3010',
      live: '#',
      category: 'fullstack',
    },
    {
      title: 'UAV Design Framework',
      description: 'IPTIF AGNI Fellowship project: Software framework for UAV conceptual design with AI algorithms for performance evaluation and design optimization.',
      tech: ['Python', 'AI', 'Fusion 360'],
      github: 'https://github.com/poojith3010',
      live: '#',
      category: 'ai',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React.js featuring smooth animations and dark/light mode.',
      tech: ['React.js', 'Framer Motion', 'CSS3'],
      github: 'https://github.com/poojith3010',
      live: '#',
      category: 'frontend',
    },
  ];

  const filters = ['all', 'ai', 'fullstack', 'frontend'];

  const filteredOtherProjects = otherProjects.filter(
    (project) => filter === 'all' || project.category === filter
  );

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
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            <span className="section-number">04.</span>
            Things I've Built
          </motion.h2>

          {/* Featured Projects */}
          <div className="featured-projects">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className={`featured-project ${index % 2 !== 0 ? 'reverse' : ''}`}
                variants={itemVariants}
              >
                <div className="project-image">
                  <div className="image-overlay"></div>
                  <div className="image-placeholder">
                    <FiFolder size={50} />
                    <span>{project.title}</span>
                  </div>
                </div>
                <div className="project-content">
                  <p className="project-overline">Featured Project</p>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-description">
                    <p>{project.description}</p>
                  </div>
                  <ul className="project-tech">
                    {project.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Site"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div className="other-projects-section" variants={itemVariants}>
            <h3 className="other-projects-title">Other Noteworthy Projects</h3>
            
            {/* Filter Buttons */}
            <div className="project-filters">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`filter-btn ${filter === f ? 'active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>

            <motion.div className="other-projects-grid" layout>
              <AnimatePresence>
                {filteredOtherProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="project-card card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <div className="card-header">
                      <FiFolder className="folder-icon" />
                      <div className="card-links">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiGithub />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                    <h4 className="card-title">{project.title}</h4>
                    <p className="card-description">{project.description}</p>
                    <ul className="card-tech">
                      {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
