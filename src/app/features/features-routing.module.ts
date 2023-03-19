import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'character',
  },
  {
    path: 'character',
    loadChildren: () => import('./character/character.module').then((m) => m.CharacterModule),
  },
  {
    path: 'episode',
    loadChildren: () => import('./episode/episode.module').then((m) => m.EpisodeModule),
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then((m) => m.LocationModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
