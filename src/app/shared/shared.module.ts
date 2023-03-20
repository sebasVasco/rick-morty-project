import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterModule],
  exports: [MatButtonModule, MatCardModule],
})
export class SharedModule {}
