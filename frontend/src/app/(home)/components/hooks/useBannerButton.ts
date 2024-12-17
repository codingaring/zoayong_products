import { useState } from 'react';

export function useBannerButton() {
  const [selectBannerIdx, setSelectBannerIdx] = useState(0);

  const handleSetBannerIdx = (idx: number) => {
    setSelectBannerIdx(idx);
  };

  return { selectBannerIdx, handleSetBannerIdx };
}
