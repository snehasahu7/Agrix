import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import maizecrop from "../../assets/maize_crop.jpg";
import sugarcane from "../../assets/sugarcane.jpg";
import wheat from "../../assets/wheat.jpeg";
import rice from "../../assets/rice.webp";
import "./Resources.css";

const Resources = () => {
const navigate = useNavigate();
  const caseStudies = [
    {
      title: "Rice Cultivation Success Story",
      image: rice,
      description: "How modern farming techniques improved rice yields by 40% in Punjab",
      category: "Rice",
      readTime: "8 min read"
    },
    {
      title: "Wheat Production Breakthrough",
      image: wheat,
      description: "Sustainable wheat farming practices that doubled farmer income",
      category: "Wheat",
      readTime: "10 min read"
    },
    {
      title: "Maize Farming Innovation",
      image: maizecrop,
      description: "Smart irrigation systems revolutionize maize cultivation",
      category: "Maize",
      readTime: "7 min read"
    },
    {
      title: "Sugarcane Tech Integration",
      image: sugarcane,
      description: "Digital monitoring transforms sugarcane farming efficiency",
      category: "Sugarcane",
      readTime: "9 min read"
    }
  ];

  const contributions = [
    {
      title: "Farm Mechanization",
      icon: "🚜",
      description: "Providing access to modern farming equipment through our rental platform"
    },
    {
      title: "Digital Agriculture",
      icon: "📱",
      description: "Implementing smart technology solutions for precision farming"
    },
    {
      title: "Market Access",
      icon: "🏪",
      description: "Creating direct farmer-to-market connections for better prices"
    },
    {
      title: "Knowledge Sharing",
      icon: "📚",
      description: "Building a community of informed and skilled agricultural practitioners"
    }
  ];

  return (
    <div className="resourcess-page">
      <section className="reshero-section">
        <div className="reshero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Agricultural Knowledge Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore case studies, research, and innovations in modern farming
          </motion.p>
        </div>
      </section>

      <section className="blogs-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Crop Case Studies
          </motion.h2>
          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <motion.div
                className="case-study-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="case-study-image">
                  <img src={study.image} alt={study.title} />
                  <div className="category-tag">{study.category}</div>
                </div>
                <div className="case-study-content">
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <div className="case-study-meta">
                    <span className="resread-time">{study.readTime}</span>
                    <button className="resread-more">Read More</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="contributions-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Agrix Contributions
          </motion.h2>
          <div className="contributions-grid">
            {contributions.map((contribution, index) => (
              <motion.div
                className="contribution-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="contribution-icon">{contribution.icon}</div>
                <h3>{contribution.title}</h3>
                <p>{contribution.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
    className="contact-us-button"
    onClick={() => navigate("/contact")}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
>
    
        Contact Us

</motion.button>
        </div>
      </section>
    </div>
  );
};

export default Resources;

