import { ExplorerPage } from './../explorer/explorer.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ComponentsModule } from '../components/components.module';
import { MarkerService } from '../marker.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FolderPageRoutingModule
  ],
  providers: [
    MarkerService
  ],
  declarations: [FolderPage, ExplorerPage]
})
export class FolderPageModule {}
