import { Component, Input, OnInit } from '@angular/core';
import { ItemCardsService } from '../item-cards.service';

import { Card } from '../item-cards.type';

@Component({
    selector: 'app-item-cards-viewer',
    templateUrl: './item-cards-viewer.component.html',
    styleUrls: [
        './item-cards-viewer-paper-css.component.scss',
        './item-cards-viewer.component.scss',
    ],
})
export class ItemCardsViewerComponent implements OnInit {
    @Input() cards: Card[] = [];

    sheets: Card[][] = [];
    itemCardsService: ItemCardsService;

    constructor(itemCardsService: ItemCardsService) {
        this.itemCardsService = itemCardsService;
    }

    ngOnInit() {
        this.sheets = this.itemCardsService.getPages([...this.cards]);
    }
}
