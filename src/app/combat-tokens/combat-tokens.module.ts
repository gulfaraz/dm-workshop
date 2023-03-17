import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { CombatTokensComponent } from './combat-tokens.component';
import { CombatTokenEditorComponent } from './combat-token-editor/combat-token-editor.component';
import { CombatTokensControlsComponent } from './combat-tokens-controls/combat-tokens-controls.component';
import { CombatTokensViewerComponent } from './combat-tokens-viewer/combat-tokens-viewer.component';
import { CombatTokensService } from './combat-tokens.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: CombatTokensComponent }]),
        FormsModule,
        IonicModule,
        SharedModule,
    ],
    declarations: [
        CombatTokensComponent,
        CombatTokenEditorComponent,
        CombatTokensControlsComponent,
        CombatTokensViewerComponent,
    ],
    exports: [
        CombatTokensComponent,
        CombatTokenEditorComponent,
        CombatTokensControlsComponent,
        CombatTokensViewerComponent,
    ],
    providers: [CombatTokensService],
})
export class CombatTokensModule {}
