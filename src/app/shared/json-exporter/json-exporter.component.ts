import { Component, Input } from '@angular/core';

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
        downloadAnchorNode.setAttribute('download', this.getExportName());
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    getExportName = () => {
        const prefix = this.label
            .split(' ')
            .map((x) => x.toLowerCase())
            .join('_');
        const date = new Date();
        const timestamp = `${date.getFullYear()}_${
            date.getMonth() + 1
        }_${date.getDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;
        const extension = 'json';
        return `${prefix}_${timestamp}.${extension}`;
    };
}
