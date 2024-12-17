import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { InputHTMLAttributes } from 'react';
import { cn } from '@utils/cn';

type PrimaryInputProps = {
  rightIcon?: string | StaticImport;
  leftIcon?: string | StaticImport;
} & InputHTMLAttributes<HTMLInputElement>;

const PrimaryInput = ({ className, rightIcon, leftIcon, ...props }: PrimaryInputProps) => {
  return (
    <form
      className={cn(
        'relative flex w-full items-center justify-between overflow-hidden rounded-md bg-white',
        className,
      )}>
      {leftIcon && <Image src={leftIcon} alt="input 아이콘" width={15} height={15} className="absolute left-2.5" />}
      <input
        className={cn(
          'flex-grow rounded-md border border-solid border-white px-2.5 py-2 text-xs focus:border-green-40 md:text-sm',
          rightIcon && 'pr-8',
          leftIcon && 'pl-8',
        )}
        {...props}
      />
      {rightIcon && <Image src={rightIcon} alt="input 아이콘" width={15} height={15} className="absolute right-2.5" />}
    </form>
  );
};

export default PrimaryInput;
