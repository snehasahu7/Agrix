import React from 'react';
import { motion } from 'framer-motion';
import './Impact.css';

const Impact = () => {
  const impacts = [
    {
      title: "Direct Upliftment of Small and Marginal Farmers",
      description: "Agrix empowers smallholder farmers by providing affordable access to mechanization, agri-inputs, and market linkages, thereby increasing farm income and reducing dependency on debt.",
      icon: "fas fa-hand-holding-heart",
      color: "#4CAF50"
    },
    {
      title: "Improved Farm Productivity and Efficiency",
      description: "Through cluster farming models and digitization of farm operations, Agrix has achieved 20-30% efficiency gains, enabling better yield, optimal resource use, and reduced operational costs for farmers.",
      icon: "fas fa-chart-line",
      color: "#2196F3"
    },
    {
      title: "Higher Farmer Incomes through Increased Realization",
      description: "Agrix's integrated services allow farmers to cultivate an additional crop season, leading to up to 40% higher realization and improved economic stability.",
      icon: "fas fa-money-bill-wave",
      color: "#FF9800"
    },
    {
      title: "Solving Structural Issues in Indian Agriculture",
      description: "Agrix addresses critical problems like fragmented landholdings, poor mechanization (<2%), and low farm efficiency, creating a scalable solution that directly impacts the bottom of the pyramid farmers.",
      icon: "fas fa-tools",
      color: "#8BC34A"
    },
    {
      title: "Large-Scale Reach and Growing Ecosystem",
      description: "With over 15,000 acres serviced and 12,000+ farmers engaged, Agrix has built a sustainable, scalable, and profitable model, with plans to reach 500,000 farmers across 6 states.",
      icon: "fas fa-globe-asia",
      color: "#9C27B0"
    },
    {
      title: "Building a Tech-Driven Future for Farming",
      description: "By leveraging real-time data, farm mapping, and digital platforms, Agrix is modernizing Indian agriculture, making it data-driven, efficient, and farmer-centric—paving the way for Agriculture 4.0.",
      icon: "fas fa-microchip",
      color: "#3F51B5"
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
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="impact">
      <div className="container">
        <motion.div 
          className="impact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Transforming Indian Agriculture</h2>
          <p>We empower farmers with end to end farming solutions that solve core challenges, improve efficiency, and enhace livelihood at scale.</p>
        </motion.div>

        <motion.div 
          className="impact-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="impact-grid"
          >
            {impacts.map((impact, index) => (
              <motion.div 
                key={index}
                className="impact-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="impact-icon" style={{ backgroundColor: impact.color }}>
                  <i className={impact.icon}></i>
                </div>
                <div className="impact-content">
                  <h3>{impact.title}</h3>
                  <p>{impact.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact; 