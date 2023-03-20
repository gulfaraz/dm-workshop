import { Component, Input } from '@angular/core';

import { Character } from '../alignment-tracker.type';

@Component({
    selector: 'app-alignment-tracker-controls',
    templateUrl: './alignment-tracker-controls.component.html',
})
export class AlignmentTrackerControlsComponent {
    @Input() characters: Character[] = [];

    setCharacters = (characters: Character[]) => {
        console.log('characters', characters);
    };
}
