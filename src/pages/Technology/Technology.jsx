import {React, useEffect} from "react";
import { motion } from "framer-motion";
import AgrixPlots from "../../assets/Agrix Plots (1).jpg";
import tracking from "../../assets/Tracking-1.jpg"
import { useLocation, Link} from "react-router-dom";
import app1 from "../../assets/App-1 (1).png";
import app2 from "../../assets/App-2 (1).png";
import app3 from "../../assets/App-3 (1).png";
import datapool from "../../assets/data-pool.png"
import img1 from "../../assets/Running Summary (1).jpg"
import img2 from "../../assets/Tracking (3).jpg"
import img3 from "../../assets/data analytics.jpeg"
import drone from "../../assets/drone.png"
import strawreaper from "../../assets/straw reaper.png"
import laserleveller from "../../assets/laser leveller.jpg"
import harvester from "../../assets/Harvester_with logo_png.png"
import "./Technology.css";

const Technology = () => {
   const farmimage = [
    {
      img: img1
    },
    {
      img: img2
    },
    {
      img: img3
    }
   ]
   const location = useLocation();
   useEffect(() => {
     if (location.hash === "#learnmore") {
       const el = document.getElementById("learnmore");
       if (el) {
         el.scrollIntoView({ behavior: "smooth" });
       }
     }
   }, [location]);



  return (
    <div className="technology-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>Empowering farmers with digital solutions for sustainable farming</motion.h1>
            
          </div>
          <div className="hero-buttons">
            <Link to="/tech#learnmore" className="primary-btn">Learn More</Link>
            
          </div>
        </div>
      </section>
<section className="mobile-apps-section">
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Agrix App Ecosystem
      </motion.h2>
      <motion.p 
        className="section-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Agrix App ecosystem aims to profile the clusters and digitize farming plots within the cluster. Our mobile application suite streamlines agricultural operations with seamless connectivity, real-time tracking, and efficient marketplace solutions.
      </motion.p>
    </motion.div>

    <div className="mobile-apps-container">
      {/* Driver App */}
      <motion.div 
        className="mobile-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div 
          className="phone-frame"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="phone-header">
            <div className="phone-notch"></div>
          </div>
          <img src={app1} alt="" className="app" />
          {/*<motion.div 
            className="app-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div 
              className="app-icon"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className="fas fa-truck"></i>
            </motion.div>
            <h3>Agrix Driver App</h3>
            <p>Machine and driver management system</p>
            <div className="app-features">
              <motion.div 
                className="feature"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-id-card"></i>
                <span>Machine ID</span>
              </motion.div>
              <motion.div 
                className="feature"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-layer-group"></i>
                <span>Cluster ID</span>
              </motion.div>
              <motion.div 
                className="feature"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-tools"></i>
                <span>Attachment ID</span>
              </motion.div>
              <motion.div 
                className="feature"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-user"></i>
                <span>Driver ID</span>
              </motion.div>
            </div>
          </motion.div>*/}
        </motion.div>
      </motion.div>

      {/* Implement Tracking App */}
      <motion.div 
        className="mobile-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div 
          className="phone-frame"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="phone-header">
            <div className="phone-notch"></div>
          </div>
          <img src={app2} alt="" className="app" />
          {/*<motion.div 
            className="app-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div 
              className="app-icon"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className="fas fa-map-marked-alt"></i>
            </motion.div>
            <h3>Implement Tracking</h3>
            <p>Real-time machine tracking and monitoring</p>
            <div className="app-features">
              <motion.div 
                className="feature"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-location-arrow"></i>
                <span>Live Tracking</span>
              </motion.div>
              <motion.div 
                className="feature"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-map"></i>
                <span>Cluster Mapping</span>
              </motion.div>
              <motion.div 
                className="feature"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-clock"></i>
                <span>Real-time Updates</span>
              </motion.div>
              <motion.div 
                className="feature"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-route"></i>
                <span>Route History</span>
              </motion.div>
            </div>
          </motion.div>*/}
        </motion.div>
      </motion.div>

      {/* Market Place App */}
      <motion.div 
        className="mobile-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.div 
          className="phone-frame"
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="phone-header">
            <div className="phone-notch"></div>
          </div>
          <img src={app3} alt="" className="app" />
         {/* <motion.div 
            className="app-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.div 
              className="app-icon"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className="fas fa-store"></i>
            </motion.div>
            <h3>Market Place</h3>
            <p>Digital platform for cluster level business</p>
            <div className="app-features">
              <motion.div 
                className="feature"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-shopping-cart"></i>
                <span>Product Catalog</span>
              </motion.div>
              <motion.div 
                className="feature"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-handshake"></i>
                <span>Bookings</span>
              </motion.div>
              <motion.div 
                className="feature"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-chart-line"></i>
                <span>Business Analytics</span>
              </motion.div>
              <motion.div 
                className="feature"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-digital-tachograph"></i>
                <span>Digital Records</span>
              </motion.div>
            </div>
          </motion.div>*/}
        </motion.div>
      </motion.div>
    </div>
  </section>

  <section className="data-pool" id="learnmore">
  <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
     <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        
      >
        AgriX Data Pool
      </motion.h2>
      <motion.p
       className="section-description"
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: 0.3 }}
      >
       AgriX collects and stores valuable farming data through its cluster-level operations, creating a comprehensive data pool which supports comprehensive farm management.
      </motion.p>
      <div className="img-pool">
        <img src={datapool} alt="Data Pool" />
      </div>
  </motion.div>
  </section>

      <section className="features-section">
        <div className="headerss"><p>Comprehensive Farm Management</p></div>

        <div className="farm-content">
          <div className="feature-wrap">
            <div className="feature-item-img">
               {farmimage.map((Image,index)=>(
                 <div className="featureimg">
                  <img src={Image.img} alt="" />
                 </div>
              ))}
            </div>
             
          
          
          <div className="features-grid">
            
            
          <motion.div 
          whileInView={{opacity:1, y:0}}
          initial={{y:100, opacity:0}}
          transition={{duratiion:1.5,delay:0,staggerChildren:0.8}}className="feature-item">
            {/*<i className="fas fa-user-friends"></i>*/}
            <h4>Farmer Profiling</h4>
            <p>Unique digital IDs and profiles for farmers with complete history tracking</p>
          </motion.div>
          <motion.div 
          whileInView={{opacity:1, y:0}}
          initial={{y:100, opacity:0}}
          transition={{duratiion:1.5,delay:0.2,staggerChildren:1}}className="feature-item">
            {/*<i className="fas fa-map-marker-alt"></i>*/}
            <h4>Resource Tracking</h4>
            <p>Real-time monitoring of machinery, implements, and agricultural inputs</p>
          </motion.div>
          <motion.div 
          whileInView={{opacity:1, y:0}}
          initial={{y:100, opacity:0}}
          transition={{duratiion:1.5,delay:0.4,staggerChildren:1.2}}className="feature-item">
            {/*<i className="fas fa-chart-line"></i>*/}
            <h4>Data Analytics</h4>
            <p>Advanced analytics for crop planning and yield optimization</p>
          </motion.div>
          {/*<motion.div 
          whileInView={{opacity:1, y:0}}
          initial={{y:100, opacity:0}}
          transition={{duratiion:1.5,delay:0.6,staggerChildren:1.4}} className="feature-item">
            <i className="fas fa-leaf"></i>
            <h4>Sustainable Practices</h4>
            <p>Environment-friendly farming solutions and carbon footprint monitoring</p>
          </motion.div>*/}
          </div>
            
        </div>
        </div>
        
      </section>

      {/*<section className="smart-tech-section">
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
  </section>*/}
  <section className="satellite-section">
  <div className="precision-mapping">
    <motion.div 
      className="section-header"
      
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.h2
        id="satellite-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Smart Field Intelligence
      </motion.h2>
      <p className="subtitle">Advanced satellite monitoring and field tracking</p>
    </motion.div>

    {/* Circle + Three Divs Row */}
    <div className="satellite-flex-row">
      {/* Circular Graphic */}
      <motion.div 
        className="satellite-circle-graphic"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="circle-divider-h"></div>
        <div className="circle-divider-v"></div>
        <motion.div
          className="circle-quadrant top-left"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span>Track and monitor individual farmer plots with unique IDs</span>
        </motion.div>
        <motion.div
          className="circle-quadrant top-right"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <span>Manage farming clusters efficiently through geospatial data</span>
        </motion.div>
        <motion.div
          className="circle-quadrant bottom-left"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span>Monitor crop health and field conditions in real-time</span>
      </motion.div>
        <motion.div 
          className="circle-quadrant bottom-right"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <span>Provide precise location-based services and support</span>
        </motion.div>
        <div className="circle-arrow arrow-top"></div>
        <div className="circle-arrow arrow-right"></div>
        <div className="circle-arrow arrow-bottom"></div>
        <div className="circle-arrow arrow-left"></div>
      </motion.div>
      {/* Three Info Divs */}
      <div className="satellite-info-column">
        <div className="satellite-info-card">
          <div className="satellite-info-title">Comprehensive field monitoring</div>
          <div className="satellite-info-desc">Detailed satellite imagery and GPS tracking for precise plot identification and monitoring.</div>
        </div>
        <div className="satellite-info-card">
          <div className="satellite-info-title">Extensive coverage</div>
          <div className="satellite-info-desc">Over 15,000+ acres mapped across Bihar, showcasing our scalability and reach.</div>
        </div>
        <div className="satellite-info-card">
          <div className="satellite-info-title">Cluster-based approach</div>
          <div className="satellite-info-desc">Targeted management in regions like Gazipur, ensuring efficient resource allocation and optimized farm operations.</div>
        </div>
      </div>
    </div>

    {/* Images Row Below */}
    <div className="satellite-images-row">
      <motion.div
        className="image-container"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(25, 118, 210, 0.18)' }}
        style={{ cursor: 'pointer', transition: 'all 0.3s cubic-bezier(.4,2,.6,1)' }}
      >
        <img 
          src={AgrixPlots} 
          alt="Field tracking map showing multiple farmer plots with unique IDs" 
          className="mapping-image"
        />
        <p className="image-caption">Plot-level tracking system with unique farmer IDs</p>
      </motion.div>
      <motion.div
        className="image-container"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(25, 118, 210, 0.18)' }}
        style={{ cursor: 'pointer', transition: 'all 0.3s cubic-bezier(.4,2,.6,1)' }}
      >
        <img 
          src={tracking}
          alt="Satellite view of Gazipur cluster showing managed agricultural land" 
          className="mapping-image"
        />
        <p className="image-caption">Cluster visualization of managed farmland in Ghajipur region</p>
      </motion.div>
    </div>
  </div>
