import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPokemon from './pokemon.reducer'

export interface State {

  pokemon: fromPokemon.State;
}

export const reducers: ActionReducerMap<State, any> = {

  pokemon: fromPokemon.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
