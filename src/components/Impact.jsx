import React from 'react';
import { motion } from 'framer-motion';
import './Impact.css';
import bg1 from "../assets/pexels-alejandro-barron-21404-96715.jpg"
import bg2 from "../assets/pexels-rohan-dewangan-2844320-9268303.jpg"

import bg5 from "../assets/pexels-binyaminmellish-169523.jpg"
import bg3 from "../assets/pexels-ganta-srinivas-2966633-4579680.jpg"

import bg4 from "../assets/pexels-thebioscopeguy-17504886.jpg"
//import { BackgroundImage } from 'framer/render/types/BackgroundImage.js';

const Impact = () => {
  const impacts = [
    {
      title: "Direct Support to Small Farmers",
      description: "Aims to boost farm income by offering affordable access to mechanisation and markets, while reducing debt dependency.",
      icon: "fas fa-hand-holding-heart",
      bg: bg1,
      color: "#4CAF50"
    },
    {
      title: "Maximize Yields, Minimize Efforts",
      description: "Farmers can increase productivity, optimize resource utilization, and save operating expenses by 20–30% with digital cluster farming.",
      icon: "fas fa-chart-line",
      bg: bg2,
      color: "#2196F3"
    },
    {
      title: "Empowering Farmers through better earnings",
      description: " Realization rises by 40% with increased crop season cultivation.",
      icon: "fas fa-money-bill-wave",
      bg: bg3,
      color: "#FF9800"
    }
   
  ];

  const impact2 = [
    {
      title: "Solving India's Agriculture Challenges",
      description: "Establishes a scalable solution by tackling the problems of fragmented landholdings and insufficient mechanization.",
      icon: "fas fa-tools",
      bg: bg4,
      color: "#8BC34A"
    },
    /*{
      title: "Large-Scale Reach and Growing Ecosystem",
      description: "With over 15,000 acres serviced and 12,000+ farmers engaged, Agrix has built a sustainable, scalable, and profitable model, with plans to reach 500,000 farmers across 6 states.",
      icon: "fas fa-globe-asia",
      color: "#9C27B0"
    },*/
    {
      title: "Tech-Driven Farming Solution",
      description: "Pioneering India’s path to agri 4.0 through Data-driven and farmer centric agricultural solutions.",
      icon: "fas fa-microchip",
      bg: bg5,
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
          <p>Helping farmers grow more, earn more, & live better.</p>
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
                style={{ image: impact.bg , backgroundSize:'cover'}}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 },
                  
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
          <motion.div className="impact-grid2">
              {impact2.map((impact,index)=>(
              <motion.div 
              key={index}
              className="impact-card"
              style={{ image: impact.bg , backgroundSize:'cover'}}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 },
                
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