import { SearchModalPageModule } from './../search-modal/search-modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ComponentsModule } from '../components/components.module';
import { MarkerService } from '../services/marker.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SearchModalPageModule,
    FolderPageRoutingModule
  ],
  providers: [
    MarkerService
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
