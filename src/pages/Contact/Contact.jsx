import { React, useEffect, useState }from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF,  FaInstagram, FaYoutube, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import delhiMap from '../../assets/delhi-map.png';
import patnaMap from '../../assets/patna-map.png';
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {

  const [form, setform] = useState({name:"",email:"",subject:"",message:""});
  const handleChange = (e) =>{
    setform({...form, [e.target.name]:e.target.value});
  }
  /*const handleSubmit = async (e) =>{
    e.preventDefault();
    
      const res = await fetch('http://localhost:5000/send',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(form),
      });
      const data = await res.json();
      alert(data.message);
      setform({ name: "", email: "", subject: "", message: "" });
    
   
  }*/
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        const toastId = toast.loading("Sending message...");
        try {
            const res = await fetch('https://agrix-1.onrender.com/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
    
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await res.json();
            toast.update(toastId, {
                render: "Message sent successfully!",
                type: "success",
                isLoading: false,
                autoClose: 3000
            });
           e.target.reset(); 
            setform({ name: "", email: "", subject: "", message: "" });

             
        } catch (error) {
            toast.update(toastId, {
                render: "Error : " + error.message,
                type: "error",
                isLoading: false,
                autoClose: 3000
            });
        }
      };
      
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
    <>
      <ToastContainer position="top-center" autoClose={3000} />
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
              <form onSubmit={handleSubmit}>
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    required 
                  />
                </motion.div>
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    required 
                  />
                </motion.div>
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Enter subject" 
                    required 
                  />
                </motion.div>
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Enter your message" 
                    required
                  ></textarea>
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
                    <a href="https://www.google.com/maps/dir//Maple+Capital+Advisors,+2nd+Floor,+No.3,+Commercial+Complex,+Panchsheel+Park,+August+Kranti+Marg,+New+Delhi+-+110017,+Panchsheel+Park+North,+Panchsheel+Park,+New+Delhi,+Delhi+110049/@28.5477001,77.2109083,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce2115b08e17b:0x55a0374b467b05e1!2m2!1d77.2109083!2d28.5477001?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="directions">Directions</a>
                    <a href="https://www.google.com/maps/place/Maple+Capital+Advisors/@28.5477001,77.2083334,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce2115b08e17b:0x55a0374b467b05e1!8m2!3d28.5477001!4d77.2109083!16s%2Fg%2F11b6bkhngg?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="view-map">View larger map</a>
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
                    <a href="https://www.google.com/maps/dir//L1,+Agrix,+24,+Boring+Rd,+near+Children+Park,+Sri+Krishna+Puri,+Patna,+Bihar+800001/@25.6154394,85.1104604,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39ed592337103a29:0x3c7bb0561bff452b!2m2!1d85.1130707!2d25.6154649?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="directions">Directions</a>
                    <a href="https://www.google.com/maps/place/Agrix/@25.6154394,85.1104604,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed592337103a29:0x3c7bb0561bff452b!8m2!3d25.6154394!4d85.1130353!16s%2Fg%2F11s7jts72k?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="view-map">View larger map</a>
                  </div>
                </div>
                <div className="map-image">
                  <img src={patnaMap} alt="Map showing Agrix Agrotech Pvt. Ltd. location " />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;