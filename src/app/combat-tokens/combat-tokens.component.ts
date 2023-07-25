import { Component } from '@angular/core';

import { Token } from './combat-tokens.type';
import { tokenSets } from './combat-token-sets/combat-token.sets';

@Component({
    selector: 'app-combat-tokens',
    templateUrl: './combat-tokens.component.html',
    styleUrls: ['./combat-tokens.component.scss'],
})
export class CombatTokensComponent {
    tokens: Token[] = tokenSets['Mixed'];
    token = Object.assign({}, this.tokens[0]);
    storageKey = 'combat-tokens';

    constructor() {
        const storedTokens = localStorage.getItem(this.storageKey);
        if (storedTokens && storedTokens.length > 2)
            this.tokens = JSON.parse(storedTokens);
    }

    saveToken = (token: Token) =>
        this.setTokens([Object.assign({}, token), ...this.tokens]);

    deleteToken = (token: Token) =>
        this.setTokens(this.tokens.filter((_token) => _token !== token));

    setTokens = (tokens: Token[]) => {
        localStorage.setItem(this.storageKey, JSON.stringify(tokens));
        this.tokens = tokens;
    };

    loadTokenSet = (tokenSetName: string) =>
        this.setTokens(
            tokenSetName ? [...tokenSets[tokenSetName], ...this.tokens] : [],
        );
}
