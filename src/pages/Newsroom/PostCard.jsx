import React, { useState } from 'react';

const PostCard = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const contentLines = post.content.split('\n');
  const isLongContent = contentLines.length > 3 || post.content.length > 200; // also check content length

  return (
    <div className="news-card">
        {post.images && post.images.length > 0 && (
          <img src={post.images[0]} alt="Post" className="news-image" />
        )}
        <div className="news-content">
          <div className={`post-text ${!isExpanded && isLongContent ? 'truncated' : ''}`}>
            {post.content}
          </div>
          {isLongContent && (
            <div className="read-more-container">
              <button onClick={toggleExpanded} className="read-more-btn">
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          )}
          <div className="hashtags">
            {post.hashtags.slice(0, 3).map((tag, i) => (
              <span key={i} className="hashtag"><strong>{tag}</strong></span>
            ))}
          </div>
        </div>
    </div>
  );
};

export default PostCard; 