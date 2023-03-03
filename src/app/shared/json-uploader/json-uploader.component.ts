import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-json-uploader',
    templateUrl: './json-uploader.component.html',
})
export class JsonUploaderComponent {
    @Input() label = 'Upload JSON';
}
