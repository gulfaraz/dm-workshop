import { Component, EventEmitter, Output } from '@angular/core';

import tokenSets from './combat-token.sets';

@Component({
    selector: 'app-combat-token-sets',
    templateUrl: './combat-token-sets.component.html',
})
export class CombatTokenSetsComponent {
    @Output() loadTokenSetEvent = new EventEmitter<string>();

    tokenSetNames = Object.keys(tokenSets);

    loadTokenSet = (setName = '') => this.loadTokenSetEvent.emit(setName);
}
