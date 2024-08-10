"use client"

import React, { useEffect } from 'react';
import { createSupabaseBrowserClient } from '@/supabase/lib/createClient';
import { useRouter } from 'next/router';
import { SideContainer } from '@/src/shared/ui/styles/SideContainer';

export default function LogoutPage() {
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut();
      router.push('/login');
    };

    logout();
  }, []);

  return <SideContainer>Logging out...</SideContainer>;
}