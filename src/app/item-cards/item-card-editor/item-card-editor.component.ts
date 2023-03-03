import { Component } from '@angular/core';

@Component({
    selector: 'app-item-card-editor',
    templateUrl: './item-card-editor.component.html',
    styleUrls: ['./item-card-editor.component.scss'],
})
export class ItemCardEditorComponent {
    debounce = 100;
}
