import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pdf-exporter',
    templateUrl: './pdf-exporter.component.html',
})
export class PdfExporterComponent {
    @Input() label = 'Export PDF';
}
