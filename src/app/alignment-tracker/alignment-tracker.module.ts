import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AlignmentTrackerComponent } from './alignment-tracker.component';

@NgModule({
    imports: [
        IonicModule,
        RouterModule.forChild([
            { path: '', component: AlignmentTrackerComponent },
        ]),
    ],
    declarations: [AlignmentTrackerComponent],
    exports: [AlignmentTrackerComponent],
})
export class AlignmentTrackerModule {}
