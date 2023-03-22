import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Card } from '../item-cards.type';
import config from '../../shared/config';

@Component({
    selector: 'app-item-card-editor',
    templateUrl: './item-card-editor.component.html',
    styleUrls: ['./item-card-editor.component.scss'],
})
export class ItemCardEditorComponent {
    @Input() card: Card = {} as Card;
    @Output() saveCardEvent = new EventEmitter<Card>();

    debounce = config.debounce;

    onClear = () => (this.card = {} as Card);

    onSave = () => this.saveCardEvent.emit(this.card);
}
