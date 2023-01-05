import { useState, useEffect } from 'react';

interface IWindowSize {
  width: undefined | number;
  height: undefined | number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

export default useWindowSize;
