import { cva, type VariantProps } from 'class-variance-authority';
import { ElementType, forwardRef } from 'react';
import View, { PolymorphicProps, PolymorphicRef } from '@components/View';
import { cn } from '@utils/cn';

export const buttonVariant = cva(
  [
    'relative isolate rounded-full border border-solid',
    'before:absolute before:inset-0 before:-z-10 before:translate-x-1.5 before:translate-y-1.5 before:rounded-full before:border before:border-white',
    'duration-150 ease-in-out before:transition-transform hover:before:translate-x-0 hover:before:translate-y-0',
  ],
  {
    variants: {
      variant: {
        white: 'border-gray-130 bg-white text-gray-130 before:border-gray-130 before:bg-white active:bg-gray-40',
        black: 'bg-gray-120 text-white before:bg-gray-120 active:bg-gray-150',
        primary: 'bg-green-20 text-white before:bg-green-20 active:bg-green-40',
        secondary: 'bg-green-40 text-white before:bg-green-40 active:bg-green-60',
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
