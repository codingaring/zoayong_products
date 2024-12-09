import { Noto_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const GmarketSans = localFont({
  src: [
    { path: '../../public/fonts/GmarketSans.woff2', weight: '100' },
    { path: '../../public/fonts/GmarketSans.woff2', weight: '400' },
    { path: '../../public/fonts/GmarketSans.woff2', weight: '600' },
    { path: '../../public/fonts/GmarketSans.woff2', weight: '900' },
  ],
  variable: '--font-gmarket-sans',
  display: 'swap',
});

export const NotoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
  weight: '900',
});
