import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiServer, 
  FiDatabase, 
  FiTool, 
  FiCpu,
  FiCode,
  FiMonitor
} from 'react-icons/fi';
import { 
  SiPython, 
  SiTensorflow, 
  SiPytorch,
  SiScikitlearn,
  SiMysql,
  SiGit,
  SiFastapi,
  SiHtml5,
  SiJupyter
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: <FiCpu />,
      skills: [
        { name: 'Python', icon: <SiPython />, level: 90 },
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 80 },
        { name: 'PyTorch', icon: <SiPytorch />, level: 75 },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 85 },
      ],
    },
    {
      title: 'Programming',
      icon: <FiServer />,
      skills: [
        { name: 'Java', icon: <FiCode />, level: 75 },
        { name: 'HTML', icon: <SiHtml5 />, level: 80 },
        { name: 'FastAPI', icon: <SiFastapi />, level: 70 },
      ],
    },
    {
      title: 'Database',
      icon: <FiDatabase />,
      skills: [
        { name: 'SQL', icon: <SiMysql />, level: 70 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: <FiTool />,
      skills: [
        { name: 'Git', icon: <SiGit />, level: 85 },
        { name: 'VS Code', icon: <FiMonitor />, level: 90 },
        { name: 'Jupyter', icon: <SiJupyter />, level: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            <span className="section-number">02.</span>
            Skills & Technologies
          </motion.h2>

          <div className="skills-grid">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="skill-category card"
                variants={itemVariants}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div className="additional-skills" variants={itemVariants}>
            <h3>Other Technologies & Skills</h3>
            <div className="skill-tags">
              {[
                'Deep Learning', 'Neural Networks', 'NLP', 'LLMs', 'Generative AI',
                'Model Training', 'Data Analysis', 'Fusion 360', 'Problem Solving',
                'Self-Directed Learning', 'Attention to Detail', 'Adaptability'
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  className="skill-tag"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
