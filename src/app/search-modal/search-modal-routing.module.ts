import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchModalPage } from './search-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SearchModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchModalPageRoutingModule {}
