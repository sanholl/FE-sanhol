import { Tables } from "@/@types/database.types";


type MyTripRow = Tables<'tr_recommendation'>;


export type MyTripState = {
  // myTripList: MyTripRow[] | null;
  myTrip: string | null;
};

export type MyTripAction =
  // | { type: 'SET_MYTRIP_LIST'; payload: MyTripRow[] }
  | { type: 'SET_MYTRIP'; payload: string }
  // | { type: 'CLEAR_MYTRIP_LIST' }
  | { type: 'CLEAR_MYTRIP' };

export const myTripReducer = (state: MyTripState, action: MyTripAction): MyTripState => {
  switch (action.type) {
    // case 'SET_MYTRIP_LIST':
    //   return { ...state, myTripList: action.payload };
    // case 'CLEAR_MYTRIP_LIST':
    //   return { ...state, myTripList: null };
    case 'SET_MYTRIP':
      return { ...state, myTrip: action.payload };
    case 'CLEAR_MYTRIP':
      return { ...state, myTrip: null };
    default:
      return state;
  }
};
