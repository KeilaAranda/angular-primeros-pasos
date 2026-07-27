import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  public Character: Character ={
    name: 'Keila',
    power: 0
  };

  emitCharacter():void{
    console.log(this.Character);
  }
}
