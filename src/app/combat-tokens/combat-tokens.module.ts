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
import { CombatTokenSetsComponent } from './combat-token-sets/combat-token-sets.component';
import { CombatTokensService } from './combat-tokens.service';
import { CombatTokenEditorWheelDirective } from './combat-token-editor/combat-token-editor-wheel.directive';
import { CombatTokenEditorDragDirective } from './combat-token-editor/combat-token-editor-drag.directive';

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
        CombatTokenSetsComponent,
        CombatTokenEditorWheelDirective,
        CombatTokenEditorDragDirective,
    ],
    exports: [
        CombatTokensComponent,
        CombatTokenEditorComponent,
        CombatTokensControlsComponent,
        CombatTokensViewerComponent,
        CombatTokenSetsComponent,
    ],
    providers: [CombatTokensService],
})
export class CombatTokensModule {}
