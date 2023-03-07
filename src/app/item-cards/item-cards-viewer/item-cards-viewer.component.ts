import { Component, Input } from '@angular/core';

import { Card } from '../item-cards.type';

@Component({
    selector: 'app-item-cards-viewer',
    templateUrl: './item-cards-viewer.component.html',
})
export class ItemCardsViewerComponent {
    @Input() cards: Card[] = [];
}
