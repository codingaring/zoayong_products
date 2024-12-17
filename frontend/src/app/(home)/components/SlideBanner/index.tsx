'use client';
import { useBannerButton } from '../hooks/useBannerButton';
import BannerButton from './BannerButton';
import BannerList from './BannerList';
import { cn } from '@utils/cn';
import BannerArrowButton from './BannerArrowButton';

const SlideBanner = () => {
  const bannerListLastIdx = BannerList.length - 1;
  const { currentIdx, handlePrev, handleSetIdx, handleNext } = useBannerButton(bannerListLastIdx);

  return (
    <div className="relative overflow-hidden">
      <div
        className={cn(
          'hide-scrollbar relative flex h-[650px] w-full transition-transform duration-300 ease-in-out md:aspect-video',
        )}
        style={{ transform: `translateX(-${currentIdx * 100}vw)` }}>
        {BannerList.map(banner => banner)}
      </div>
      <BannerButton
        handleSetIdx={handleSetIdx}
        selectBannerIdx={currentIdx}
        bannerList={BannerList}
        className="absolute bottom-3 left-1/2 -translate-x-1/2"
      />

      <BannerArrowButton
        handlePrev={handlePrev}
        handleNext={handleNext}
        currentIdx={currentIdx}
        bannerLastIdx={bannerListLastIdx}
        className={'hidden md:block'}
      />
    </div>
  );
};

export default SlideBanner;
