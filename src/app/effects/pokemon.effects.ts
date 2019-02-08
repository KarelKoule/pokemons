import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { PokemonActionTypes, PokemonsLoaded } from '../actions/pokemon.actions';
import { PokemonList, Pokemon } from '../model/pokemon.model';


@Injectable()
export class PokemonEffects {

  constructor(private actions$: Actions, private http: HttpClient) { }

  @Effect()
  loadPokemons$: Observable<Action> = this.actions$.pipe(
    ofType(PokemonActionTypes.LoadPokemons),
    switchMap(() => {
      return this.http.get<string>('https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/?offset=0&limit=2000')
        .pipe(
          map((result: any) => {
            console.log(result)
            return new PokemonsLoaded(
              result.results.map((element: Pokemon) => {
                return { name: element.name, url: element.url }
              })
            )
          })
        )
    })
  )

}
