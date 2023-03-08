import { Component } from '@angular/core';

import { Card, sizes } from './item-cards.type';

@Component({
    selector: 'app-item-cards',
    templateUrl: './item-cards.component.html',
})
export class ItemCardsComponent {
    cards: Card[] = [];
    preview = false;

    togglePreview = (preview: boolean) => (this.preview = preview);

    deleteCard = (card: Card) =>
        (this.cards = this.cards.filter((_card) => _card !== card));

    autoAssignSizes = () =>
        this.cards.forEach((card) => (card.size = sizes[0]));
}
