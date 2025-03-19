import React from 'react';
import { motion } from 'framer-motion';
import './Philosophy.css';

const Philosophy = () => {
  const philosophies = [
    {
      title: 'Mission',
      description: 'To revolutionize agriculture through sustainable practices and innovative technology, ensuring food security for future generations.',
      icon: 'fas fa-bullseye',
      color: '#4CAF50'
    },
    {
      title: 'Vision',
      description: 'To be the global leader in sustainable agriculture, setting new standards for environmental stewardship and agricultural innovation.',
      icon: 'fas fa-eye',
      color: '#FFC107'
    },
    {
      title: 'Technology',
      description: 'Leveraging cutting-edge solutions including AI, IoT, and precision farming to optimize agricultural operations and maximize yields.',
      icon: 'fas fa-microchip',
      color: '#2196F3'
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
    <section className="philosophy">
      <div className="container">
        <motion.div
          className="philosophy-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Philosophy</h2>
          <p>Building a sustainable future through innovative farming solutions</p>
        </motion.div>

        <motion.div
          className="philosophy-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {philosophies.map((philosophy, index) => (
            <motion.div
              key={index}
              className="philosophy-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="philosophy-icon" style={{ backgroundColor: philosophy.color }}>
                <i className={philosophy.icon}></i>
              </div>
              <h3>{philosophy.title}</h3>
              <p>{philosophy.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy; 