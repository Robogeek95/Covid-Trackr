import { IonicModule } from '@ionic/angular';
import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { SearchModalComponent } from './search-modal/search-modal.component';

@NgModule({
    declarations: [MapComponent, SearchModalComponent],
    imports: [IonicModule],
    exports: [MapComponent, SearchModalComponent]
})

export class ComponentsModule { }
