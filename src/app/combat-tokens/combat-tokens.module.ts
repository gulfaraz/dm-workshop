import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CombatTokensComponent } from './combat-tokens.component';

@NgModule({
    imports: [
        IonicModule,
        RouterModule.forChild([{ path: '', component: CombatTokensComponent }]),
    ],
    declarations: [CombatTokensComponent],
    exports: [CombatTokensComponent],
})
export class CombatTokensModule {}
