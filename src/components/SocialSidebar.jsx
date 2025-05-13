import React from 'react';
import './SocialSidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SocialSidebar = () => {
  const socialLinks = [
    {
      icon: 'fab fa-facebook-f',
      url: 'https://www.facebook.com/AgrixIndia/',
      color: '#1877f2'
    },
    {
      icon: 'fab fa-x-twitter',
      url: 'https://x.com/AgrixIndia/with_replies',
      color: '#000000'
    },
    {
      icon: 'fab fa-linkedin-in',
      url: 'http://in.linkedin.com/company/agrixagrotech',
      color: '#0077b5'
    },
    {
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/agrixindia/',
      color: '#e4405f'
    },
    {
      icon: 'fab fa-youtube',
      url: 'https://www.youtube.com/@agrixindia',
      color: '#ff0000'
    },
    {
      icon: 'fab fa-pinterest',
      url: 'https://in.pinterest.com/agrixagro/',
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