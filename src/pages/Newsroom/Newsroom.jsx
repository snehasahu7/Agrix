import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Newsroom.css';
import news1 from '../../assets/news1.png'
import news2 from '../../assets/news2.png'

import PostCard from './PostCard';

const mediaArticles = [
  {
    title: 'Agrix Receives Growth Capital from Lead Angels Network',
    source: 'Hindustan Times',
    link: 'https://www.hindustantimes.com/business/agritech-startup-agrix-gets-capital-infusion-from-lead-angels-network-101638791778616.html',
    image: news1,
  },
  {
    title: 'Agrix Secures Seed Funding from Maple Capital Advisors',
    source: 'TechStory',
    link: 'https://techstory.in/agrix-secured-undisclosed-amount-backed-by-maple-capital-advisors/',
    image: news2,
  },
 
];

const NewsRoom = () => {
  const [posts, setPosts] = useState([]);
  const listRef = useRef(null);

  const scrollBy = (amount) => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://agrix-1.onrender.com/postlist');
        const data = await response.json();
        const postsWithImages = data.filter(post => post.images && post.images.length > 0);
        setPosts(postsWithImages);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, []);

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
          <div className="news-list-container">
            <button className="scroll-btn left" onClick={() => scrollBy(-370)}>&lt;</button>
            <div className="news-list" ref={listRef}>
                {posts.map((item) => (
                  <PostCard key={item.post_id} post={item} />
                ))}
            </div>
            <button className="scroll-btn right" onClick={() => scrollBy(370)}>&gt;</button>
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
            onClick={() => window.open('https://www.youtube.com/watch?v=h_Y9raqmplA', '_blank')}
          >
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/h_Y9raqmplA"
                title="Product Updates"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-content">
              <h3>Startup Stories & Innovations</h3>
              <p>Get insights from a startup founder on how technology is driving change in rural agriculture</p>
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

      {/* Media Coverage Section */}
      <section className="media-coverage-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Agrix in the News</h2>
          <p>Media highlights and news coverage of Agrix</p>
        </motion.div>
        <div className="media-grid">
          {mediaArticles.map((article, index) => (
            <motion.a 
              key={index} 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="media-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={article.image} alt={article.title} className="media-image" />
              <div className="media-content">
                <h3>{article.title}</h3>
                <p className="media-source">{article.source}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
)}

export default NewsRoom;