import { Card } from './item-cards.type';

export class ItemCardsService {
    getCardSize = (card: Card) =>
        card.size.split('x').map((size) => parseInt(size));

    findCard = (cards: Card[], x: number, y: number) =>
        cards.findIndex((card) => {
            const cardSize = this.getCardSize(card);
            return cardSize[0] <= x && cardSize[1] <= y;
        });

    fillPage = (page: Card[], cards: Card[], x: number, y: number) => {
        const cardIndex = this.findCard(cards, x, y);

        if (cardIndex >= 0) {
            const card = cards.splice(cardIndex, 1)[0];
            page.push(card);
            const cardSize = this.getCardSize(card);
            this.fillPage(page, cards, x - cardSize[0], cardSize[1]);
            this.fillPage(page, cards, x, y - cardSize[1]);
        }

        return [page, cards];
    };

    getPages = (cards: Card[]) => {
        cards.sort(this.sortCards);
        const pages: Card[][] = [];
        let cardIndex = this.findCard(cards, 4, 3);

        while (cardIndex >= 0) {
            const [page, cardsLeft] = this.fillPage([], cards, 4, 3);
            cards = [...cardsLeft];
            cardIndex = this.findCard(cards, 4, 3);
            pages.push(page);
        }

        return pages;
    };

    sortCards = (cardA: Card, cardB: Card) => {
        const cardASize = this.getCardSize(cardA);
        const cardBSize = this.getCardSize(cardB);
        const columnSizeDiff = cardBSize[1] - cardASize[1];
        const rowSizeDiff = cardBSize[0] - cardASize[0];
        return columnSizeDiff === 0 ? rowSizeDiff : columnSizeDiff;
    };
}
