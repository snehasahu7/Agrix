import React from "react";
import {
   FaFireAlt,
  FaUsers,
  FaGlobe,
  FaSeedling,
  FaMapMarkedAlt,
  FaHome,
} from "react-icons/fa";


import "./ImpactMetrics.css";

const ImpactMetrics = () => {
  const metrics = [
    
    { icon: <  FaMapMarkedAlt />, label: "Total Clusters", value: "10" },
    { icon: <FaHome />, label: "Villages Covered", value: "70+" },
     { icon: <FaUsers />, label: "Farmers Impacted", value: "13,000+" },
     { icon: <FaGlobe/>, label: "Acres Served", value: "20,000+" },
      { icon: <FaSeedling />, label: "Better Crop Realization ", value: "40%" },
       { icon: < FaFireAlt />, label: "Reduced Stubble Burning", value: "25%" },
  ];

  return (
    <div className="impactmetrics-section">
      <div className="impactmetrics-overlay">
        <h2 className="impactmetrics-title">Our Impact</h2>
        <h3 className="impactmetrics-subheading">Connecting Communities, Sowing Sustainability And  Cultivating Change</h3>
        <div className="impactmetrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="impactmetric">
              <div className="impactmetric-icon">{metric.icon}</div>
              <span className="impactmetric-label">{metric.label}</span>
              <span className="impactmetric-value">{metric.value}</span>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ImpactMetrics;