import { CaseBoxComponent } from './case-box/case-box.component';
import { CountryMenuComponent } from './country-menu/country-menu.component';
import { IonicModule } from '@ionic/angular';
import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { ColorCodeComponent } from './color-code/color-code.component';
import { CommonModule } from '@angular/common';
import { CaseMenuComponent } from './case-menu/case-menu.component';

@NgModule({
    declarations: [
        MapComponent,
        ColorCodeComponent,
        CountryMenuComponent,
        CaseBoxComponent,
        CaseMenuComponent
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        MapComponent,
        ColorCodeComponent,
        CountryMenuComponent,
        CaseBoxComponent,
        CaseMenuComponent
    ]
})

export class ComponentsModule { }
