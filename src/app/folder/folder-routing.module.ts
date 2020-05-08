import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { CaseMenuComponent } from '../components/case-menu/case-menu.component';

const routes: Routes = [
    {
    path: '',
    component: FolderPage,
    children: [
      {
        path: ':country',
        component: CaseMenuComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule { }
