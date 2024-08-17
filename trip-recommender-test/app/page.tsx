"use client";

import React, { useState } from 'react';
import styled from '@emotion/styled';
import KakaoMapScriptLoader from '@/src/features/map/ui/KakaoMapScriptLoader';
import DynamicMap from '@/src/features/map/ui/DynamicMap';
import MapMarkerController from '@/src/features/map/ui/MapMarkerController';
import SidebarContainer from '@/src/widgets/SidebarContainer';
import { PlaceType } from '@/@types/types';
import { PlaceAndMyTripProvider } from '@/src/entities/map/lib/context/PlaceAndMyTripProvider';


const Page = ({ children }: { children: React.ReactNode }) => {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState("");

  return (
    <PlaceAndMyTripProvider>
      <KakaoMapScriptLoader>
        <DynamicMap>
          <MapMarkerController places={places} selectedPlaceId={selectedPlaceId} />
          {children}
        </DynamicMap>
      </KakaoMapScriptLoader>
    </PlaceAndMyTripProvider>
  );
};

export default Page;
