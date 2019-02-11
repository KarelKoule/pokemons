import { Component } from '@angular/core';
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
  <ng-container *ngIf="(pokemons$ | async).length >0; else loading">
    <app-pokemon [pokemons]="pokemons$ | async"></app-pokemon>
    </ng-container>

    <ng-template #loading>
    <div class="la-ball-atom la-dark">
    <div></div>
    <div></div>
    <div></div>
    <div></div>

</div>
  <p>Loading...</p>
    </ng-template>
  `
  ,
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  pokemons$: Observable<PokemonList>



  constructor(private pokemonService: PokemonService, private store: Store<State>) {
    this.pokemons$ = this.pokemonService.pokemonsList$
    // this.pokemons3$ = this.store.pipe(select('pokemon'), select('pokemons'))


    // this.pokemons2$ = from([])
    // setTimeout(() => this.pokemons2$ = this.pokemonService.pokemonsList$, 5000)




  }

  reloadPokemons = () => this.store.dispatch(new ClearPokemons())

}
