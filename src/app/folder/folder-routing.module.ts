import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { CountryMenuComponent } from '../components/country-menu/country-menu.component';

const routes: Routes = [
  // {
  //   path: 'map',
  //   pathMatch: 'full',
  //   component: FolderPage,
  //   children: [
  //     { path: 're', component: CountryMenuComponent }
  //   ]
  // },

  {
    path: '',
    component: FolderPage,
    children: [
      {
        path: ':country',
        component: CountryMenuComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule { }
