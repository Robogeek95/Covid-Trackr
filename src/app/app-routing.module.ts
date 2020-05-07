import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CountryMenuComponent } from './components/country-menu/country-menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'map/global',
    pathMatch: 'full'
  },
  {
    path: 'map',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule),
  },
  {
    path: 'search-page',
    loadChildren: () => import('./search-page/search-page.module').then(m => m.SearchPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
