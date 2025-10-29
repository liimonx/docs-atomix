import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Icon } from '@shohojdhara/atomix';

export const BackToTopButton: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Reset scroll position when location changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {isVisible && (
        <Button
          variant="primary"
          className="back-to-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
          }}
        >
          <Icon name="ArrowUp" />
        </Button>
      )}
    </>
  );
};