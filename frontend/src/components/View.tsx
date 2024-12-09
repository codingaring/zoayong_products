import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, forwardRef, Ref } from 'react';

export type AsProp<T extends ElementType> = {
  as?: T;
};

export type PolymorphicRef<T extends ElementType> = Ref<ComponentPropsWithRef<T>['ref']>;

export type PolymorphicProps<T extends ElementType, Props = unknown> = AsProp<T> & ComponentPropsWithoutRef<T> & Props;

const View = forwardRef(
  <T extends ElementType = 'div'>({ as, className, ...props }: PolymorphicProps<T>, ref: PolymorphicRef<T>) => {
    const Element = as || 'div';
    return <Element ref={ref} className={className} {...props} />;
  },
);
export default View;

View.displayName = 'View';
