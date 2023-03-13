import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DMWorkshopComponent } from './dm-workshop.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: DMWorkshopComponent,
                    children: [
                        {
                            path: '',
                            pathMatch: 'full',
                            redirectTo: 'item-cards',
                        },
                        {
                            path: 'item-cards',
                            loadChildren: () =>
                                import('./item-cards/item-cards.module').then(
                                    (m) => m.ItemCardsModule,
                                ),
                        },
                        {
                            path: 'combat-tokens',
                            loadChildren: () =>
                                import(
                                    './combat-tokens/combat-tokens.module'
                                ).then((m) => m.CombatTokensModule),
                        },
                        {
                            path: 'alignment-tracker',
                            loadChildren: () =>
                                import(
                                    './alignment-tracker/alignment-tracker.module'
                                ).then((m) => m.AlignmentTrackerModule),
                        },
                    ],
                },
            ],
            { useHash: true },
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
