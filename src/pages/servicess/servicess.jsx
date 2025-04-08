import React from "react";
import { motion } from "framer-motion";
import { FaSeedling, FaCloudSun, FaBug, FaFlask, FaChartLine, FaWater, FaTractor, FaMobileAlt, FaHandshake, FaMoneyBillWave, FaTools, FaWarehouse, FaCloudRain, FaGraduationCap, FaBalanceScale, FaDatabase, FaUsers, FaGlobeAmericas, FaMapMarkerAlt, FaLeaf } from 'react-icons/fa';
import { GiWheat } from 'react-icons/gi';
import agrixService from '../../assets/agrix-service.png';
import agrixOffering from '../../assets/agrix-offering.png';
import probsolAgri from '../../assets/probsol-agri.png';
import machineryRental from '../../assets/machinery-rental.jpg';
import agrixinputs from '../../assets/agrix-inputs.jpg';
import digitalFarm from '../../assets/digital-farm.jpg';
import marketLinkage from '../../assets/market-linkage.jpg';
import expertMentorship from '../../assets/expert-mentorship.jpg';
import servicesBg from '../../assets/services_bg.png';
import "./servicess.css";

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
                  <span>LAND PREPERATION</span>
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
            <p>Agrix engages directly with farmers in India, providing a 360-degree service from land preparation to market linkage. This includes inputs, machinery, and digitizing processes to optimize operations and data collection.
            Agrix creates farming clusters to ensure bankable farm mechanization, quality agri-inputs, digital plot mapping and efficient market linkage to small and marginal farmers at affordable pricing.It focuses on small farmers and uses cluster modeling to consolidate fragmented lands. This improves efficiency and bargaining power while providing tailored support to farmers from inputs to outputs.</p>
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
            Farmers need more than hope — they need smart, sustainable support.
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
                    <h2>WHAT</h2>
                    <h2>FARMERS</h2>
                    <h2>FACE</h2>
                    <h2>TODAY?</h2>
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
            Where Our Solutions Meet Their Success
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
                <img src="https://img.icons8.com/color/96/000000/farmer-male--v1.png" alt="Farmer Management" />
              </div>
              <h3>Community Support & Confidence</h3>
              <p>Agrix connects farmers with local networks, expert advisors, and peer groups, creating a support system that boosts morale and trust.</p>
            </motion.div>

            <motion.div 
              className="solution-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="solution-icon">
                <img src="https://img.icons8.com/color/96/000000/tractor.png" alt="Resource Tracking" />
              </div>
              <h3>Access to Modern  Machinery</h3>
              <p>Farmers can easily access a wide range of modern machinery, from tractors to harvesters, tailored to their seasonal and crop-specific needs.</p>
            </motion.div>

            <motion.div 
              className="solution-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="solution-icon">
                <img src="https://img.icons8.com/color/96/000000/statistics.png" alt="Data Analytics" />
              </div>
              <h3>Knowledge & Skill Growth</h3>
              <p>Continuous updates, training modules, and expert support help farmers adopt modern methods and sustainable practices confidently.</p>
            </motion.div>

            <motion.div 
              className="solution-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="solution-icon">
                <img src="https://img.icons8.com/color/96/000000/natural-food.png" alt="Sustainable Practices" />
              </div>
              <h3>Access to High-Quality Agri Inputs</h3>
              <p>Certified seeds, fertilizers, and pesticides are available through the platform.Ensures better crop performance, reduced risks, and trust in input quality.</p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Servicess; 