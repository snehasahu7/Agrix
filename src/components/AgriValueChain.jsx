import React from 'react';
import { motion } from 'framer-motion';
import './AgriValueChain.css';
import agriGrowth from '../assets/agri-growth.png';

const AgriValueChain = () => {
  return (
    <section className="agri-value-chain">
      <div className="container">
        <motion.div 
          className="value-chain-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Agrix Smart Growth Roadmap</h2>
          <p>From the roots of tradition to the future of smart farming—leveraging technology, data, and innovation to transform agriculture into a more efficient, sustainable, and profitable industry.</p>
        </motion.div>

        <motion.div 
          className="value-chain-image-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={agriGrowth} 
            alt="Agri Value Chain" 
            className="value-chain-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AgriValueChain; 