import Image from 'next/image';
import Link from 'next/link';
import searchIcon from '@assets/icons/search.svg';
import storeLogo from '@assets/images/store_logo.webp';
import PrimaryInput from '@components/PrimaryInput';
import { CATEGORY_LIST } from '@constants/category';
import CategoryButton from './CategoryButton';

const MainHeader = () => {
  return (
    <div className="absolute inset-x-0 top-0 bg-green-40 px-5 pt-3 md:px-12 md:pt-9">
      <Link href={'/'}>
        <Image src={storeLogo} width={215} height={48} alt="조아용in스토어" className="mx-auto mb-3" />
      </Link>
      <div className="flex flex-col items-center md:flex-row-reverse md:justify-between md:gap-14">
        <PrimaryInput rightIcon={searchIcon} placeholder="찾고 계신 상품이 있으신가요?" className="lg:max-w-72" />
        <div className="flex w-full grow justify-between lg:max-w-2xl lg:grow-0">
          {CATEGORY_LIST.map(category => (
            <CategoryButton key={category} variant={category === '리빙' ? 'select' : null} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
