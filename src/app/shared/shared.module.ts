import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { JsonImporterComponent } from './json-importer/json-importer.component';
import { JsonExporterComponent } from './exporter/json-exporter.component';
import { PdfExporterComponent } from './exporter/pdf-exporter.component';
import { HtmlExporterComponent } from './exporter/html-exporter.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [IonicModule],
    declarations: [
        JsonImporterComponent,
        JsonExporterComponent,
        PdfExporterComponent,
        HtmlExporterComponent,
        FooterComponent,
    ],
    exports: [
        JsonImporterComponent,
        JsonExporterComponent,
        PdfExporterComponent,
        HtmlExporterComponent,
        FooterComponent,
    ],
})
export class SharedModule {}
