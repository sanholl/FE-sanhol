import React from 'react';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trip Recommender',
  description: 'AI를 이용한 여행 일정 추천 서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}