import React from 'react';
import { motion } from 'framer-motion';
import './Newsroom.css';
import news1 from '../../assets/news1.png'
import news2 from '../../assets/news2.png'
import news3 from '../../assets/wheatnews.png'

const newsItems = [
    {
    title: 'Agrix Team in Action During Wheat Harvesting Season',
    date: 'April 2025',
    summary:
      'Co-founder Saurav Singh shared a behind-the-scenes look at wheat harvesting. The team’s long work hours reflect their mission to scale agri-mechanization and serve farmers.',
    link: 'https://www.linkedin.com/company/agrixagrotech/',
    image: news3,
  },
  {
    title: 'Agrix Receives Growth Capital from Lead Angels Network',
    date: 'December 6, 2021',
    summary:
      'Agrix Agrotech has secured growth capital from Lead Angels Network to expand operations, enhance technology platforms, and increase farmer engagement.',
    link: 'https://www.hindustantimes.com/business/agritech-startup-agrix-gets-capital-infusion-from-lead-angels-network-101638791778616.html',
    image:
      news1,
  },
  {
    title: 'Agrix Secures Seed Funding from Maple Capital Advisors',
    date: 'October 30, 2020',
    summary:
      'Patna-based Agrix Agrotech has raised an undisclosed amount in seed funding from Maple Capital Advisors to strengthen its technology and operations.',
    link: 'https://techstory.in/agrix-secured-undisclosed-amount-backed-by-maple-capital-advisors/',
    image:
      news2,
  },
  

];

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
        <div className="newss">
        <div className="news-list">
              {newsItems.map((item, index) => (
              <div className="news-card" key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.image} alt={item.title} className="news-image" />
                    <div className="news-content">
                      <h3>{item.title}</h3>
                      <p className="news-date">{item.date}</p>
                       <p>{item.summary}</p>
                    </div>
                  </a>
              </div>
              ))}
        </div>
        </div>
        </section>

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
            onClick={() => window.open('https://www.youtube.com/watch?v=devYCLvMCHk', '_blank')}
          >
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/devYCLvMCHk"
                title="Agrix Smart Farming Solutions"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-content">
              <h3>Smart Farming Solutions Demo</h3>
              <p>See how our technology is transforming agriculture</p>
              <div className="video-meta">
                <span className="views">1.2K views</span>
                
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="video-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => window.open('https://www.youtube.com/watch?v=CGbQOxHE6qQ', '_blank')}
          >
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/CGbQOxHE6qQ"
                title="Farmer Success Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-content">
              <h3>Farmer Success Stories</h3>
              <p>Real impact of Agrix solutions on farming communities</p>
              <div className="video-meta">
                <span className="views">2.5K views</span>
                
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="video-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => window.open('https://www.youtube.com/watch?v=buosI0puvtA', '_blank')}
          >
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/buosI0puvtA"
                title="Product Updates"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-content">
              <h3>Latest Product Updates</h3>
              <p>Agrix Implements transported through waterways to remote areas</p>
              <div className="video-meta">
                <span className="views">3.1K views</span>
                
              </div>
            </div>
          </motion.div>
        </div>

        <div className="view-more-container">
          <button 
            className="view-more-btn"
            onClick={() => window.open('https://www.youtube.com/@agrixindia', '_blank')}
          >
            View More Videos
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>

       {/* Agriculture Forecast Section */}
       <section className="forecast-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Agriculture Forecast</h2>
          <p>Expert insights and predictions for the agricultural sector</p>
        </motion.div>

        <div className="forecast-grid">
          <motion.div 
            className="forecast-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="forecast-icon">
              <i className="fas fa-cloud-sun"></i>
            </div>
            <h3>Weather Impact Analysis</h3>
            <p>Upcoming weather patterns and their potential impact on crop yields</p>
            <ul className="forecast-points">
              <li>Expected rainfall patterns for the next month</li>
              <li>Temperature trends and crop implications</li>
              <li>Region-specific weather advisories</li>
            </ul>
          </motion.div>

          <motion.div 
            className="forecast-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="forecast-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Market Trends</h3>
            <p>Analysis of agricultural market trends and price forecasts</p>
            <ul className="forecast-points">
              <li>Commodity price predictions</li>
              <li>Supply chain insights</li>
              <li>Market demand analysis</li>
            </ul>
          </motion.div>

          <motion.div 
            className="forecast-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="forecast-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h3>Crop Advisory</h3>
            <p>Expert recommendations for optimal crop management</p>
            <ul className="forecast-points">
              <li>Best practices for current season</li>
              <li>Pest and disease alerts</li>
              <li>Soil health recommendations</li>
            </ul>
          </motion.div>
        </div>
      </section>


    </div>
)}

export default NewsRoom;