import { Component } from '@angular/core';

import { Card } from './item-cards.type';

@Component({
    selector: 'app-item-cards',
    templateUrl: './item-cards.component.html',
})
export class ItemCardsComponent {
    cards: Card[] = [];
    preview = false;

    togglePreview = (preview: boolean) => (this.preview = preview);
}
