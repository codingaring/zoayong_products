import type { Metadata } from 'next';
import { GmarketSans } from '@styles/fonts';

export const metadata: Metadata = {
  title: '조아용in스토어 상품 소개서',
  description: `용인특례시 공식 캐릭터 '조아용'을 활용한 굿즈 상품 목록을 확인해보세요!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={GmarketSans.className}>{children}</body>
    </html>
  );
}
