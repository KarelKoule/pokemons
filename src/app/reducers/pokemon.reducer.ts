import { Action } from '@ngrx/store';
import { PokemonList } from '../model/pokemon.model';
import { PokemonActions, PokemonActionTypes } from '../actions/pokemon.actions';


export interface State {
  pokemons: PokemonList
}

export const initialState: State = {
  pokemons: [{ name: "kokos", url: "papaa" }]
}

export function reducer(state = initialState, action: PokemonActions): State {
  switch (action.type) {
    case PokemonActionTypes.PokemonsLoaded:
      console.log("loaded " + action.payload)
      return { ...state, pokemons: action.payload }
    default:
      return state
  }
}
