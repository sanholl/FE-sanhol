import React, { createContext, useReducer, ReactNode, Dispatch, useContext, FC, PropsWithChildren } from 'react';
import { PlaceAction, PlaceState, placeReducer } from '../../model/reducer/placeReducer';
import { MyTripAction, myTripReducer, MyTripState } from '../../model/reducer/myTripReducer';

interface PlaceAndMyTripProviderProps {
  children: ReactNode
}

const initialPlaceState: PlaceState = {
  selectedPlace: null,
};
const initialMyTripState: MyTripState = {
  // myTripList: [],
  myTrip: null
}

const PlaceStateContext = createContext<PlaceState | null>(null);
const PlaceDispatchContext = createContext<Dispatch<PlaceAction> | null>(null);
const MyTripStateContext = createContext<MyTripState | null>(null);
const MyTripDispatchContext = createContext<Dispatch<MyTripAction> | null>(null);

export const PlaceAndMyTripProvider: FC<PropsWithChildren<PlaceAndMyTripProviderProps>> = ({ children }) => {
  const [placeState, placeDispatch] = useReducer(placeReducer, initialPlaceState);
  const [myTripState, myTripDispatch] = useReducer(myTripReducer, initialMyTripState);


  return (
    <PlaceStateContext.Provider value={placeState}>
      <PlaceDispatchContext.Provider value={placeDispatch}>
        <MyTripStateContext.Provider value={myTripState}>
          <MyTripDispatchContext.Provider value={myTripDispatch}>
            {children}
          </MyTripDispatchContext.Provider>
        </MyTripStateContext.Provider>
      </PlaceDispatchContext.Provider>
    </PlaceStateContext.Provider>
  );
};

export const usePlaceState = () => {
  const value = useContext(PlaceStateContext);

  if(!value) {
    throw new Error('cannot find PlaceStateContext');
  }

  return value;
}
export const usePlaceDispatch = () => {
  const value = useContext(PlaceDispatchContext);

  if(!value) {
    throw new Error('cannot find PlaceDispatchContext');
  }

  return value;
}
export const useMyTripState = () => {
  const value = useContext(MyTripStateContext);

  if(!value) {
    throw new Error('cannot find MyTripStateContext');
  }

  return value;
}
export const useMyTripDispatch = () => {
  const value = useContext(MyTripDispatchContext);

  if(!value) {
    throw new Error('cannot find MyTripDispatchContext');
  }

  return value;
}