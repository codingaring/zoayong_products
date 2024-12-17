import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import heroImage from '@assets/images/hero_image.webp';
import { buttonVariant } from '@components/Button';
import { cn } from '@utils/cn';

type BannerProps = HTMLAttributes<HTMLDivElement>;

const Banner = ({ className, children, ...props }: BannerProps) => {
  return (
    <div className={cn('h-full w-screen shrink-0 px-5 py-9 md:px-24 lg:px-20', className)} {...props}>
      {children}
    </div>
  );
};

const FirstBanner = () => {
  return (
    <Banner className="relative items-center bg-green-20 md:flex md:justify-between lg:justify-center lg:gap-56">
      <div className="flex flex-col items-start gap-0.5 text-white md:shrink-0 md:gap-3">
        <h2 className="text-sm md:text-xl">궁금해? 궁금하면 조아용 &gt;&lt;</h2>
        <h1 className="text-2xl md:text-3xl">조아용in스토어</h1>
        <div className="flex flex-col gap-0.5 text-xs font-light md:text-sm">
          <span>조아용in스토어가 뭐야?</span>
          <span>조아용이 어떤 캐릭터야?</span>
          <span>수익금은 어디로 가?</span>
        </div>
        <div className="absolute bottom-14 left-1/2 z-0 w-full -translate-x-1/2 text-center md:static md:bottom-0 md:w-auto md:translate-x-0 md:text-left">
          <div className="mb-5 text-center text-white md:mb-6 lg:mt-2 lg:text-2xl">조아용in스토어의 A to Z까지!</div>
          <Link href="/" className={cn(buttonVariant({ variant: 'primary' }))}>
            자세히 보기
          </Link>
        </div>
      </div>

      <Image
        src={heroImage}
        alt="인사해용"
        width={300}
        className="absolute left-1/2 top-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 md:static md:left-0 md:top-0 md:mx-0 md:translate-x-0 md:translate-y-0 lg:w-[370px]"
      />
    </Banner>
  );
};

const SecondBanner = () => {
  return <Banner className="bg-yellow-30" />;
};

const ThirdBanner = () => {
  return <Banner className="bg-blue-30" />;
};

const BannerList = [<FirstBanner />, <SecondBanner />, <ThirdBanner />];

export default BannerList;
