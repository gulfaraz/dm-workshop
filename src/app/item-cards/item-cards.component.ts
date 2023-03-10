import { Component } from '@angular/core';

import { Card, cards } from './item-cards.type';

@Component({
    selector: 'app-item-cards',
    templateUrl: './item-cards.component.html',
})
export class ItemCardsComponent {
    cards: Card[] = cards;
    card = {} as Card;
    preview = false;

    togglePreview = (preview: boolean) => (this.preview = preview);

    saveCard = (card: Card) =>
        (this.cards = [Object.assign({}, card), ...this.cards]);

    loadCard = (card: Card) => (this.card = Object.assign({}, card));

    deleteCard = (card: Card) =>
        (this.cards = this.cards.filter((_card) => _card !== card));

    onUpload = (cards: Card[]) => (this.cards = cards);
}
