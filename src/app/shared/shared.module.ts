import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { JsonUploaderComponent } from './json-uploader/json-uploader.component';

@NgModule({
    imports: [IonicModule],
    declarations: [JsonUploaderComponent],
    exports: [JsonUploaderComponent],
})
export class SharedModule {}
