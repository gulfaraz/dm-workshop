import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { JsonUploaderComponent } from './json-uploader/json-uploader.component';
import { JsonExporterComponent } from './json-exporter/json-exporter.component';
import { PdfExporterComponent } from './pdf-exporter/pdf-exporter.component';

@NgModule({
    imports: [IonicModule],
    declarations: [
        JsonUploaderComponent,
        JsonExporterComponent,
        PdfExporterComponent,
    ],
    exports: [
        JsonUploaderComponent,
        JsonExporterComponent,
        PdfExporterComponent,
    ],
})
export class SharedModule {}
