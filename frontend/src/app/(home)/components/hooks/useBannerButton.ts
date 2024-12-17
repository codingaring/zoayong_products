import { useState } from 'react';

export function useBannerButton(bannersLastIdx: number) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < bannersLastIdx) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handleSetIdx = (idx: number) => {
    setCurrentIdx(idx);
  };

  return { currentIdx, handlePrev, handleNext, handleSetIdx };
}
