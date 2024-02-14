import { Component } from '@angular/core';
import { PokemonService } from '../PokemonService';
import { Pokemon } from '../pokemon-list/Pokemon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  addForm: FormGroup;
  editForm: FormGroup;

  constructor(private fb: FormBuilder, private pokemonService: PokemonService) {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      type: ['', Validators.required],
    });

    this.editForm = this.fb.group({
      pokemonId: ['', Validators.required],
      newName: ['', Validators.required],
      newWeight: ['', Validators.required],
      newHeight: ['', Validators.required],
      newType: ['', Validators.required],
    });


  }
  resetAddForm(): void {
    this.addForm.reset();
  }

  resetEditForm(): void {
    this.editForm.reset();
  }

  addPokemon(): void {
    const newPokemon = this.addForm.value;

    this.pokemonService.addPokemon(newPokemon).subscribe(
      (response) => {
        console.log('Pokemon added with sucess:', response);
        this.resetAddForm();
      },
      (error) => {
        console.error('Error adding new pokemon:', error);
      }
    );
  }
  editPokemon(): void {
    const { pokemonId, newName, newWeight, newHeight, newType } = this.editForm.value;

    const updatedPokemon: Pokemon = {
        number: pokemonId,
        name: newName,
        weight: newWeight,
        height: newHeight,
        types: newType,
        image: ''
    };

    this.pokemonService.updatePokemon(updatedPokemon).subscribe(
      (response) => {
        console.log('Updated:', response);
        this.resetEditForm();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  deletePokemon(): void {
    const pokemonId = this.editForm.get('pokemonId')?.value;

    this.pokemonService.deletePokemon(pokemonId).subscribe(
      (response) => {
        console.log('Deleted!', response);
        this.resetEditForm();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}

