import { NgModule } from '@angular/core';

//Components
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { InputTextComponent } from './input-text/input-text.component';

//Modules
import { RouterModule, } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
    declarations: [
        HeaderComponent,
        PostsComponent,
        InputTextComponent
    ],
    imports: [
        RouterModule,
        EditorModule
    ],
    providers: [],
    exports: [
        HeaderComponent,
        PostsComponent,
        InputTextComponent
    ]
})
export class SharedModule { }
