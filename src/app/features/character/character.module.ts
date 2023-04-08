import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './page/character/character.component';

import { SharedModule } from '@app/shared/shared.module';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterFilterComponent } from './components/character-filter/character-filter.component';

@NgModule({
  declarations: [CharacterCardComponent, CharacterComponent, CharacterFilterComponent],
  imports: [CharacterRoutingModule, CommonModule, SharedModule],
})
export class CharacterModule {}
