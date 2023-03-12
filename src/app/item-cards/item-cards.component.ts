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
    storageKey = 'item-cards';

    constructor() {
        const storedCards = localStorage.getItem(this.storageKey);
        console.log(storedCards);
        if (storedCards && storedCards.length > 2)
            this.cards = JSON.parse(storedCards);
    }

    togglePreview = (preview: boolean) => (this.preview = preview);

    saveCard = (card: Card) =>
        this.setCards([Object.assign({}, card), ...this.cards]);

    loadCard = (card: Card) => (this.card = Object.assign({}, card));

    deleteCard = (card: Card) =>
        this.setCards(this.cards.filter((_card) => _card !== card));

    setCards = (cards: Card[]) => {
        localStorage.setItem(this.storageKey, JSON.stringify(cards));
        this.cards = cards;
    };
}
