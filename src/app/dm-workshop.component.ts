import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Analytics, logEvent } from '@angular/fire/analytics';

@Component({
    selector: 'app-dm-workshop',
    templateUrl: './dm-workshop.component.html',
    styleUrls: ['./dm-workshop.component.scss'],
})
export class DMWorkshopComponent {
    paymentLink = 'https://buy.stripe.com/5kAcMMbGXc0NexW144';

    private analytics: Analytics = inject(Analytics);

    constructor(router: Router) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                logEvent<string>(this.analytics, 'screen_view', {
                    firebase_screen: event.urlAfterRedirects,
                });
            }
        });
    }
}
