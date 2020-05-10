import { CaseBoxComponent } from './case-box/case-box.component';
import { CountryMenuComponent } from './country-menu/country-menu.component';
import { IonicModule } from '@ionic/angular';
import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { ColorCodeComponent } from './color-code/color-code.component';
import { CommonModule } from '@angular/common';
import { CaseMenuComponent } from './case-menu/case-menu.component';
import { ExpandablesComponent } from './expandables/expandables.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        MapComponent,
        ColorCodeComponent,
        CountryMenuComponent,
        CaseBoxComponent,
        CaseMenuComponent,
        ExpandablesComponent,
        ExplorerComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        MapComponent,
        ColorCodeComponent,
        CountryMenuComponent,
        CaseBoxComponent,
        CaseMenuComponent,
        ExpandablesComponent,
        ExplorerComponent
    ]
})

export class ComponentsModule { }
