import { IonicModule } from '@ionic/angular';
import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [MapComponent],
    imports: [IonicModule],
    exports: [MapComponent]
})

export class ComponentsModule { }
