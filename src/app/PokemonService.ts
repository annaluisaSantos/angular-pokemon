import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, from, map, mergeMap } from 'rxjs';
import { Pokemon } from './pokemon-list/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  imageUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  allPokemonUrl: string = 'https://softwium.com/api/pokemons';

  constructor(
    private httpClient: HttpClient
  ) {

  }

  getPokemon() {
    return this.httpClient.get<any>(this.allPokemonUrl).pipe();
  }


  addPokemon(newPokemon: Pokemon): Observable<any> {
    return this.httpClient.post<any>(this.allPokemonUrl, newPokemon);
  }

  updatePokemon(updatedPokemon: Pokemon): Observable<any> {
    const updateUrl = `${this.allPokemonUrl}/${updatedPokemon.name}`;
    return this.httpClient.put<any>(updateUrl, updatedPokemon);
  }

  deletePokemon(pokemonId: number): Observable<any> {
    const deleteUrl = `${this.allPokemonUrl}/${pokemonId}`;
    return this.httpClient.delete<any>(deleteUrl);
  }



}

