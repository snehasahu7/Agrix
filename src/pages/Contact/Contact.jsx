import { React, useEffect }from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF,  FaInstagram, FaYoutube, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import delhiMap from '../../assets/delhi-map.png';
import patnaMap from '../../assets/patna-map.png';
import { useLocation } from "react-router-dom";



const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
const location = useLocation();
useEffect(() => {
  if (location.hash === "#dropamessage") {
    const el = document.getElementById("dropamessage");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

  return (
    <motion.section 
      className="contact-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          variants={headerVariants}
        >
          <h1>We are here to help! Stay Connected</h1>
          <h2>Reach Us Through</h2>
        </motion.div>
        
        <div className="contact-content">
          <motion.div 
            className="office-locations"
            variants={containerVariants}
          >
            {/* Patna Office */}
            <motion.div 
              className="office-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
              }}
            >
              <h4>Patna Office</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i><FaMapMarkerAlt /></i>
                  <p>
                    Agrix Agrotech Private Limited,<br />
                    L1/24, First Floor, Sri Krishna Puri,<br />
                    Boring Road (Opposite Children Park)<br />
                    Patna, Bihar - 800001
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Delhi Office */}
            <motion.div 
              className="office-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
              }}
            >
              <h4>Delhi Office</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i><FaMapMarkerAlt /></i>
                  <p>
                    Maple Capital Advisors Pvt. Ltd.<br />
                    2nd Floor, No.3, Commercial Complex<br />
                    Panchsheel Park, August Kranti Marg<br />
                    New Delhi - 110017
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div 
              className="office-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
              }}
            >
              <h4>Contact Details</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i><FaPhone /></i>
                  <p>+91 6123504327</p>
                </div>
                <div className="contact-item">
                  <i><FaEnvelope /></i>
                  <p>operations@agrixagro.com</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Networks Section */}
          <motion.div 
            className="social-networks"
            variants={containerVariants}
          >
            <h3>SOCIAL NETWORKS</h3>
            <motion.div 
              className="social-icons"
              variants={containerVariants}
            >
              <motion.div 
                className="social-icon-wrapper"
                variants={itemVariants}
              >
                <motion.a 
                  href="https://www.facebook.com/AgrixIndia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaFacebookF />
                  <span>Facebook</span>
                </motion.a>
              </motion.div>

              <motion.div 
                className="social-icon-wrapper"
                variants={itemVariants}
              >
                <motion.a 
                  href="https://x.com/AgrixIndia/with_replies" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaXTwitter  />
                  <span>Twitter</span>
                </motion.a>
              </motion.div>

              <motion.div 
                className="social-icon-wrapper"
                variants={itemVariants}
              >
                <motion.a 
                  href="https://www.instagram.com/agrixindia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </motion.a>
              </motion.div>

              <motion.div 
                className="social-icon-wrapper"
                variants={itemVariants}
              >
                <motion.a 
                  href="https://www.youtube.com/@agrixindia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaYoutube />
                  <span>YouTube</span>
                </motion.a>
              </motion.div>

              <motion.div 
                className="social-icon-wrapper"
                variants={itemVariants}
              >
                <motion.a 
                  href="http://in.linkedin.com/company/agrixagrotech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </motion.a>
              </motion.div>

              <motion.div 
                className="social-icon-wrapper"
                variants={itemVariants}
              >
                <motion.a 
                  href="https://in.pinterest.com/agrixagro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaPinterest />
                  <span>Pinterest</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Message Section */}
        <motion.div 
          className="message-section"
          variants={containerVariants}
          id="dropamessage"
        >
          <motion.h3 variants={itemVariants}>LEAVE US A MESSAGE</motion.h3>
          <motion.p 
            className="message-subtitle"
            variants={itemVariants}
          >
            WE'D LOVE TO HEAR FROM YOU 
          </motion.p>
          <motion.div 
            className="contact-form"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 15px 35px rgba(0,0,0,0.1)"
            }}
          >
            <form>
              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
              </motion.div>
              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </motion.div>
              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Enter subject" required />
              </motion.div>
              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
              </motion.div>
              <motion.button 
                type="submit" 
                className="submit-button"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(0, 184, 153, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Maps Section */}
        <motion.div 
          className="maps-section"
          variants={containerVariants}
        >
          <div className="maps-container">
            <div className="map-card">
              <div className="map-info">
                <h4>Maple Capital Advisors</h4>
                <div className="rating">
                  <span className="rating-score">5.0</span>
                  <span className="rating-stars">★★★★★</span>
                  <span className="review-count">7 reviews</span>
                </div>
                <div className="map-links">
                  <a href="https://www.google.com/maps/dir//Maple+Capital+Advisors/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce3c59105a285:0x85a7c8568bfac6d9!2m2!1d77.2198543!2d28.5352659" target="_blank" rel="noopener noreferrer" className="directions">Directions</a>
                  <a href="https://www.google.com/maps/place/Maple+Capital+Advisors/@28.5352659,77.2198543,17z" target="_blank" rel="noopener noreferrer" className="view-map">View larger map</a>
                </div>
              </div>
              <div className="map-image">
                <img src={delhiMap} alt="Map showing Maple Capital Advisors location" />
              </div>
            </div>

            <div className="map-card">
              <div className="map-info">
                <h4>Agrix Agrotech Private Limited</h4>
                <div className="rating">
                  <span className="rating-score">4.7</span>
                  <span className="rating-stars">★★★★☆</span>
                  <span className="review-count">7 reviews</span>
                </div>
                <div className="map-links">
                  <a href="https://www.google.com/maps/dir//L1,+Agrix,+24,+Boring+Rd,+near+Children+Park,+Sri+Krishna+Puri,+Patna,+Bihar+800001/@25.6154839,85.1130465,20.58z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39ed592337103a29:0x3c7bb0561bff452b!2m2!1d85.1130707!2d25.6154649?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="directions">Directions</a>
                  <a href="https://www.google.com/maps/place/Agrix/@25.615493,85.1129926,19.9z/data=!4m16!1m9!3m8!1s0x39ed592337103a29:0x3c7bb0561bff452b!2sAgrix!8m2!3d25.6154394!4d85.1130353!9m1!1b1!16s%2Fg%2F11s7jts72k!3m5!1s0x39ed592337103a29:0x3c7bb0561bff452b!8m2!3d25.6154394!4d85.1130353!16s%2Fg%2F11s7jts72k?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="view-map">View larger map</a>
                </div>
              </div>
              <div className="map-image">
                <img src={patnaMap} alt="Map showing Agrix Patna Office location" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact; 