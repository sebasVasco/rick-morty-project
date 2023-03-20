import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CharacterService } from '@app/core/services/character/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  myNum: number;
  constructor(private characterService: CharacterService) {
    this.myNum = 1;
  }

  ngOnInit(): void {
    this.characterService.getCharacters(1).subscribe((res) => {
      console.log('res', res);
    });
  }
}
