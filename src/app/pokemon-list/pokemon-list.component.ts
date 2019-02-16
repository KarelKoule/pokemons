import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
import { PokemonList } from '../model/pokemon.model';
import { Store } from '@ngrx/store';
import { PokemonService } from '../services/pokemon.service';
import { State } from '../reducers/pokemon.reducer';
import { ClearPokemons, PokemonsLoaded } from '../actions/pokemon.actions';
import { filter, map, tap, combineLatest, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  template: `
    <button type='button' class='btn btn-primary' (click)="reloadPokemons()">reload pokemons</button>
    <app-filter (filterText)="filter$.next($event)"></app-filter>
  <ng-container *ngIf="(pokemons$ | async).length >0; else loading">
    <app-pokemon [pokemons]="filteredPokemons$ | async"></app-pokemon>
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

  pokemons$ = this.pokemonService.pokemonsList$

  filter$ = new Subject<string>()

  filteredPokemons$ = this.pokemons$.pipe(
    combineLatest(this.filter$.pipe(startWith("")), (pokemons, filterString) => {
      console.log("combine: " + pokemons.length + " - " + filterString);

      return pokemons.filter(p => p.name.includes(filterString))
    })

  )


  constructor(private pokemonService: PokemonService, private store: Store<State>) {
  }

  reloadPokemons = () => this.store.dispatch(new ClearPokemons())

}
