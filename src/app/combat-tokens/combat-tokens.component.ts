import { Component } from '@angular/core';

import { Token, tokens } from './combat-tokens.type';

@Component({
    selector: 'app-combat-tokens',
    templateUrl: './combat-tokens.component.html',
})
export class CombatTokensComponent {
    tokens: Token[] = tokens;
    token = tokens[0];
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
}
