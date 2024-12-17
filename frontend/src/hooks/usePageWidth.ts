'use client';
import { useEffect, useState } from 'react';
import debounce from '@utils/debounce';

const usePageWidth = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window) {
        setPageWidth(window.innerWidth);
      }
    }, 130);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    resizeObserver.observe(document.documentElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return pageWidth;
};

export default usePageWidth;
