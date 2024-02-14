import { Component } from '@angular/core';
import { Type } from './Type';
import { Pokemon } from './Pokemon';
import { PokemonService } from '../PokemonService';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  query: any = "";
  pokemons: any = [];
  pokemonsFiltred: any = [];
  constructor(
    private pokemonService: PokemonService
  ) {

    pokemonService.getPokemon().subscribe(
      (result: any) => {

        result.forEach((element: any) => {
          const pokemon: Pokemon = {
            number: element.id,
            name: element.name,
            weight: element.weight,
            height: element.height,
            image: pokemonService.imageUrl + element.id + '.png',
            types: element.types,
          };

          this.pokemons[element.id] = pokemon;
        });
        this.pokemonsFiltred = this.pokemons;
      });
  }
  search() {

    if (this.query != "") {
      this.pokemonsFiltred = this.pokemons.filter((pokemon: Pokemon) => pokemon.name.toLocaleLowerCase().includes(this.query.toLowerCase()));
    } else {
      this.pokemonsFiltred = this.pokemons;
    }
  }
}



