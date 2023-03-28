import { Card } from '../item-cards.type';

import * as starterCards from './starter.item-card-set.json';

export const cardSets: { [key: string]: Card[] } = {
    Starter: Array.from(starterCards),
};

export default cardSets;
