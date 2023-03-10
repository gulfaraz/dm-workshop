import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SegmentCustomEvent } from '@ionic/angular';

import { Card } from '../item-cards.type';

@Component({
    selector: 'app-item-cards-controls',
    templateUrl: './item-cards-controls.component.html',
})
export class ItemCardsControlsComponent {
    @Input() preview = false;
    @Input() cards: Card[] = [];
    @Output() togglePreviewEvent = new EventEmitter<boolean>();

    togglePreview = (segmentCustomEvent: SegmentCustomEvent) =>
        this.togglePreviewEvent.emit(
            segmentCustomEvent.detail.value === 'true',
        );
}
