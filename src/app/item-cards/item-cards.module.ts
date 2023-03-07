import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { ItemCardsComponent } from './item-cards.component';
import { ItemCardsControlsComponent } from './item-cards-controls/item-cards-controls.component';
import { ItemCardEditorComponent } from './item-card-editor/item-card-editor.component';
import { ItemCardsTableComponent } from './item-cards-table/item-cards-table.component';
import { ItemCardsViewerComponent } from './item-cards-viewer/item-cards-viewer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: ItemCardsComponent }]),
        IonicModule,
        SharedModule,
    ],
    declarations: [
        ItemCardsComponent,
        ItemCardsControlsComponent,
        ItemCardEditorComponent,
        ItemCardsTableComponent,
        ItemCardsViewerComponent,
    ],
    exports: [
        ItemCardsComponent,
        ItemCardsControlsComponent,
        ItemCardEditorComponent,
        ItemCardsTableComponent,
        ItemCardsViewerComponent,
    ],
})
export class ItemCardsModule {}
