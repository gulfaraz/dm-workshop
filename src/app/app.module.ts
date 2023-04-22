import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import {
    provideAnalytics,
    getAnalytics,
    ScreenTrackingService,
    UserTrackingService,
} from '@angular/fire/analytics';

import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { DMWorkshopComponent } from './dm-workshop.component';

@NgModule({
    imports: [
        BrowserModule,
        IonicModule.forRoot({ mode: 'ios' }),
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAnalytics(() => getAnalytics()),
    ],
    declarations: [AppComponent, DMWorkshopComponent],
    bootstrap: [AppComponent],
    providers: [ScreenTrackingService, UserTrackingService],
})
export class AppModule {}
