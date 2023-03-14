import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { CombatTokensComponent } from './combat-tokens.component';
import { CombatTokenEditorComponent } from './combat-token-editor/combat-token-editor.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: CombatTokensComponent }]),
        FormsModule,
        IonicModule,
        SharedModule,
    ],
    declarations: [CombatTokensComponent, CombatTokenEditorComponent],
    exports: [CombatTokensComponent, CombatTokenEditorComponent],
})
export class CombatTokensModule {}
