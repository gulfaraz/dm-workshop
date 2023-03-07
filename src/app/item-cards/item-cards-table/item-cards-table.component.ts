import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemReorderCustomEvent, SelectCustomEvent } from '@ionic/angular';

import { Card, sizes } from '../item-cards.type';

@Component({
    selector: 'app-item-cards-table',
    templateUrl: './item-cards-table.component.html',
    styleUrls: ['./item-cards-table.component.scss'],
})
export class ItemCardsTableComponent {
    @Input() cards: Card[] = [];
    @Output() deleteCardEvent = new EventEmitter<Card>();

    sizes = sizes;

    reorderCard(itemReorderCustomEvent: ItemReorderCustomEvent) {
        this.cards = itemReorderCustomEvent.detail.complete(this.cards);
    }

    setCardSize = (card: Card, selectCustomEvent: SelectCustomEvent) =>
        (card.size = selectCustomEvent.detail.value);

    deleteCard = (card: Card) => this.deleteCardEvent.emit(card);
}
