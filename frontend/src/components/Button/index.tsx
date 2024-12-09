import View, { PolymorphicProps, PolymorphicRef } from '@components/View';
import { cn } from '@utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { ElementType, forwardRef } from 'react';

export const buttonVariant = cva(
  [
    'relative px-6 py-3 rounded-full border border-solid text-white',
    'after:content-[""] after:border after:border-solid after:inset-0 after:absolute after:min-w-full after:min-h-full after:rounded-full after:translate-x-1.5 after:translate-y-1.5 after:-z-10 after:transition-transform',
    'hover:after:-translate-x-0 hover:after:-translate-y-0 duration-150 transition ease-in-out',
  ],
  {
    variants: {
      variant: {
        white: 'bg-white after:bg-white text-gray-130 border-gray-130 after:border-gray-130 active:bg-gray-30',
        black: 'bg-gray-130 after:bg-gray-130 active:bg-gray-150',
        primary: 'bg-green-20 after:bg-green-20 active:bg-green-40',
        secondary: 'bg-green-40 after:bg-green-40 active:bg-green-60',
      },
      size: {
        lg: 'text-2xl px-8 py-5 font-bold',
        md: 'text-base px-7 py-4',
        sm: 'text-sm px-6 py-3',
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
