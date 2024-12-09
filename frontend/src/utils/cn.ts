import { cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export function cn(...classes: (string | undefined)[]) {
  return twMerge(cx(classes));
}
