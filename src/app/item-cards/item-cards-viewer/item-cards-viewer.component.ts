import {
    Component,
    EventEmitter,
    Input,
    Output,
    OnChanges,
    SimpleChanges,
} from '@angular/core';

import { ItemCardsService } from '../item-cards.service';
import { Card } from '../item-cards.type';

@Component({
    selector: 'app-item-cards-viewer',
    templateUrl: './item-cards-viewer.component.html',
    styleUrls: [
        '../../shared/paper-css.component.scss',
        './item-cards-viewer.component.scss',
    ],
})
export class ItemCardsViewerComponent implements OnChanges {
    @Input() cards: Card[] = [];
    @Output() loadCardEvent = new EventEmitter<Card>();

    sheets: Card[][] = [];

    constructor(private itemCardsService: ItemCardsService) {}

    ngOnChanges(changes: SimpleChanges) {
        if ('cards' in changes) this.loadSheets();
    }

    loadSheets = () =>
        (this.sheets = this.itemCardsService.getSheets([...this.cards]));

    loadCard = (card: Card) => this.loadCardEvent.emit(card);
}
