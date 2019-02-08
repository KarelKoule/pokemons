import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoadPokemons, ClearPokemons } from './actions/pokemon.actions';
import { State } from './reducers';
import { Observable, from } from 'rxjs';
import { PokemonList } from './model/pokemon.model';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  template: `
    <h1> {{title}}</h1>
    <button (click)="reloadPokemons()">reload pokemons</button>
    <app-pokemon [pokemons]="pokemons$ | async"></app-pokemon>
    <app-pokemon [pokemons]="pokemons2$ | async"></app-pokemon>
    <app-pokemon [pokemons]="pokemons3$ | async"></app-pokemon>

  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'bigdatasample'
  pokemons$: Observable<PokemonList>
  pokemons2$: Observable<PokemonList>
  pokemons3$: Observable<PokemonList>


  constructor(private pokemonService: PokemonService, private store: Store<State>) {
    this.pokemons$ = this.pokemonService.pokemonsList$
    // this.pokemons3$ = this.store.pipe(select('pokemon'), select('pokemons'))
    this.pokemons2$ = this.pokemonService.pokemonsList$
    this.pokemons3$ = this.pokemonService.pokemonsList$

    // this.pokemons2$ = from([])
    // setTimeout(() => this.pokemons2$ = this.pokemonService.pokemonsList$, 5000)




  }

  reloadPokemons = () => this.store.dispatch(new ClearPokemons())

  ngOnInit() {
    // setTimeout(() => this.store.dispatch(new LoadPokemons()), 3000)
  }



}
