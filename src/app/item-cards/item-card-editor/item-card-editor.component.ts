import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Card, sizes } from '../item-cards.type';
import config from '../../shared/config';

@Component({
    selector: 'app-item-card-editor',
    templateUrl: './item-card-editor.component.html',
    styleUrls: ['./item-card-editor.component.scss'],
})
export class ItemCardEditorComponent {
    @Input() card!: Card;
    @Output() saveCardEvent = new EventEmitter<Card>();

    debounce = config.debounce;

    onClear = () => (this.card = { size: sizes[0] } as Card);

    onSave = () => this.saveCardEvent.emit(this.card);
}
