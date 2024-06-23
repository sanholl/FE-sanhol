import { POKEMON_IMAGE_TYPE } from "../../../../shared/consts";



export type PokemonImageKeyType = typeof POKEMON_IMAGE_TYPE[keyof typeof POKEMON_IMAGE_TYPE]

export interface ImageTypeState {
  type: PokemonImageKeyType
}


export interface ChangeImageTypeAction {
  type: 'imageType'
  payload: PokemonImageKeyType
}

type ImageTypeAction = ChangeImageTypeAction;

const initialState: ImageTypeState = {
  type: POKEMON_IMAGE_TYPE.FRONT_DEFAULT,
};

export const pokemonImageReducer = (state: ImageTypeState = initialState, action: ImageTypeAction) => {
  switch (action.type) {
    case 'imageType':
      return {
        type: action.payload
      }

    default:
      return state
  }
};
