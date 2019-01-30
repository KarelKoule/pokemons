import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoadPokemons } from './actions/pokemon.actions';
import { State } from './reducers';
import { Observable } from 'rxjs';
import { PokemonList } from './model/pokemon.model';

@Component({
  selector: 'app-root',
  template: `
    <h1> {{title}}</h1>
    <app-pokemon [pokemons]="pokemons$ | async"></app-pokemon>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'bigdatasample';

  pokemons$: Observable<PokemonList>

  constructor(private store: Store<State>) {
    this.pokemons$ = this.store.pipe(select('pokemon'), select("pokemons"))
  }

  ngOnInit() {
    setTimeout(() => this.store.dispatch(new LoadPokemons()), 3000);
  }
}
