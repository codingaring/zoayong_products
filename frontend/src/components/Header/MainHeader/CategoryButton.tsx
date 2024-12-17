import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { cn } from '@utils/cn';

const categoryVariant = cva(
  'relative flex cursor-pointer flex-col py-3 text-xs text-white active:text-gray-70 md:text-sm lg:p-5 lg:text-base',
  {
    variants: {
      variant: {
        select:
          "after:absolute after:bottom-0 after:left-0 after:min-h-1 after:min-w-full after:bg-white after:content-[''] lg:after:min-h-1.5",
      },
    },
  },
);

type CategoryButtonProps = {
  category: string;
} & VariantProps<typeof categoryVariant> &
  HTMLAttributes<HTMLDivElement>;

const CategoryButton = ({ category, variant, className }: CategoryButtonProps) => {
  return (
    <div key={category} className={cn(categoryVariant({ variant, className }))}>
      {category}
    </div>
  );
};

export default CategoryButton;
