import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ItemCardsComponent } from './item-cards.component';

@NgModule({
    imports: [
        IonicModule,
        RouterModule.forChild([{ path: '', component: ItemCardsComponent }]),
    ],
    declarations: [ItemCardsComponent],
    exports: [ItemCardsComponent],
})
export class ItemCardsModule {}
