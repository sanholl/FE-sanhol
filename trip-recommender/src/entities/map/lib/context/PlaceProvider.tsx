import React, { createContext, useReducer, ReactNode, Dispatch, useContext, FC, PropsWithChildren } from 'react';
import { PlaceAction, PlaceState, placeReducer } from '../../model/reducer/placeReducer';

interface PlaceProviderProps {
  children: ReactNode
}

const initialState: PlaceState = {
  selectedPlace: null,
};

const PlaceStateContext = createContext<PlaceState | null>(null);
const PlaceDispatchContext = createContext<Dispatch<PlaceAction> | null>(null);

export const PlaceProvider: FC<PropsWithChildren<PlaceProviderProps>> = ({ children }) => {
  const [state, dispatch] = useReducer(placeReducer, initialState);

  return (
    <PlaceStateContext.Provider value={state}>
      <PlaceDispatchContext.Provider value={dispatch}>
        {children}
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