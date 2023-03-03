import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AlignmentTrackerComponent } from './alignment-tracker.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: AlignmentTrackerComponent },
        ]),
        IonicModule,
    ],
    declarations: [AlignmentTrackerComponent],
    exports: [AlignmentTrackerComponent],
})
export class AlignmentTrackerModule {}
