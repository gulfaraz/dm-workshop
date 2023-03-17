import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';

import { Token } from '../combat-tokens.type';
import { CombatTokensService } from '../combat-tokens.service';

@Component({
    selector: 'app-combat-tokens-viewer',
    templateUrl: './combat-tokens-viewer.component.html',
    styleUrls: [
        '../../shared/paper-css.component.scss',
        '../combat-token.component.scss',
        './combat-tokens-viewer.component.scss',
    ],
})
export class CombatTokensViewerComponent implements OnChanges {
    @Input() tokens: Token[] = [];
    @Output() deleteTokenEvent = new EventEmitter<Token>();

    sheets: Token[][] = [];

    constructor(private combatTokensService: CombatTokensService) {}

    ngOnChanges(changes: SimpleChanges) {
        if ('tokens' in changes) this.loadSheets();
    }

    loadSheets = () =>
        (this.sheets = this.combatTokensService.getSheets([...this.tokens]));

    deleteToken = (token: Token) => this.deleteTokenEvent.emit(token);
}
