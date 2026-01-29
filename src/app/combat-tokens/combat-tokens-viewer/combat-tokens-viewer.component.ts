import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    inject,
} from '@angular/core';

import { Token, scaleTokenPosition } from '../combat-tokens.type';
import { CombatTokensService } from '../combat-tokens.service';

@Component({
    selector: 'app-combat-tokens-viewer',
    templateUrl: './combat-tokens-viewer.component.html',
    styleUrls: [
        '../../shared/paper-css.component.scss',
        '../combat-token.component.scss',
        './combat-tokens-viewer.component.scss',
    ],
    standalone: false,
})
export class CombatTokensViewerComponent implements OnChanges {
    private combatTokensService = inject(CombatTokensService);

    @Input() tokens: Token[] = [];
    @Output() deleteTokenEvent = new EventEmitter<Token>();

    sheets: Token[][] = [];
    scaleTokenPosition = scaleTokenPosition;

    ngOnChanges(changes: SimpleChanges) {
        if ('tokens' in changes) this.loadSheets();
    }

    loadSheets = () =>
        (this.sheets = this.combatTokensService.getSheets([...this.tokens]));

    deleteToken = (token: Token) => this.deleteTokenEvent.emit(token);
}
