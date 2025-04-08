import React from 'react';
import { motion } from 'framer-motion';
import './Newsroom.css';

const NewsRoom = () => {
  return (
    <div className="newsroom-container">
      {/* Hero Section */}
      <section className="newsroom-hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Agrix Newsroom</h1>
          <p>Stay updated with the latest in agricultural technology and innovation</p>
        </motion.div>
      </section>

      {/* Latest News Section */}
      <section className="latest-news-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Latest Updates</h2>
          <p>Recent developments and announcements from Agrix</p>
        </motion.div>
        </section>

        {/* Video Updates Section */}
      <section className="video-updates-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Latest Video Updates</h2>
          <p>Watch our latest technology demonstrations and farmer success stories</p>
        </motion.div>

        <div className="video-grid">
          <motion.div 
            className="video-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/your-video-id-1"
                title="Agrix Smart Farming Solutions"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Smart Farming Solutions Demo</h3>
            <p>See how our technology is transforming agriculture</p>
          </motion.div>

          <motion.div 
            className="video-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="video-container">
              <iframe
                src="https://youtu.be/CGbQOxHE6qQ?si=kdBLmhfP3TyKtu4k"
                title="Farmer Success Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Farmer Success Stories</h3>
            <p>Real impact of Agrix solutions on farming communities</p>
          </motion.div>

          <motion.div 
            className="video-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/your-video-id-3"
                title="Product Updates"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Latest Product Updates</h3>
            <p>New features and improvements in our solutions</p>
          </motion.div>
        </div>
      </section>

    </div>
)}

export default NewsRoom;