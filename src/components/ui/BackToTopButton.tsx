import React, { useState, useEffect } from 'react';
import { Button, Icon } from '@shohojdhara/atomix';

export const BackToTopButton: React.FC = () => {
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

  if (!isVisible) return null;

  return (
    <Button
      variant="primary"
      size="md"
      onClick={scrollToTop}
      className="back-to-top"
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Icon name="ArrowUp" size="md" />
    </Button>
  );
};