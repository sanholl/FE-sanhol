"use client";

import { PlaceType } from '@/@types/types';
import SidebarContainer from '@/src/widgets/SidebarContainer';
import { createSupabaseBrowserClient } from '@/supabase/lib/createClient';
import { Session } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';
import ChatLocation from "src/features/ChatGpt/ui/ChatLocation";

const ChatLocationPage = () => {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState("");

  const supabase = createSupabaseBrowserClient();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
    {session && session.user}
    <SidebarContainer places={places} setPlaces={setPlaces} setSelectedPlaceId={setSelectedPlaceId}/>
    </>
  );
};

export default ChatLocationPage;
