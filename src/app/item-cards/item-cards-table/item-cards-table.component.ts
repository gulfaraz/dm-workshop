import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectCustomEvent } from '@ionic/angular';

import { Card, sizes } from '../item-cards.type';

@Component({
    selector: 'app-item-cards-table',
    templateUrl: './item-cards-table.component.html',
    styleUrls: ['./item-cards-table.component.scss'],
})
export class ItemCardsTableComponent {
    @Input() cards: Card[] = [];
    @Output() deleteCardEvent = new EventEmitter<Card>();
    @Output() loadCardEvent = new EventEmitter<Card>();

    sizes = sizes;

    setCardSize = (card: Card, selectCustomEvent: SelectCustomEvent) =>
        (card.size = selectCustomEvent.detail.value);

    deleteCard = (card: Card) => this.deleteCardEvent.emit(card);

    loadCard = (card: Card) => this.loadCardEvent.emit(card);
}
