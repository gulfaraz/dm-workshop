import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { ItemCardsComponent } from './item-cards.component';
import { ItemCardEditorComponent } from './item-card-editor/item-card-editor.component';
import { ItemCardsTableComponent } from './item-cards-table/item-cards-table.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: ItemCardsComponent }]),
        IonicModule,
        SharedModule,
    ],
    declarations: [
        ItemCardsComponent,
        ItemCardEditorComponent,
        ItemCardsTableComponent,
    ],
    exports: [
        ItemCardsComponent,
        ItemCardEditorComponent,
        ItemCardsTableComponent,
    ],
})
export class ItemCardsModule {}
