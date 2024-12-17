import LeftIcon from '@assets/icons/components/LeftIcon';
import RightIcon from '@assets/icons/components/RightIcon';
import { cn } from '@utils/cn';

type BannerArrowButtonProps = {
  handlePrev: () => void;
  handleNext: () => void;
  currentIdx: number;
  bannerLastIdx: number;
  className?: string;
};

const BannerArrowButton = ({
  className,
  handlePrev,
  handleNext,
  currentIdx,
  bannerLastIdx,
}: BannerArrowButtonProps) => {
  return (
    <div className={cn(className)}>
      <button onClick={handlePrev} disabled={currentIdx === 0} className="absolute left-10 top-1/2 -translate-y-1/2">
        <LeftIcon color={currentIdx === 0 ? '#B7E1D3' : 'white'} width={'20'} height={'32'} />
      </button>
      <button
        disabled={currentIdx === bannerLastIdx}
        onClick={handleNext}
        className="absolute right-10 top-1/2 -translate-y-1/2">
        <RightIcon color={currentIdx === bannerLastIdx ? '#B7E1D3' : 'white'} width={'20'} height={'32'} />
      </button>
    </div>
  );
};

export default BannerArrowButton;
