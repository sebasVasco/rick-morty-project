import { Component, Input } from '@angular/core';
import { CharacterSchema } from '@app/core/schemas/character.schema';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() character!: CharacterSchema;
}
