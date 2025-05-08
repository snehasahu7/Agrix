import React from 'react';
import { motion } from 'framer-motion';


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
          <h2>Our Presence</h2>
          <p>Making the change, One farm at a time.</p>
        </motion.div>

        <motion.div 
          className="value-chain-image-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default AgriValueChain; 