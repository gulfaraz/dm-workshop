import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SegmentCustomEvent } from '@ionic/angular';

@Component({
    selector: 'app-item-cards-controls',
    templateUrl: './item-cards-controls.component.html',
})
export class ItemCardsControlsComponent {
    @Input() preview = false;
    @Input() autoAssignSizes!: () => void;
    @Output() togglePreviewEvent = new EventEmitter<boolean>();

    togglePreview(segmentCustomEvent: SegmentCustomEvent) {
        this.togglePreviewEvent.emit(
            segmentCustomEvent.detail.value === 'true',
        );
    }
}
