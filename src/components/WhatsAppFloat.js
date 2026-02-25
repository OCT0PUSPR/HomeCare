import React, { useState, useEffect } from 'react';

const WhatsAppFloat = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <a
        href="https://wa.me/971567384209"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WA
      </a>
      {showScroll && (
        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          &#8593;
        </button>
      )}
    </>
  );
};

export default WhatsAppFloat;
