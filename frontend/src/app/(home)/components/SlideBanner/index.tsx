'use client';
import { useBannerButton } from '../hooks/useBannerButton';
import BannerButton from './BannerButton';
import BannerList from './BannerList';

const SlideBanner = () => {
  const { selectBannerIdx, handleSetBannerIdx } = useBannerButton();

  return (
    <div className="relative flex h-[650px] w-full overflow-x-auto md:aspect-video">
      {BannerList.map(banner => banner)}
      <BannerButton
        handleSetIdx={handleSetBannerIdx}
        selectBannerIdx={selectBannerIdx}
        bannerList={BannerList}
        className="absolute bottom-3 left-1/2 -translate-x-1/2"
      />
    </div>
  );
};

export default SlideBanner;
