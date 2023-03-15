import {
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
} from '@angular/core';

import { Token } from '../combat-tokens.type';

@Component({
    selector: 'app-combat-token',
    template: '',
    styleUrls: ['./combat-token.component.scss'],
})
export class CombatTokenComponent {
    @Input() token!: Token;
    @Output() deleteTokenEvent = new EventEmitter<Token>();

    @HostBinding('class') get class() {
        return this.token.size.toLowerCase();
    }
    @HostBinding('style.background-image') get backgroundImage() {
        return `url('${this.token.image}')`;
    }
    @HostBinding('style.border-color') get borderColor() {
        return this.token.colour;
    }
    @HostBinding('style.background-size') get backgroundSize() {
        return `${this.token.zoom}%`;
    }

    onDelete = () => this.deleteTokenEvent.emit(this.token);
}
