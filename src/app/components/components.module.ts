import { CaseBoxComponent } from './case-box/case-box.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ColorCodeComponent } from './color-code/color-code.component';
import { CommonModule } from '@angular/common';
import { ExpandablesComponent } from './expandables/expandables.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ColorCodeComponent,
        CaseBoxComponent,
        ExpandablesComponent,
        ExplorerComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        ColorCodeComponent,
        CaseBoxComponent,
        ExpandablesComponent,
        ExplorerComponent
    ]
})

export class ComponentsModule { }
