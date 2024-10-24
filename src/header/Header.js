import React, { useState, useEffect } from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

function MainHeader() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1000);
  };
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <header>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
}

export default MainHeader;



