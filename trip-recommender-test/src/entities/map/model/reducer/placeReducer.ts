import { PlaceType } from "../../../../../@types/types";

export type PlaceState = {
  selectedPlace: PlaceType | null;
};

export type PlaceAction =
  | { type: 'SET_PLACE'; payload: PlaceType }
  | { type: 'CLEAR_PLACE' };

export const placeReducer = (state: PlaceState, action: PlaceAction): PlaceState => {
  switch (action.type) {
    case 'SET_PLACE':
      return { ...state, selectedPlace: action.payload };
    case 'CLEAR_PLACE':
      return { ...state, selectedPlace: null };
    default:
      return state;
  }
};