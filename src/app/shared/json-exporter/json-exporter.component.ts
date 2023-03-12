import { Component, Input } from '@angular/core';

import { getExportName } from '../utils';

@Component({
    selector: 'app-json-exporter',
    templateUrl: './json-exporter.component.html',
})
export class JsonExporterComponent {
    @Input() label = 'Export JSON';
    @Input() json = {};

    export = () => {
        const dataStr =
            'data:text/json;charset=utf-8,' +
            encodeURIComponent(JSON.stringify(this.json));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute('href', dataStr);
        downloadAnchorNode.setAttribute(
            'download',
            getExportName(this.label, 'json'),
        );
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };
}
