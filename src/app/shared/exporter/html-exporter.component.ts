import { Component, Input } from '@angular/core';

import { download } from './utils';

@Component({
    selector: 'app-html-exporter',
    templateUrl: './exporter.component.html',
})
export class HtmlExporterComponent {
    @Input() label = 'Export HTML';
    @Input() sheetSelector = '.sheet';

    export = () => {
        const htmlElements = Array.from<HTMLElement>(
            document.querySelectorAll(this.sheetSelector),
        ).map((x) => x.outerHTML);

        const styleSheet = `<style>*{box-sizing:border-box}@page{margin:0}body{margin:0;padding:0;height:100%;overflow:auto}body.A4.landscape .sheet{width:297mm;height:209mm}@media screen{body{background:#e0e0e0}.sheet{background:#fff;box-shadow:0 .5mm 2mm rgba(0,0,0,.3);margin:5mm auto}}@media print{body.A4.landscape{width:297mm}}.sheet{position:relative;--rows:16;--columns:23;--gap:5mm;margin:0;padding:4.75mm 5mm;display:grid;grid-auto-flow:column;grid-template-rows:repeat(var(--rows),calc((100% - (var(--gap) * (var(--rows) - 1)))/ var(--rows)));grid-template-columns:repeat(var(--columns),calc((100% - (var(--gap) * (var(--columns) - 1)))/ var(--columns)));gap:var(--gap);align-items:center;justify-items:center;page-break-before:always}.token{background-color:#fff;background-size:contain;background-repeat:no-repeat;background-position:center;vertical-align:top;width:var(--size);height:var(--size);border-style:solid;border-color:#f0f;border-radius:50%;border-width:calc(var(--size)/ 10)}.token.huge,.token.large{border-width:calc(var(--size)/ 15)}.token.tiny{--size:12.5mm;grid-row:span 1;grid-column:span 1}.token.medium,.token.small{--size:25mm;grid-row:span 2;grid-column:span 2}.token.large{--size:50mm;grid-row:span 4;grid-column:span 4}.token.huge{--size:75mm;grid-row:span 6;grid-column:span 6}.token.gargantuan{border-width:calc(var(--size)/ 20);--size:100mm;grid-row:span 8;grid-column:span 8}</style>`;
        const htmlString = `<!DOCTYPE html><html><head><title>${
            this.label
        }</title>${styleSheet}</head><body class="A4 landscape">${htmlElements.join(
            '',
        )}</body></html>`;

        download(htmlString, 'text/html', this.label);
    };
}
