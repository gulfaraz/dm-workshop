import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Token, sizes } from '../combat-tokens.type';

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

    debounce = 100;
    sizes = sizes;

    onSave = () => this.saveTokenEvent.emit(this.token);
}
