import React from 'react';
import img1 from "../assets/Harvester in field (1).jpg"
import img2 from "../assets/pexels-cottonbro-5538169.jpg"
import img3 from "../assets/Tracking (1).jpg"
import img4 from "../assets/pexels-cytonn-955395.jpg"
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: img1,
      title: 'Efficient Machinery Rental',
      description: 'Mechanization of fragmented farms through efficient clustering'
    },
    {
      icon: img4,
      title: 'Quality Agri inputs supply',
      description: 'Data led Agri-inputs supply and farm management for value added inputs'
    },
    {
      icon: img3,
      title: 'Digital Farm Management',
      description: 'Farm insights via digital mapping, crop advising, and crop passports enable cluster-based farming.'
    },
    {
      icon: img2,
      title: 'Strong Market Linkage',
      description: 'AgriX gives farmers digital insights and data for precise yield predictions, optimal market linkages, and data-driven planning.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="services-description">Comprehensive agricultural solutions for modern farming needs</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.icon} alt=""/>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 