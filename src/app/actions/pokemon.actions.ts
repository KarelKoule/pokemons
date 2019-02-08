import { Action } from '@ngrx/store';
import { PokemonList } from '../model/pokemon.model';

export enum PokemonActionTypes {
  LoadPokemons = '[Pokemon] Load Pokemons'
  , PokemonsLoaded = '[Pokemon] Pokemons Loaded'
  , ClearPokemons = '[Pokemon] Pokemons Clear'
}

export class LoadPokemons implements Action {
  readonly type = PokemonActionTypes.LoadPokemons;
}

export class PokemonsLoaded implements Action {
  readonly type = PokemonActionTypes.PokemonsLoaded;
  constructor(public payload: PokemonList) { }
}

export class ClearPokemons implements Action {
  readonly type = PokemonActionTypes.ClearPokemons;
}

export type PokemonActions = LoadPokemons | PokemonsLoaded | ClearPokemons;
