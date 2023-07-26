import { Directive, HostListener, Input } from '@angular/core';
import { Token, zoomRange } from '../combat-tokens.type';

@Directive({
    selector: '[appCombatTokenEditorWheel]',
})
export class CombatTokenEditorWheelDirective {
    @Input() appCombatTokenEditorWheel: Token = {} as Token;

    @HostListener('wheel', ['$event'])
    onWheel(wheelEvent: WheelEvent) {
        wheelEvent.preventDefault();
        const speed = Math.ceil(Math.abs(wheelEvent.deltaY) / 40);
        if (wheelEvent.deltaY > 0) {
            this.appCombatTokenEditorWheel.zoom = Math.min(
                zoomRange.max,
                this.appCombatTokenEditorWheel.zoom + speed,
            );
        }
        if (wheelEvent.deltaY < 0) {
            this.appCombatTokenEditorWheel.zoom = Math.max(
                zoomRange.min,
                this.appCombatTokenEditorWheel.zoom - speed,
            );
        }
    }
}
