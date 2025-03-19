import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Smart Irrigation',
      description: 'AI-powered irrigation systems that optimize water usage based on weather conditions and crop needs.',
      icon: 'fas fa-tint',
      color: '#4CAF50'
    },
    {
      title: 'Crop Monitoring',
      description: 'Real-time monitoring of crop health using advanced sensors and drone technology.',
      icon: 'fas fa-seedling',
      color: '#2196F3'
    },
    {
      title: 'Weather Analytics',
      description: 'Accurate weather predictions and climate analysis for better farming decisions.',
      icon: 'fas fa-cloud-sun',
      color: '#FF9800'
    },
    {
      title: 'Market Insights',
      description: 'Data-driven market analysis to help farmers make informed selling decisions.',
      icon: 'fas fa-chart-line',
      color: '#9C27B0'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="features">
      <div className="container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose Agrix?</h2>
          <p>Experience the future of farming with our innovative solutions</p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="feature-icon" style={{ backgroundColor: feature.color }}>
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 