</section>

<section className="implements-section">
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Next-Gen Farm Equipment
      </motion.h2>
      <motion.p 
        className="section-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Discover our precision-engineered farm equipment that combines cutting-edge technology with robust design. From GPS-guided sprayers to automated tractors, our implements enhance efficiency, reduce costs, and maximize yields, transforming traditional farming into a modern, technology-driven industry.
      </motion.p>
    </motion.div>

    <div className="implements-grid">
      {/* Sprayer System */}
      <motion.div className="implement-card">
        <motion.div className="implement-image">
          <img src={harvester} alt="Advanced Sprayer System" />
        </motion.div>
        <div className="implement-content">
          <h3>Multi-Crop Harvester</h3>
          <p>Efficiently harvests multiple crops, reducing labor costs and increasing productivity.</p>
          <ul className="implement-features">
            <li>Minimizes crop losses</li>
            <li>Improves grain quality</li>
            
          </ul>
        </div>
      </motion.div>

      {/* Tractor System */}
      <motion.div className="implement-card">
        <motion.div className="implement-image">
          <img src={drone} alt="Smart Tractor System" />
        </motion.div>
        <div className="implement-content">
          <h3>Agricultural Drones</h3>
          <p>Identify crop stress, disease, and nutrient deficiencies through multispectral imaging.</p>
          <ul className="implement-features">
            <li>High-resolution imagery</li>
            <li>Real-time data collection</li>
            
          </ul>
        </div>
      </motion.div>

      {/* Cage Wheel System */}
      <motion.div className="implement-card">
        <motion.div className="implement-image">
          <img src={laserleveller} alt="Cage Wheel System" />
        </motion.div>
        <div className="implement-content">
          <h3>Laser Leveler</h3>
          <p>Precise land leveling for optimal water usage and reduced soil erosion.</p>
          <ul className="implement-features">
            <li>Improves crop yields</li>
            <li>Reduces farming costs</li>
            
          </ul>
        </div>
      </motion.div>

      {/* Thresher System */}
      <motion.div className="implement-card">
        <motion.div className="implement-image">
          <img src={strawreaper} alt="Advanced Thresher" />
        </motion.div>
        <div className="implement-content">
          <h3>Straw Reaper</h3>
          <p>Collects and manages crop residues, reducing waste and promoting sustainable farming practices.</p>
          <ul className="implement-features">
            <li>Additional income streams</li>
            <li>Saves Time</li>
            
          </ul>
        </div>
      </motion.div>
    </div>
  </section>

  

  
  
 

    
  
    </div>
  );
};

export default Technology;