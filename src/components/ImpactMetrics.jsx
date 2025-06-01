import React from "react";
import {
  FaTractor,
  FaUsers,
  FaSeedling,
    FaFlask,
  FaHome,
  FaMapMarkedAlt,
} from "react-icons/fa";

import "./ImpactMetrics.css";

const ImpactMetrics = () => {
  const metrics = [
    { icon: <FaTractor />, label: "Farmer's Impacted", value: "13,000+" },
    { icon: <FaUsers />, label: "Families Employed", value: "50+" },
    { icon: <FaSeedling />, label: "Better Crop Realization Upto", value: "40%" },
    { icon: <FaFlask />, label: "Reduced Stubble Burning Upto", value: "25%" },
    { icon: <FaHome />, label: "Villages Covered", value: "70+" },
    { icon: <FaMapMarkedAlt/>, label: "Total Clusters", value: "8" },
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