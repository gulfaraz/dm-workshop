import { Component } from '@angular/core';

import { Card, sizes } from './item-cards.type';
import { cardSets } from './item-card-sets/item-card.sets';

@Component({
    selector: 'app-item-cards',
    templateUrl: './item-cards.component.html',
    styleUrls: ['./item-cards.component.scss'],
})
export class ItemCardsComponent {
    cards: Card[] = cardSets['Starter'];
    card = { size: sizes[0] } as Card;
    preview = false;
    storageKey = 'item-cards';

    constructor() {
        const storedCards = localStorage.getItem(this.storageKey);
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

    loadCardSet = (cardSetName: string) =>
        this.setCards(
            cardSetName ? [...cardSets[cardSetName], ...this.cards] : [],
        );
}
