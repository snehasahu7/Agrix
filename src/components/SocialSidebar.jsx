import React from 'react';
import './SocialSidebar.css';

const SocialSidebar = () => {
  const socialLinks = [
    {
      icon: 'fab fa-facebook-f',
      url: '#',
      color: '#1877f2'
    },
    {
      icon: 'fab fa-twitter',
      url: '#',
      color: '#1da1f2'
    },
    {
      icon: 'fab fa-linkedin-in',
      url: '#',
      color: '#0077b5'
    },
    {
      icon: 'fab fa-instagram',
      url: '#',
      color: '#e4405f'
    },
    {
      icon: 'fab fa-youtube',
      url: '#',
      color: '#ff0000'
    },
    {
      icon: 'fab fa-pinterest',
      url: '#',
      color: '#e60023'
    }
  ];

  return (
    <div className="social-sidebar">
      <div className="social-links">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ '--social-color': social.color }}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSidebar; 