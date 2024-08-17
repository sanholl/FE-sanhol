"use client";

import { Tables } from "@/@types/database.types";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Container, RemoveButton, ToggleButton } from "./MyTrip.styles";
import { MyTripList } from "@/src/features/ChatGpt/ui/MyTripList";
import { useMyTripState, useMyTripDispatch } from "@/src/entities/map/lib/context/PlaceAndMyTripProvider";
import { MyTripContainer } from "@/src/features/ChatGpt/ui/MyTripContainer";


type MyTripList = Tables<'tr_recommendation'>;

const MyTrip = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [myTripList, setMyTripList] = useState<MyTripList[]>([]);
  const myTripState = useMyTripState();
  const myTripDispatch = useMyTripDispatch();
  const myTripId = myTripState.myTrip;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Container
        isOpen={isSidebarOpen}
        isMyTripOpen={!!myTripId}
      >
        { !myTripList ? (
          <p>Loading...</p>
        ) : (
          <MyTripList myTripList={myTripList} setMyTripList={setMyTripList} />
        )}
        { myTripId && <MyTripContainer myTripId={myTripId}/>}
        <ToastContainer />
        <RemoveButton
          isMyTripOpen={!myTripId}
          isOpen={isSidebarOpen}
          onClick={() => myTripDispatch({ type: "CLEAR_MYTRIP" })}
        >
          X
        </RemoveButton>
        <ToggleButton
          isOpen={isSidebarOpen}
          isMyTripOpen={!!myTripId}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? "<" : ">"}
        </ToggleButton>
      </Container>
    </>
  );
};

export default MyTrip;
