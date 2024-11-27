import { Noto_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const GmarketSans = localFont({
  src: '../../public/fonts/GmarketSans.woff2',
  variable: '--font-gmarket-sans',
  display: 'swap',
});

export const NotoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
});
