import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { ExplorerComponent } from '../components/explorer/explorer.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children: [
      {
        path: ':country',
        component: ExplorerComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule { }
