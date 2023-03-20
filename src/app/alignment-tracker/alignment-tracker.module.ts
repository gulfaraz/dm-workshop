import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { AlignmentTrackerComponent } from './alignment-tracker.component';
import { AlignmentTrackerControlsComponent } from './alignment-tracker-controls/alignment-tracker-controls.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: AlignmentTrackerComponent },
        ]),
        IonicModule,
        SharedModule,
    ],
    declarations: [
        AlignmentTrackerComponent,
        AlignmentTrackerControlsComponent,
    ],
    exports: [AlignmentTrackerComponent, AlignmentTrackerControlsComponent],
})
export class AlignmentTrackerModule {}
