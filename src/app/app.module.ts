import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DMWorkshopComponent } from './dm-workshop.component';

@NgModule({
    imports: [
        BrowserModule,
        IonicModule.forRoot({ mode: 'ios' }),
        AppRoutingModule,
    ],
    declarations: [AppComponent, DMWorkshopComponent],
    bootstrap: [AppComponent],
    providers: [],
})
export class AppModule {}
