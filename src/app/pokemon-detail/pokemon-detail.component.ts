import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Store, select } from '@ngrx/store';
import { PokemonList } from '../model/pokemon.model';
import { Observable } from 'rxjs';
import { State } from '../reducers/pokemon.reducer';
import { ClearPokemons } from '../actions/pokemon.actions';

@Component({
  selector: 'app-pokemon-detail',
  template: `
  <button type='button' class='btn btn-secondary' (click)="reloadPokemons()">pokemons reload</button>
  <app-pokemon [pokemons]="pokemons$ | async"></app-pokemon>
  `,
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {

  pokemons$: Observable<PokemonList>


  constructor(private pokemonService: PokemonService, private store: Store<State>) {
    // this.pokemons$ = this.pokemonService.pokemonsList$
    this.pokemons$ = this.store.pipe(select('pokemon'), select('pokemons'))
  }

  reloadPokemons = () => this.store.dispatch(new ClearPokemons())
}
