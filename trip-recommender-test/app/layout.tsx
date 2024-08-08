import React from "react";
import type { Metadata } from "next";
import '../styles/globals.css'

export const metadata: Metadata = {
  title: "Trip Recommender",
  description: "AI를 이용한 여행 일정 추천 서비스",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="gnb">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="lnb">
          <nav>
            <ul>
              <li>
                <a href="/section1">Section 1</a>
              </li>
              <li>
                <a href="/section2">Section 2</a>
              </li>
              <li>
                <a href="/section3">Section 3</a>
              </li>
            </ul>
          </nav>
        </div>
        <main id="root">{children}</main>
      </body>
    </html>
  );
}
