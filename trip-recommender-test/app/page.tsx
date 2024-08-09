"use client";

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PlaceProvider } from '@/src/entities/map/lib/context/PlaceProvider';
import KakaoMapScriptLoader from '@/src/features/map/ui/KakaoMapScriptLoader';
import DynamicMap from '@/src/features/map/ui/DynamicMap';
import MapMarkerController from '@/src/features/map/ui/MapMarkerController';
import SidebarContainer from '@/src/widgets/SidebarContainer';
import { PlaceType } from '@/@types/types';


const Page = () => {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState("");

  return (
    <PlaceProvider>
      <KakaoMapScriptLoader>
        <DynamicMap>
          <MapMarkerController places={places} selectedPlaceId={selectedPlaceId} />
          <SidebarContainer places={places} setPlaces={setPlaces} setSelectedPlaceId={setSelectedPlaceId}/>
        </DynamicMap>
      </KakaoMapScriptLoader>
    </PlaceProvider>
  );
};

export default Page;
