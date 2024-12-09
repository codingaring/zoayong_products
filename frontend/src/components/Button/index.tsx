import { cva, type VariantProps } from 'class-variance-authority';
import { ElementType, forwardRef } from 'react';
import View, { PolymorphicProps, PolymorphicRef } from '@components/View';
import { cn } from '@utils/cn';

export const buttonVariant = cva(
  [
    'relative rounded-full border border-solid px-6 py-3 text-white',
    'after:absolute after:inset-0 after:-z-10 after:min-h-full after:min-w-full after:translate-x-1.5 after:translate-y-1.5 after:rounded-full after:border after:border-solid after:transition-transform after:content-[""]',
    'transition duration-150 ease-in-out hover:after:-translate-x-0 hover:after:-translate-y-0',
  ],
  {
    variants: {
      variant: {
        white: 'border-gray-130 bg-white text-gray-130 after:border-gray-130 after:bg-white active:bg-gray-30',
        black: 'bg-gray-130 after:bg-gray-130 active:bg-gray-150',
        primary: 'bg-green-20 after:bg-green-20 active:bg-green-40',
        secondary: 'bg-green-40 after:bg-green-40 active:bg-green-60',
      },
      size: {
        lg: 'px-8 py-5 text-2xl font-bold',
        md: 'px-7 py-4 text-base',
        sm: 'px-6 py-3 text-sm',
      },
    },
    defaultVariants: {
      variant: 'white',
      size: 'md',
    },
  },
);

type ButtonVariant = VariantProps<typeof buttonVariant>;

type ButtonProps<T extends ElementType> = PolymorphicProps<T> & ButtonVariant;

const Button = forwardRef(
  <T extends ElementType = 'button'>(
    { as, variant, size, className, ...props }: ButtonProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    return (
      <View as={as || 'button'} className={cn(buttonVariant({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);

Button.displayName = 'Button';

export default Button;
