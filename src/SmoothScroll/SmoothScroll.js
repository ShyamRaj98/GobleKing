import React, { useRef, useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import "./SmoothScroll.css";

const ScrollbarComponent = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollbar = Scrollbar.init(containerRef.current, {
      damping: 0.05,
      thumbMinSize: 5,
      alwaysShowTracks: false,
    });

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <div className="scroll-container" ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollbarComponent;