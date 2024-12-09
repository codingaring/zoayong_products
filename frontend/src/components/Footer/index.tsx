import Image from 'next/image';
import Link from 'next/link';
import storeLogo from 'public/assets/images/store_logo.webp';
import { SNS_List } from './sns';

const Footer = () => {
  return (
    <footer className="bg-gray-120 min-w-full flex justify-center items-start p-10 text-white flex-col gap-5 absolute bottom-0 left-0 right-0">
      <div className="relative md:w-52 hidden md:block h-9 lg:w-60 lg:h-16">
        <Image src={storeLogo} alt="조아용in스토어" fill={true} className="object-contain object-left" />
      </div>
      <div className="font-bold md:text-lg text-xl flex gap-5">
        고객센터 <span className="text-yellow-20">031-285-8002</span>
      </div>
      <div className="text-base md:text-lg flex gap-5">
        <span className="font-semibold">응대 가능 시간</span>
        <span className="font-light">평일 9시 ~ 18시</span>
      </div>
      <div className="font-thin text-sm flex gap-x-6 gap-y-2 flex-wrap md:text-sm lg:gap-x-10 leading-6">
        <span>조아용in스토어</span>
        <span>대표 김양희</span>
        <span>사업자등록번호 142-82-69463</span>
        <span>통신판매업신고번호 2020-용인처인-0076</span>
        <span>
          경기도 용인시 처인구 중부대로1161번길 69-2 (용인지역자활및학교밖청소년지원복합센터) 3층 (우 : 17019)
        </span>
      </div>
      <div className="flex gap-5 items-center">
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
