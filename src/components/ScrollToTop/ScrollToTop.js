import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.scrollToTopButton}
        >
					<FaArrowUp />
        </button>
      )}
    </div>
  );
};

const styles = {
  scrollToTopButton: {
		height: '50px',
		width: '50px',
    position: 'fixed',
    bottom: '20px',
    right: '10px',
    padding: '10px',
    fontSize: '18px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#005abb',
    color: 'white',
    cursor: 'pointer',
    zIndex: '1000',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)',
    transition: 'opacity 0.3s ease-in-out',
  }
};

export default ScrollToTop;
