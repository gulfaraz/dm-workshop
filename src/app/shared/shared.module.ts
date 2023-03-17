import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { JsonUploaderComponent } from './json-uploader/json-uploader.component';
import { JsonExporterComponent } from './exporter/json-exporter.component';
import { PdfExporterComponent } from './exporter/pdf-exporter.component';
import { HtmlExporterComponent } from './exporter/html-exporter.component';

@NgModule({
    imports: [IonicModule],
    declarations: [
        JsonUploaderComponent,
        JsonExporterComponent,
        PdfExporterComponent,
        HtmlExporterComponent,
    ],
    exports: [
        JsonUploaderComponent,
        JsonExporterComponent,
        PdfExporterComponent,
        HtmlExporterComponent,
    ],
})
export class SharedModule {}
