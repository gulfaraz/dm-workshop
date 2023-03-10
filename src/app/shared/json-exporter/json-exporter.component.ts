import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-json-exporter',
    templateUrl: './json-exporter.component.html',
})
export class JsonExporterComponent {
    @Input() label = 'Export JSON';
}
