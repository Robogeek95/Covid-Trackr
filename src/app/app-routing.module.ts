import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'distribution/global',
    pathMatch: 'full'
  },
  {
    path: 'distribution',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule),
  },
  {
    path: 'search-modal',
    loadChildren: () => import('./search-modal/search-modal.module').then( m => m.SearchModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
