import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full'
  },
  {
    path: 'map',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule),
  },
  {
    path: 'map/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)

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
