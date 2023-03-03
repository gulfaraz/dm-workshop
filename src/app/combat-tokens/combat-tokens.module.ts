import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CombatTokensComponent } from './combat-tokens.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: CombatTokensComponent }]),
        IonicModule,
    ],
    declarations: [CombatTokensComponent],
    exports: [CombatTokensComponent],
})
export class CombatTokensModule {}
