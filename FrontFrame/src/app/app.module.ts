import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from '../pages/home/home.module';
import { NewCardModule } from '../pages/new-card/new-card.module';
import { DetailsModule } from '../pages/details/details.module';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NewCardModule,
    DetailsModule,
    EditorModule,
    HttpClientModule,
  ],
  providers: [
    {provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymse.min.js'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
