import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  ngOnInit(){
   this.pokemon = new Pokemon(); 
  }

}
