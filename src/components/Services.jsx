import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-cogs',
      title: 'Efficient Machinery Rental',
      description: 'Mechanization of fragmented farms through efficient clustering'
    },
    {
      icon: 'fas fa-tractor',
      title: 'Quality Agri inputs supply',
      description: 'Data led Agri-inputs supply and farm management for value added inputs'
    },
    {
      icon: 'fas fa-digital-tachograph',
      title: 'Digital Farm Management',
      description: 'Management of farms and farmers\' data within a cluster for actionable insights'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Strong Market Linkage',
      description: 'Digital maps for real time yield predictions for better planning on offtakers side'
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
              <i className={service.icon}></i>
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