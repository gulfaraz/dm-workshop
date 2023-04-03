import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Token, sizes, colours } from '../combat-tokens.type';
import config from '../../shared/config';

@Component({
    selector: 'app-combat-token-editor',
    templateUrl: './combat-token-editor.component.html',
    styleUrls: [
        '../combat-token.component.scss',
        './combat-token-editor.component.scss',
    ],
})
export class CombatTokenEditorComponent {
    @Input() token: Token = {} as Token;
    @Output() saveTokenEvent = new EventEmitter<Token>();

    debounce = config.debounce;
    sizes = sizes;

    onSave = () => this.saveTokenEvent.emit(this.token);

    onSaveBatch = () =>
        colours.forEach((colour) =>
            this.saveTokenEvent.emit(Object.assign({}, this.token, { colour })),
        );
}
