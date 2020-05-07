import { IonicModule } from '@ionic/angular';
import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { ColorCodeComponent } from './color-code/color-code.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [MapComponent, ColorCodeComponent],
    imports: [IonicModule, CommonModule],
    exports: [MapComponent, ColorCodeComponent]
})

export class ComponentsModule { }
