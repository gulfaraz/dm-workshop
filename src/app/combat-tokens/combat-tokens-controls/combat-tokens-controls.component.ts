import { Component, Input } from '@angular/core';

import { Token } from '../combat-tokens.type';

@Component({
    selector: 'app-combat-tokens-controls',
    templateUrl: './combat-tokens-controls.component.html',
    standalone: false,
})
export class CombatTokensControlsComponent {
    @Input() tokens: Token[] = [];
}
