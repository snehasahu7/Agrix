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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact; 