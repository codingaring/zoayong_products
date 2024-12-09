import Image from 'next/image';
import Link from 'next/link';
import storeLogo from '@assets/images/store_logo.webp';
import { CATEGORY_LIST } from '@constants/category';
import CategoryButton from './CategoryButton';

const MainHeader = () => {
  return (
    <div className="absolute inset-x-0 top-0 bg-green-20 px-5 pt-3 md:px-12 md:pt-9">
      <Link href={'/'}>
        <Image src={storeLogo} width={215} height={48} alt="조아용in스토어" className="mx-auto mb-3" />
      </Link>
      <div className="flex flex-col items-center md:flex-row-reverse md:justify-between md:gap-14">
        <div className="w-full rounded-lg border border-solid border-white p-2 md:w-72">검색창</div>
        <div className="flex grow justify-between lg:grow-0 lg:gap-10">
          {CATEGORY_LIST.map(category => (
            <CategoryButton key={category} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
