import Image from 'next/image';
import Link from 'next/link';
import storeLogo from '@assets/images/store_logo.webp';
import { SNS_List } from './sns';

const Footer = () => {
  return (
    <footer className="absolute inset-x-0 bottom-0 flex min-w-full flex-col items-start justify-center gap-5 bg-gray-120 p-10 text-white">
      <div className="relative hidden h-9 md:block md:w-52 lg:h-16 lg:w-60">
        <Image src={storeLogo} alt="조아용in스토어" fill={true} className="object-contain object-left" />
      </div>
      <div className="flex gap-5 text-xl font-bold md:text-lg">
        고객센터 <span className="text-yellow-20">031-285-8002</span>
      </div>
      <div className="flex gap-5 text-base md:text-lg">
        <span className="font-semibold">응대 가능 시간</span>
        <span className="font-light">평일 9시 ~ 18시</span>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-thin leading-6 md:text-sm lg:gap-x-10">
        <span>조아용in스토어</span>
        <span>대표 김양희</span>
        <span>사업자등록번호 142-82-69463</span>
        <span>통신판매업신고번호 2020-용인처인-0076</span>
        <span>
          경기도 용인시 처인구 중부대로1161번길 69-2 (용인지역자활및학교밖청소년지원복합센터) 3층 (우 : 17019)
        </span>
      </div>
      <div className="flex items-center gap-5">
        {SNS_List.map(sns => (
          <Link href={sns.link} key={sns.name} target="_blank">
            <Image
              width={24}
              height={24}
              className="object-contain transition-transform hover:scale-110"
              src={sns.imageUrl}
              alt="youtube"
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
