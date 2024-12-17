'use client';
import { cn } from '@utils/cn';
import { HTMLAttributes } from 'react';

type BannerButtonProps = {
  bannerList: JSX.Element[];
  handleSetIdx: (idx: number) => void;
  selectBannerIdx: number;
} & HTMLAttributes<HTMLDivElement>;

const BannerButton = ({ bannerList, handleSetIdx, selectBannerIdx, className, ...props }: BannerButtonProps) => {
  return (
    <div className={cn('flex gap-2.5', className)} {...props}>
      {bannerList.map((_, index) => (
        <button
          key={index}
          onClick={() => handleSetIdx(index)}
          className={cn(
            'min-h-2.5 min-w-2.5 cursor-pointer rounded-full bg-white transition-all duration-150',
            selectBannerIdx === index ? 'min-w-8' : '',
          )}
        />
      ))}
    </div>
  );
};

export default BannerButton;
