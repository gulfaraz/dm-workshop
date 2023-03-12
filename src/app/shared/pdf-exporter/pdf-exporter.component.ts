import { Component, Input } from '@angular/core';
import { jsPDF } from 'jspdf';

import { getExportName } from '../utils';

@Component({
    selector: 'app-pdf-exporter',
    templateUrl: './pdf-exporter.component.html',
})
export class PdfExporterComponent {
    @Input() label = 'Export PDF';
    @Input() sheetSelector = '.sheet';

    export = async () => {
        const htmlElements = Array.from<HTMLElement>(
            document.querySelectorAll(this.sheetSelector),
        );

        const doc = new jsPDF({ orientation: 'landscape' });

        for (let i = 0; i < htmlElements.length; i++) {
            await doc.html(htmlElements[i], {
                callback: (doc) =>
                    i + 1 < htmlElements.length ? doc.insertPage(1) : doc,
                width: 299,
                windowWidth: 1110,
            });
        }

        doc.save(getExportName(this.label, 'pdf'));
    };
}
