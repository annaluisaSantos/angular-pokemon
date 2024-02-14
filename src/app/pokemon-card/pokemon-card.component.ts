import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon-list/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {


  @Input()
  public pokemon: Pokemon;



  constructor() {
    this.pokemon = {} as Pokemon;
  }


  public leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}
