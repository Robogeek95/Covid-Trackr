import { SearchComponent } from './search/search.component';
import { CountryBoxComponent } from './country-box/country-box.component';
import { CaseBoxComponent } from './case-box/case-box.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ColorCodeComponent } from './color-code/color-code.component';
import { CommonModule } from '@angular/common';
import { ExpandablesComponent } from './expandables/expandables.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ColorCodeComponent,
        CaseBoxComponent,
        ExpandablesComponent,
        ExplorerComponent,
        CountryBoxComponent,
        SearchComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        ColorCodeComponent,
        CaseBoxComponent,
        ExpandablesComponent,
        ExplorerComponent,
        CountryBoxComponent,
        SearchComponent
    ]
})

export class ComponentsModule { }
