import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DMWorkshopComponent } from './dm-workshop.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot()],
    declarations: [AppComponent, DMWorkshopComponent],
    bootstrap: [AppComponent],
    providers: [],
})
export class AppModule {}
