import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { ItemCardsComponent } from './item-cards.component';
import { ItemCardsControlsComponent } from './item-cards-controls/item-cards-controls.component';
import { ItemCardEditorComponent } from './item-card-editor/item-card-editor.component';
import { ItemCardsTableComponent } from './item-cards-table/item-cards-table.component';
import { ItemCardsViewerComponent } from './item-cards-viewer/item-cards-viewer.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemCardSetsComponent } from './item-card-sets/item-card-sets.component';
import { ItemCardsService } from './item-cards.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: ItemCardsComponent }]),
        FormsModule,
        IonicModule,
        SharedModule,
    ],
    declarations: [
        ItemCardsComponent,
        ItemCardsControlsComponent,
        ItemCardEditorComponent,
        ItemCardsTableComponent,
        ItemCardsViewerComponent,
        ItemCardComponent,
        ItemCardSetsComponent,
    ],
    exports: [
        ItemCardsComponent,
        ItemCardsControlsComponent,
        ItemCardEditorComponent,
        ItemCardsTableComponent,
        ItemCardsViewerComponent,
        ItemCardComponent,
        ItemCardSetsComponent,
    ],
    providers: [ItemCardsService],
})
export class ItemCardsModule {}
