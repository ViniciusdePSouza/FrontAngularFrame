import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from '../pages/home/home.module';
import { NewCardModule } from '../pages/new-card/new-card.module';
import { DetailsModule } from '../pages/details/details.module';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { SharedModule } from "../components/shared.module";
import { EditPostModule } from 'src/pages/edit-post/edit-post.module';



@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
        { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymse.min.js' }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule, 
        NewCardModule,
        DetailsModule,
        EditorModule,
        HttpClientModule,
        SharedModule,
        EditPostModule
    ]
})
export class AppModule { }
