import { Component, EventEmitter, Output } from '@angular/core';

import cardSets from './item-card.sets';

@Component({
    selector: 'app-item-card-sets',
    templateUrl: './item-card-sets.component.html',
})
export class ItemCardSetsComponent {
    @Output() loadCardSetEvent = new EventEmitter<string>();

    cardSetNames = Object.keys(cardSets);

    loadCardSet = (setName = '') => this.loadCardSetEvent.emit(setName);
}
