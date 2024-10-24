import React, { useState, useEffect, useRef } from 'react';
import placeholderImage from '../../asset/image/lotus svg-02.svg'; // Replace with the path to your placeholder image

const useLazyImage = (actualImageSrc) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const imageRef = useRef(null);
  
    useEffect(() => {
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = actualImageSrc;
            img.onload = () => {
              setIsLoaded(true);
            };
          }
        });
      };
  
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };
  
      const currentImageRef = imageRef.current; // Store the current value of imageRef.current
  
      const observer = new IntersectionObserver(handleIntersection, options);
  
      if (currentImageRef) {
        observer.observe(currentImageRef);
      }
  
      return () => {
        if (currentImageRef) {
          observer.unobserve(currentImageRef);
        }
      };
    }, [actualImageSrc, imageRef]); // Include actualImageSrc and imageRef in the dependency array
  
    return [imageRef, isLoaded];
  };
  
  const LazyImage = ({ actualImageSrc,Alt }) => {
    const [imageRef, isLoaded] = useLazyImage(actualImageSrc);
  
    return (
      <div className='clv_img_field' style={{ maxWidth: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
        <img
          src={placeholderImage}
          alt={Alt}
          style={{ width: '100%', height: '100%',objectFit:'cover', position: 'absolute', top: 0, left: 0,opacity: isLoaded ? 0 : 1, }}
        />
        <img
          ref={imageRef}
          src={isLoaded ? actualImageSrc : placeholderImage}
          alt={Alt}
          loading="lazy"
          style={{
            width: '100%',
            opacity: isLoaded ? 1 : 0,
          }}
        />
      </div>
    );
  };
  
  export default LazyImage;