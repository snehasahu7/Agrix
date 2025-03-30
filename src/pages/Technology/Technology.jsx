import React from "react";
import { motion } from "framer-motion";
import "./Technology.css";

const Technology = () => {
  return (
    <div className="technology-container">
      <section className="hero-section">
        <div className="hero-contentt">
          <div className="hero-text">
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>Empowering farmers with digital solutions for sustainable farming</motion.h1>
            
          </div>
          <div className="hero-buttons">
            <button className="primary-btn">Learn More</button>
            
          </div>
        </div>
      </section>
 {/* Features Section */}
      <section className="features-section">
        <div className="headerss"><p>Comprehensive Farm Management</p></div>
        
        <div className="features-grid">
          <motion.div 
          whileInView={{opacity:1, y:0}}
          initial={{y:100, opacity:0}}
          transition={{duratiion:1.5,delay:0,staggerChildren:0.8}}className="feature-item">
            <i className="fas fa-user-friends"></i>
            <h4>Farmer Management</h4>
            <p>Unique digital IDs and profiles for farmers with complete history tracking</p>
          </motion.div>
          <motion.div 
          whileInView={{opacity:1, y:0}}
          initial={{y:100, opacity:0}}
          transition={{duratiion:1.5,delay:0.2,staggerChildren:1}}className="feature-item">
            <i className="fas fa-map-marker-alt"></i>
            <h4>Resource Tracking</h4>
            <p>Real-time monitoring of machinery, implements, and agricultural inputs</p>
          </motion.div>
          <motion.div 
          whileInView={{opacity:1, y:0}}
          initial={{y:100, opacity:0}}
          transition={{duratiion:1.5,delay:0.4,staggerChildren:1.2}}className="feature-item">
            <i className="fas fa-chart-line"></i>
            <h4>Data Analytics</h4>
            <p>Advanced analytics for crop planning and yield optimization</p>
          </motion.div>
          <motion.div 
          whileInView={{opacity:1, y:0}}
          initial={{y:100, opacity:0}}
          transition={{duratiion:1.5,delay:0.6,staggerChildren:1.4}} className="feature-item">
            <i className="fas fa-leaf"></i>
            <h4>Sustainable Practices</h4>
            <p>Environment-friendly farming solutions and carbon footprint monitoring</p>
          </motion.div>
        </div>
      </section>


      <div className="technology-container">
      {/* Previous sections remain the same */}

      <section className="smart-tech-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Smart Farming Technologies
        </motion.h2>

        <div className="tech-items">
          {/* Drone Technology */}
          <motion.div 
            className="tech-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          
            <div className="tech-image">
              <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80" alt="Agricultural Drone" />
            </div>  
            <div className="tech-content">
              <h3>Agricultural Drones</h3>
              <p>Our advanced agricultural drones represent the cutting edge of precision farming technology. These autonomous aerial systems provide farmers with unprecedented insights into their fields through high-resolution imagery and real-time data collection. By leveraging multispectral imaging technology, our drones can detect early signs of crop stress, disease, and nutrient deficiencies before they become visible to the naked eye, enabling precise application of resources and maximizing crop yield while minimizing environmental impact.</p>
              
             
              
              
            </div>
          </motion.div>

          {/* IoT Sensors */}
          <motion.div 
            className="tech-item reverse"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <div className="tech-image">
          <img src="https://img.freepik.com/free-photo/close-up-man-using-tablet-field_23-2148233377.jpg?t=st=1743349335~exp=1743352935~hmac=45d227b7457f1e7ad95eb289b0457433c45a475132a1ae64643220113ba1c218&w=2000" 
      alt="IoT Sensors"  />
        </div>
        <div className="tech-content">
          <h3>IoT Sensors & Monitoring</h3>
          <p>Our comprehensive IoT sensor network transforms traditional farming into a data-driven science by continuously monitoring crucial environmental parameters including soil moisture, temperature, humidity, and nutrient levels. This sophisticated system provides farmers with real-time insights into their crops' growing conditions, enabling precise adjustments to farming practices and ensuring optimal growth throughout the season while preventing potential issues before they arise through advanced predictive analytics and machine learning algorithms.</p>

         

          
        </div>
      </motion.div>

      {/* Smart Irrigation */}
      <motion.div 
        className="tech-item"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

        <div className="tech-image">
          <img src="https://img.freepik.com/free-photo/drone-spraying-fertilizer-vegetable-green-plants-agriculture-technology-farm-automation_35913-2603.jpg?ga=GA1.1.1984253467.1743348869&semt=ais_hybrid"
      alt="Smart Irrigation"  />
      </div>
        <div className="tech-content">
          <h3>Smart Irrigation Systems</h3>
          <p>Our smart irrigation technology revolutionizes water management in agriculture through intelligent automation and precise control, utilizing real-time data from soil moisture sensors, weather forecasts, and crop water requirements. The system employs advanced machine learning algorithms to analyze conditions and create highly efficient irrigation schedules, ensuring crops receive exactly the right amount of water at the right time while enabling remote monitoring and control through our mobile application, ultimately leading to significant water conservation and improved crop yields.</p>

          
        
        </div>
      </motion.div>
    </div>
  </section>
</div>



<section className="satellite-section">
  <motion.div
    className="section-header"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <h2 className="section-title">Precision Mapping</h2>
  </motion.div>

  <motion.div 
    className="satellite-content"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <div className="satellite-image">
      <img src="." alt="Satellite Mapping" />
    </div>
    <p> Agrix precisely tracks and monitors land cultivation progress across fields where our agricultural vehicles operate. This real-time mapping system provides detailed insights into cultivated areas, helping farmers monitor implementation efficiency and coverage. By analyzing satellite data, we can accurately measure the total land cultivated by Agrix machinery, ensure optimal vehicle utilization, and verify that farming operations are executed according to plan, ultimately maximizing productivity and resource management.</p>
  </motion.div>
</section>


  
    

     



{/* Mobile Apps Section */}
<section className="mobile-apps-section">
  <motion.h2
    className="section-title"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    Agrix App Ecosystem
  </motion.h2>

  {/* <div className="mobile-apps-container"> 
    {/* Farmer App 
    <motion.div 
      className="mobile-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="phone-frame">
        <div className="phone-header">
          <div className="phone-notch"></div>
        </div>
        <div className="app-content">
          <div className="app-icon">
            <i className="fas fa-user-farmer"></i>
          </div>
          <h3>Farmer App</h3>
          <p>Complete farm management in your pocket</p>
          <div className="app-features">
            <div className="feature">
              <i className="fas fa-chart-line"></i>
              <span>Crop Monitoring</span>
            </div>
            <div className="feature">
              <i className="fas fa-cloud-sun"></i>
              <span>Weather Updates</span>
            </div>
            <div className="feature">
              <i className="fas fa-tasks"></i>
              <span>Task Management</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Field Monitor App 
    <motion.div 
      className="mobile-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="phone-frame">
        <div className="phone-header">
          <div className="phone-notch"></div>
        </div>
        <div className="app-content">
          <div className="app-icon">
            <i className="fas fa-map-marked-alt"></i>
          </div>
          <h3>Field Monitor</h3>
          <p>Real-time field insights and analytics</p>
          <div className="app-features">
            <div className="feature">
              <i className="fas fa-seedling"></i>
              <span>Crop Health</span>
            </div>
            <div className="feature">
              <i className="fas fa-tint"></i>
              <span>Irrigation Control</span>
            </div>
            <div className="feature">
              <i className="fas fa-bug"></i>
              <span>Pest Alerts</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Market Connect App 
    <motion.div 
      className="mobile-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <div className="phone-frame">
        <div className="phone-header">
          <div className="phone-notch"></div>
        </div>
        <div className="app-content">
          <div className="app-icon">
            <i className="fas fa-store"></i>
          </div>
          <h3>Market Connect</h3>
          <p>Direct access to agricultural marketplace</p>
          <div className="app-features">
            <div className="feature">
              <i className="fas fa-shopping-cart"></i>
              <span>Buy/Sell Produce</span>
            </div>
            <div className="feature">
              <i className="fas fa-chart-bar"></i>
              <span>Price Analytics</span>
            </div>
            <div className="feature">
              <i className="fas fa-truck"></i>
              <span>Logistics</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>*/}
</section>

      {/* Impact Section */}
      <section className="impact-section">
        <h2>Our Impact</h2>
        <div className="impact-stats">
          <div className="stat-card">
          <h3>40%</h3>
          <p>Efficiency Gains</p>
          </div>
          <div className="stat-card">
          <h3>12,000+</h3>
          <p>Farmers Empowered</p>
          </div>
          <div className="stat-card">
            <h3>10+</h3>
            <p>Cluster Networks</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">

        
      </section>
    </div>
  );
};

export default Technology;