import { useState, useEffect } from 'react';

export const useIsMobile = () => {
   const [width, setWidth] = useState(window.innerWidth);

   const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
   };

   useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => window.removeEventListener('resize', handleWindowSizeChange);
   }, []);

   const isMobile = width < 580;
   return isMobile;
};
