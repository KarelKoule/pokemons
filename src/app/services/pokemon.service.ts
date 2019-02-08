import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { filter, withLatestFrom, share, tap, combineLatest, startWith } from 'rxjs/operators';
import { LoadPokemons } from '../actions/pokemon.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonService {

  constructor(private store: Store<State>) { }


  needLoadPokemons$ = this.store.pipe(
    select('pokemon')
    , select('pokemons')
    , filter(need => need.length < 1)
    , tap(() => this.store.dispatch(new LoadPokemons()))
    , share()
  )

  pokemons$ = this.store.pipe(select('pokemon'), select("pokemons"))

  pokemonsList$ = this.pokemons$.pipe(
    combineLatest(this.needLoadPokemons$.pipe(startWith(true)), (a, b) => a))





}
