import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonList } from '../model/pokemon.model';
import { Store } from '@ngrx/store';
import { PokemonService } from '../services/pokemon.service';
import { State } from '../reducers/pokemon.reducer';
import { ClearPokemons } from '../actions/pokemon.actions';

@Component({
  selector: 'app-pokemon-list',
  template: `
    <button type='button' class='btn btn-primary' (click)="reloadPokemons()">reload pokemons</button>
    <app-pokemon [pokemons]="pokemons$ | async"></app-pokemon>
    <app-pokemon [pokemons]="pokemons2$ | async"></app-pokemon>
    <app-pokemon [pokemons]="pokemons3$ | async"></app-pokemon>

  `
  ,
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

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
