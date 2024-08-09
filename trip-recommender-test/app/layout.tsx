import React from "react";
import type { Metadata } from "next";
import './layout.styles.css';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trip Recommender",
  description: "AI를 이용한 여행 일정 추천 서비스",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="lnb">
          <Link href="/home">HOME</Link>
          <Link href="/search">Search</Link>
          <Link href="/my-trip">My Trip</Link>
          <Link href="/login">LOGIN</Link>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}