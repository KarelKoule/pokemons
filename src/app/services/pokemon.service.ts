import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { filter, withLatestFrom, share, tap, combineLatest, startWith } from 'rxjs/operators';
import { LoadPokemons } from '../actions/pokemon.actions';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonList } from '../model/pokemon.model'
@Injectable()
export class PokemonService {

  constructor(private store: Store<State>) { }


  needLoadPokemons$ = this.store.pipe(
    select('pokemon')
    , select('pokemons')
    , tap(() => console.log("needload called"))
    , filter(need => need.length < 1)
    , tap(() => console.log("needload called2"))
    , tap(() => this.store.dispatch(new LoadPokemons()))
    , share()
  )

  pokemons$: Observable<PokemonList> = this.store.pipe(
    select('pokemon')
    , select("pokemons")
    , tap((p) => console.log("pokemons emited: " + p.length))
  )

  pokemonsList$ = this.pokemons$.pipe(
    combineLatest(this.needLoadPokemons$.pipe(startWith(true)), (a, b) => a)
    , tap((p) => console.log("combine emited: " + p.length))
  )

}
