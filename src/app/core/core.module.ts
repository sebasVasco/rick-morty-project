import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingLoadingBarComponent } from './layout/components/routing-loading-bar/routing-loading-bar.component';
import { FilterContainerComponent } from './layout/components/filter-container/filter-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilterContainerComponent,
    MainLayoutComponent,
    NotFoundComponent,
    RoutingLoadingBarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [FilterContainerComponent, MainLayoutComponent, NotFoundComponent],
})
export class CoreModule {}
