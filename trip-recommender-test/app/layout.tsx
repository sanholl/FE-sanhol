import React from "react";
import type { Metadata } from "next";
import './layout.styles.css';
import Link from "next/link";

import { FaHome } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { BiTrip } from "react-icons/bi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { createSupabaseServerClient } from "@/supabase/lib/createClient";
import { getServerSession } from "@/supabase/lib/googleAuth";



export const metadata: Metadata = {
  title: "Trip Recommender",
  description: "AI를 이용한 여행 일정 추천 서비스",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createSupabaseServerClient();
  const session = await getServerSession(supabase);

  return (
    <html lang="en">
      <body>
        <div className="lnb">
          <Link href="/">
            <FaHome size={30} />HOME
          </Link>
          <Link href="/search">
            <FaSearchLocation size={30} />Search
          </Link>
          <Link href="/myTrip">
            <BiTrip size={30} />My Trip
          </Link>
          {session ? (
            <Link href="/logout" className="login-link">
              <RiAccountPinCircleLine size={30} />LOGOUT
            </Link>
          ) : (
            <Link href="/login" className="login-link">
              <RiAccountPinCircleLine size={30} />LOGIN
            </Link>
          )}
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}