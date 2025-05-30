import React from "react";
import { motion } from "framer-motion";
import { FaSeedling, FaCloudSun, FaBug, FaChartLine, FaWater, FaTractor, FaHandshake, FaTools,   FaGraduationCap, FaBalanceScale } from 'react-icons/fa';
import { GiWheat } from 'react-icons/gi';
import machineryRental from '../../assets/machinery-rental.jpg';
import agrixinputs from '../../assets/agrix-inputs.jpg';
import digitalFarm from '../../assets/digital-farm.jpg';
import marketLinkage from '../../assets/market-linkage.jpg';
import expertMentorship from '../../assets/expert-mentorship.jpg';
import servicesBg from '../../assets/services_bg.png';
import Farmerinteraction from '../../assets/Farmer-interaction.jpg';
import skillgrowth from '../../assets/skill-growth.jpeg';
import modernmachinery from '../../assets/modernmachinery.jpg';
import "./services.css";

const Servicess = () => {
  const scrollToSolutions = () => {
    const solutionsSection = document.querySelector('.smart-tech-section');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="services-page">
      <div className="services-container">
        <div className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${servicesBg})` }}>
          <div className="hero-contentt">
            <div className="hero-text">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Comprehensive Agritech Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Empowering farmers with end-to-end agricultural services
              </motion.p>
            </div>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <button className="primary-btn" onClick={scrollToSolutions}>Explore Services</button>
            </motion.div>
          </div>
        </div>

        <div className="ecosystem-section">
          <div className="ecosystem-visual">
            <div className="farmer-cycle">
              <div className="cycle-center">
                <motion.div
                  className="farmer-icon"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src="https://img.icons8.com/color/96/000000/farmer-male--v1.png" alt="Farmer" />
                  <span>FARMER</span>
                </motion.div>
              </div>
              <motion.div 
                className="cycle-items"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="cycle-item top">
                  <FaTractor />
                  <span>LAND PREPARATION</span>
                </div>
                <div className="cycle-item right">
                  <FaSeedling />
                  <span>AGRI-INPUTS</span>
                </div>
                <div className="cycle-item bottom">
                  <FaChartLine />
                  <span>FARM & CROP MANAGEMENT</span>
                </div>
                <div className="cycle-item left">
                  <FaHandshake />
                  <span>MARKET LINKAGES</span>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="ecosystem-text"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2>Agrix Farming Circle</h2>
            <p>Agrix empowers small and marginal farmers in India through a 360-degree service model, providing end-to-end support from land preparation to market linkage. By creating farming clusters, AgriX delivers bankable farm mechanization, quality agri-inputs, and digital plot mapping at affordable prices, enhancing efficiency, productivity, and market access for farmers. Through cluster modeling, we consolidate fragmented lands, enhancing efficiency and bargaining power while delivering tailored support to farmers from inputs to outputs.
            </p>
          </motion.div>
        </div>

        <div className="farmer-challenges-section">
          <motion.h2
            className="challenges-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Turning uncertainty into opportunity for small farmers with smart and sustainable support.

          </motion.h2>
          <div className="challenges-visual">
            <div className="challenges-cycle">
              <div className="challenges-center">
                <motion.div
                  className="wheat-icon"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <GiWheat />
                  <div className="center-text">
                    <h3>WHAT FARMERS</h3>
                    <h3>FACE TODAY?</h3>
                    
                  </div>
                </motion.div>
              </div>
              <motion.div 
                className="challenge-items"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="challenge-item top">
                  <FaSeedling />
                  <span>Poor Farm Mechanization</span>
                </div>
                <div className="challenge-item top-right">
                  <FaTools />
                  <span>Technology & Tracking Gap</span>
                </div>
                <div className="challenge-item right">
                  <FaCloudSun />
                  <span>Unorganised Agri-inputs Supply Chain</span>
                </div>
                <div className="challenge-item bottom-right">
                  <FaChartLine />
                  <span>Unreliable Off-take</span>
                </div>
                <div className="challenge-item bottom">
                  <FaWater />
                  <span>Lack of Insurance & Credits</span>
                </div>
                <div className="challenge-item bottom-left">
                  <FaGraduationCap />
                  <span>Limited Agri-Education</span>
                </div>
                <div className="challenge-item left">
                  <FaBug />
                  <span>Poor RoI (Return on Investment)</span>
                </div>
                <div className="challenge-item top-left">
                  <FaBalanceScale />
                  <span>Regulatory Challenges</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <section className="smart-tech-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Solutions
          </motion.h2>

          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Agrix empowers farmers not just to survive, but to thrive — with knowledge, tools, markets, and support at their fingertips.
          </motion.p>

          <div className="tech-items">
            <motion.div
              className="tech-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="tech-image">
                <img src={machineryRental} alt="Farm Machinery" />
              </div>
              <div className="tech-content">
                <h3>Efficient Machinery Rental</h3>
                <p>Access to modern farm equipment when needed. Our platform enables on-demand machinery booking through the Agrix App, providing efficient equipment management and scheduling. We ensure timely cultivation support while significantly reducing capital investment for farmers through our rental model.</p>
              </div>
            </motion.div>

            <motion.div
              className="tech-item reverse"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="tech-image">
                <img src={agrixinputs} alt="Quality Inputs" />
              </div>
              <div className="tech-content">
                <h3>Quality Agri-Inputs Supply</h3>
                <p>Premium agricultural inputs at competitive prices. We provide high-quality seeds and fertilizers through bulk procurement, making them accessible to farmers at competitive rates. Our easy booking system via the Agrix App ensures timely delivery directly to farm locations, streamlining the entire supply process.</p>
              </div>
            </motion.div>

            <motion.div
              className="tech-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="tech-image">
                <img src={digitalFarm} alt="Digital Solutions" />
              </div>
              <div className="tech-content">
                <h3>Digital Farm Management</h3>
                <p>Smart farming solutions powered by technology. Our platform provides real-time crop monitoring and analytics, enabling data-driven farming decisions. We offer comprehensive weather forecasting and alerts, along with digital record keeping and tracking to optimize farm operations and improve productivity.</p>
              </div>
            </motion.div>

            <motion.div
              className="tech-item reverse"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="tech-image">
                <img src={marketLinkage} alt="Market Access" />
              </div>
              <div className="tech-content">
                <h3>Strong Market Linkage</h3>
                <p>Direct access to markets and better prices. We facilitate direct connections between farmers and buyers, ensuring better price realization through a transparent trading process. Our system reduces dependency on intermediaries, creating a more efficient and profitable market ecosystem for farmers.</p>
              </div>
            </motion.div>

            <motion.div
              className="tech-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="tech-image">
                <img src={expertMentorship} alt="Expert Support" />
              </div>
              <div className="tech-content">
                <h3>Expert Mentorship Support</h3>
                <p>Dedicated guidance for farming success. We provide comprehensive on-ground support through KisanHit Centres, offering expert agricultural advice and regular farm visits. Our team conducts thorough monitoring and provides essential training and capacity building to ensure optimal farming practices and improved yields.</p>
              </div>
            </motion.div>
          </div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
             Agrix Solutions Harvest Real Farmer Success 
          </motion.h2>

          <div className="solutions-grid">
            <motion.div 
              className="solution-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="solution-icon">
                <img src={Farmerinteraction} alt="Community Support" />
              </div>
              <h3>Community Support & Confidence</h3>
              <p>At AgriX, we empower farmers with a year-round support system, through trusted local networks, expert advice, and strong peer connections.
              </p>
            </motion.div>

            <motion.div 
              className="solution-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="solution-icon">
                <img src={skillgrowth} alt="Skill Growth" />
              </div>
              <h3>Knowledge & Skill Growth</h3>
              <p>AgriX offers expert support for machinery management while empowering local youth through training that drives employment, skills, and regional agricultural growth</p>
            </motion.div>

            <motion.div 
              className="solution-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="solution-icon">
                <img src={modernmachinery} alt="Resource Tracking" />
              </div>
              <h3>Access to Modern  Machinery</h3>
              <p>Offering a range of advanced machinery like laser levellers, drones, reapers, and more which are suitable for seasonal and crop-specific needs. 
              </p>
            </motion.div>

            

            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Servicess; 