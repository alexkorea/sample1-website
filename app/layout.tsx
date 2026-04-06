import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
})

export const metadata: Metadata = {
  title: '한길 행정사 사무소 | 비자·이민·행정 전문',
  description: '외국인 비자, 체류자격 변경, 사업자등록, 각종 인허가 업무 전문 행정사 사무소입니다. 신속하고 정확한 행정 서비스를 제공합니다.',
  generator: 'v0.app',
  keywords: ['행정사', '비자', '이민', '체류자격', '외국인등록', '사업자등록', '인허가'],
  openGraph: {
    title: '한길 행정사 사무소 | 비자·이민·행정 전문',
    description: '외국인 비자, 체류자격 변경, 사업자등록, 각종 인허가 업무 전문 행정사 사무소입니다.',
    type: 'website',
    locale: 'ko_KR',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
