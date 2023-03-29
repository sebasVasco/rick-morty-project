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

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingLoadingBarComponent } from './layout/components/routing-loading-bar/routing-loading-bar.component';

@NgModule({
  declarations: [MainLayoutComponent, NotFoundComponent, RoutingLoadingBarComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
  ],
  exports: [MainLayoutComponent, NotFoundComponent],
})
export class CoreModule {}
