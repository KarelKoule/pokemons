import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PokemonList } from '../model/pokemon.model';

@Component({
  selector: 'app-pokemon',
  template: `
    <ul>
    <li
    *ngFor="let pokemon of pokemons" >
    {{pokemon.name}}
    </li>
    </ul>
  `,
  styles: []
})
export class PokemonComponent {
  searchText = ""

  @Input()
  pokemons: PokemonList = []
}
