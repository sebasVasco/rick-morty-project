import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatGridListModule, RouterModule],
  exports: [MatButtonModule, MatCardModule, MatGridListModule],
})
export class SharedModule {}
