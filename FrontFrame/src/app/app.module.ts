import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from '../pages/home/home.module';
import { NewCardModule } from '../pages/new-card/new-card.module';
import { DetailsModule } from '../pages/details/details.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NewCardModule,
    DetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
