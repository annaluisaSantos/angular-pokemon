import { Component } from '@angular/core';
import { PokemonService } from '../PokemonService';
import { Pokemon } from '../pokemon-list/Pokemon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  pokemons: Pokemon[] = [];


  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemon().subscribe();
  }
 
 

}
